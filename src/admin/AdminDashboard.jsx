import { useState, useEffect } from 'react';
import { useAdminAuth } from './AdminAuth';
import { sanityClient, urlFor } from '../lib/sanity';
import {
  LayoutDashboard, FileText, MessageSquare, ClipboardList,
  LogOut, Plus, Pencil, Trash2, ExternalLink, X, Save, Eye
} from 'lucide-react';
import './admin.css';

const NAV = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'posts', label: 'Blog Posts', icon: FileText },
  { id: 'studio', label: 'Rich Editor', icon: ExternalLink },
];

// Sanity write client (needs token)
const writeClient = sanityClient.withConfig({
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: false,
});

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, "slug": slug.current, author, category, publishedAt, excerpt, "image": mainImage
}`;

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function categoryBadge(cat) {
  const map = { Construction: 'admin-badge-green', 'Industry News': 'admin-badge-blue', 'Company News': 'admin-badge-orange' };
  return map[cat] || 'admin-badge-blue';
}

/* ── Overview ── */
function Overview({ posts }) {
  return (
    <>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Dashboard</h1>
          <p className="admin-page-sub">Welcome to the Bessblock content portal.</p>
        </div>
        <a href="/" target="_blank" rel="noopener noreferrer" className="admin-btn admin-btn-outline">
          <Eye size={14} /> View Website
        </a>
      </div>

      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-icon"><FileText size={20} /></div>
          <div className="admin-stat-label">Blog Posts</div>
          <div className="admin-stat-value">{posts.length}</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon"><MessageSquare size={20} /></div>
          <div className="admin-stat-label">Contact Form</div>
          <div className="admin-stat-value" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', paddingTop: '0.5rem' }}>
            Delivered via Web3Forms email
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon"><ClipboardList size={20} /></div>
          <div className="admin-stat-label">Quote Requests</div>
          <div className="admin-stat-value" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', paddingTop: '0.5rem' }}>
            Delivered via Web3Forms email
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <span className="admin-card-title">Recent Blog Posts</span>
        </div>
        {posts.length === 0 ? (
          <p className="admin-empty">No posts yet. Create your first blog post.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              {posts.slice(0, 5).map(p => (
                <tr key={p._id}>
                  <td className="admin-table-title">{p.title}</td>
                  <td><span className={`admin-badge ${categoryBadge(p.category)}`}>{p.category || '—'}</span></td>
                  <td>{formatDate(p.publishedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

/* ── Post Form ── */
const EMPTY_POST = { title: '', slug: '', author: 'Bessblock Admin', category: 'Construction', excerpt: '', body: '' };
const CATEGORIES = ['Construction', 'Products', 'Industry News', 'Company News', 'Uncategorized'];

function PostForm({ post, onSave, onCancel }) {
  const editing = !!post?._id;
  const [form, setForm] = useState(editing ? {
    title: post.title || '',
    slug: post.slug || '',
    author: post.author || 'Bessblock Admin',
    category: post.category || 'Construction',
    excerpt: post.excerpt || '',
    body: post.body ? post.body.map(b => b.children?.map(c => c.text).join('') || '').join('\n\n') : '',
  } : EMPTY_POST);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({
      ...prev,
      [id]: value,
      ...(id === 'title' && !editing ? { slug: slugify(value) } : {}),
    }));
  };

  const toBlocks = (text) =>
    text.split(/\n\n+/).filter(Boolean).map(para => ({
      _type: 'block',
      _key: Math.random().toString(36).slice(2),
      style: 'normal',
      children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text: para, marks: [] }],
      markDefs: [],
    }));

  const handleSave = async () => {
    if (!form.title || !form.slug || !form.excerpt) { setErr('Title, slug, and excerpt are required.'); return; }
    setSaving(true);
    setErr('');
    try {
      const doc = {
        _type: 'post',
        title: form.title,
        slug: { _type: 'slug', current: form.slug },
        author: form.author,
        category: form.category,
        excerpt: form.excerpt,
        publishedAt: editing ? post.publishedAt : new Date().toISOString(),
        body: toBlocks(form.body),
      };
      if (editing) {
        await writeClient.patch(post._id).set(doc).commit();
      } else {
        await writeClient.create(doc);
      }
      onSave();
    } catch (e) {
      setErr('Save failed: ' + (e.message || 'Unknown error'));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-card">
      <div className="admin-card-header">
        <span className="admin-card-title">{editing ? 'Edit Post' : 'New Blog Post'}</span>
        <button className="admin-btn admin-btn-outline" onClick={onCancel}><X size={14} /> Cancel</button>
      </div>
      {err && <p style={{ color: '#ef4444', fontSize: 'var(--text-sm)', marginBottom: '1rem' }}>{err}</p>}
      <div className="admin-form">
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label htmlFor="title">Title *</label>
            <input id="title" value={form.title} onChange={handleChange} placeholder="Post title" />
          </div>
          <div className="admin-form-group">
            <label htmlFor="slug">Slug *</label>
            <input id="slug" value={form.slug} onChange={handleChange} placeholder="post-url-slug" />
          </div>
        </div>
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label htmlFor="author">Author</label>
            <input id="author" value={form.author} onChange={handleChange} />
          </div>
          <div className="admin-form-group">
            <label htmlFor="category">Category</label>
            <select id="category" value={form.category} onChange={handleChange}>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="admin-form-group">
          <label htmlFor="excerpt">Excerpt *</label>
          <textarea id="excerpt" rows={2} value={form.excerpt} onChange={handleChange} placeholder="Short description shown on blog listing…" style={{ minHeight: '70px' }} />
        </div>
        <div className="admin-form-group">
          <label htmlFor="body">Content (paragraphs separated by blank lines)</label>
          <textarea id="body" rows={14} value={form.body} onChange={handleChange} placeholder="Write your blog post content here. Separate paragraphs with a blank line." />
        </div>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
          💡 For rich content with images, headings, and formatting — use the <strong>Rich Editor</strong> tab (Sanity Studio).
        </p>
        <div className="admin-form-actions">
          <button className="admin-btn admin-btn-outline" onClick={onCancel}>Cancel</button>
          <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving}>
            <Save size={14} /> {saving ? 'Saving…' : 'Save Post'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Posts Tab ── */
function PostsTab({ posts, onRefresh }) {
  const [view, setView] = useState('list'); // list | new | edit
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const handleDelete = async (id) => {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    setDeleting(id);
    await writeClient.delete(id).catch(() => {});
    setDeleting(null);
    onRefresh();
  };

  if (view === 'new') return <PostForm onSave={() => { setView('list'); onRefresh(); }} onCancel={() => setView('list')} />;
  if (view === 'edit') return <PostForm post={editing} onSave={() => { setView('list'); onRefresh(); }} onCancel={() => setView('list')} />;

  return (
    <>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Blog Posts</h1>
          <p className="admin-page-sub">Manage articles published on the Bessblock website.</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={() => setView('new')}>
          <Plus size={14} /> New Post
        </button>
      </div>

      <div className="admin-card">
        {posts.length === 0 ? (
          <p className="admin-empty">No posts yet. Click <strong>New Post</strong> to get started.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Published</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {posts.map(p => (
                <tr key={p._id}>
                  <td className="admin-table-title">{p.title}</td>
                  <td><span className={`admin-badge ${categoryBadge(p.category)}`}>{p.category || '—'}</span></td>
                  <td>{p.author}</td>
                  <td>{formatDate(p.publishedAt)}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="admin-btn admin-btn-outline" style={{ padding: '0.3rem 0.6rem' }}
                        onClick={() => { setEditing(p); setView('edit'); }}>
                        <Pencil size={12} />
                      </button>
                      <a href={`/insights/blog/${p.slug}`} target="_blank" rel="noopener" className="admin-btn admin-btn-outline" style={{ padding: '0.3rem 0.6rem' }}>
                        <Eye size={12} />
                      </a>
                      <button className="admin-btn admin-btn-danger" style={{ padding: '0.3rem 0.6rem' }}
                        onClick={() => handleDelete(p._id)} disabled={deleting === p._id}>
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

/* ── Studio Tab ── */
function StudioTab() {
  const studioUrl = import.meta.env.VITE_SANITY_STUDIO_URL || 'http://localhost:3333';
  return (
    <>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Rich Editor</h1>
          <p className="admin-page-sub">Full Sanity Studio for rich content authoring with images and formatting.</p>
        </div>
        <a href={studioUrl} target="_blank" rel="noopener noreferrer" className="admin-btn admin-btn-outline">
          <ExternalLink size={14} /> Open in new tab
        </a>
      </div>
      <iframe
        src={studioUrl}
        className="admin-studio-iframe"
        title="Sanity Studio"
        allow="same-origin"
      />
    </>
  );
}

/* ── Main Dashboard ── */
export default function AdminDashboard() {
  const { logout } = useAdminAuth();
  const [tab, setTab] = useState('overview');
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    sanityClient.fetch(POSTS_QUERY).then(setPosts).catch(() => {});
  };

  useEffect(() => { fetchPosts(); }, []);

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="admin-sidebar-logo">
            <img src="/bessblocklogo.png" alt="Bessblock" />
          </div>
          <span className="admin-sidebar-badge">Admin Portal</span>
        </div>

        <nav className="admin-nav">
          <div className="admin-nav-section">Content</div>
          {NAV.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`admin-nav-item${tab === id ? ' active' : ''}`}
              onClick={() => setTab(id)}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-logout-btn" onClick={logout}>
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      <main className="admin-main">
        {tab === 'overview' && <Overview posts={posts} />}
        {tab === 'posts' && <PostsTab posts={posts} onRefresh={fetchPosts} />}
        {tab === 'studio' && <StudioTab />}
      </main>
    </div>
  );
}
