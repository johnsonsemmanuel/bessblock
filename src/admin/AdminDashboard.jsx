import { useState, useEffect } from 'react';
import { useAdminAuth } from './AdminAuth';
import { sanityApi, urlFor } from '../lib/sanity';
import { pmToPt, ptToPm } from '../lib/pmToPt';
import TipTapEditor from '../components/TipTapEditor';
import {
  LayoutDashboard, FileText, MessageSquare, ClipboardList,
  LogOut, Plus, Pencil, Trash2, X, Save, Eye, Image, Users
} from 'lucide-react';
import './admin.css';

const NAV = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'posts', label: 'Blog Posts', icon: FileText },
  { id: 'authors', label: 'Authors', icon: Users },
  { id: 'contact', label: 'Contact Submissions', icon: MessageSquare },
  { id: 'quotes', label: 'Quote Requests', icon: ClipboardList },
];

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, "slug": slug.current, author->{name}, category, publishedAt, excerpt, "image": mainImage
}`;
const AUTHORS_QUERY = `*[_type == "author"] | order(name asc) { _id, name, "slug": slug.current, email, role, "avatar": avatar.asset->url }`;
const CONTACT_QUERY = `*[_type == "contactSubmission"] | order(submittedAt desc) { _id, name, email, company, subject, message, submittedAt, read }`;
const QUOTES_QUERY = `*[_type == "quoteRequest"] | order(submittedAt desc) { _id, name, email, phone, company, product, quantity, projectDetails, delivery, timeline, status, submittedAt, read }`;

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

function formatDateTime(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function categoryBadge(cat) {
  const map = { Construction: 'admin-badge-green', 'Industry News': 'admin-badge-blue', 'Company News': 'admin-badge-orange' };
  return map[cat] || 'admin-badge-blue';
}

function statusBadge(status) {
  const map = { pending: 'admin-badge-orange', responded: 'admin-badge-green', closed: 'admin-badge-blue' };
  return map[status] || 'admin-badge-blue';
}

/* ── Overview ── */
function Overview({ posts, contacts, quotes }) {
  const unreadContacts = contacts.filter(c => !c.read).length;
  const unreadQuotes = quotes.filter(q => !q.read).length;
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
          <div className="admin-stat-value">{contacts.length}</div>
          {unreadContacts > 0 && <div className="admin-stat-sub">{unreadContacts} unread</div>}
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon"><ClipboardList size={20} /></div>
          <div className="admin-stat-label">Quote Requests</div>
          <div className="admin-stat-value">{quotes.length}</div>
          {unreadQuotes > 0 && <div className="admin-stat-sub">{unreadQuotes} unread</div>}
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

/* ── Author Form ── */
function AuthorForm({ author, onSave, onCancel }) {
  const editing = !!author?._id;
  const [form, setForm] = useState(editing ? {
    name: author.name || '',
    slug: author.slug || '',
    email: author.email || '',
    role: author.role || '',
    bio: author.bio || '',
  } : { name: '', slug: '', email: '', role: '', bio: '' });
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({
      ...prev,
      [id]: value,
      ...(id === 'name' && !editing ? { slug: slugify(value) } : {}),
    }));
  };

  const handleSave = async () => {
    if (!form.name || !form.slug) { setErr('Name and slug are required.'); return; }
    setSaving(true);
    setErr('');
    try {
      const doc = { _type: 'author', ...form, slug: { _type: 'slug', current: form.slug } };
      if (editing) {
        await sanityApi.patch(author._id, doc);
      } else {
        await sanityApi.create(doc);
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
        <span className="admin-card-title">{editing ? 'Edit Author' : 'New Author'}</span>
        <button className="admin-btn admin-btn-outline" onClick={onCancel}><X size={14} /> Cancel</button>
      </div>
      {err && <p style={{ color: '#ef4444', fontSize: 'var(--text-sm)', marginBottom: '1rem' }}>{err}</p>}
      <div className="admin-form">
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label htmlFor="name">Name *</label>
            <input id="name" value={form.name} onChange={handleChange} placeholder="Author name" />
          </div>
          <div className="admin-form-group">
            <label htmlFor="slug">Slug *</label>
            <input id="slug" value={form.slug} onChange={handleChange} placeholder="author-slug" />
          </div>
        </div>
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label htmlFor="email">Email</label>
            <input id="email" value={form.email} onChange={handleChange} placeholder="email@example.com" />
          </div>
          <div className="admin-form-group">
            <label htmlFor="role">Role</label>
            <input id="role" value={form.role} onChange={handleChange} placeholder="e.g. Content Writer" />
          </div>
        </div>
        <div className="admin-form-group">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" rows={3} value={form.bio} onChange={handleChange} placeholder="Short biography…" />
        </div>
        <div className="admin-form-actions">
          <button className="admin-btn admin-btn-outline" onClick={onCancel}>Cancel</button>
          <button className="admin-btn admin-btn-primary" onClick={handleSave} disabled={saving}>
            <Save size={14} /> {saving ? 'Saving…' : 'Save Author'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Post Form ── */
const EMPTY_POST = { title: '', slug: '', authorRef: '', category: 'Construction', excerpt: '', bodyPm: null, mainImage: null };
const CATEGORIES = ['Construction', 'Products', 'Industry News', 'Company News', 'Uncategorized'];

function PostForm({ post, onSave, onCancel, authors }) {
  const editing = !!post?._id;
  const [form, setForm] = useState(EMPTY_POST);
  const [pmContent, setPmContent] = useState(null);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [mainImageFile, setMainImageFile] = useState(null);

  useEffect(() => {
    if (editing) {
      const authorId = typeof post.author === 'object' ? post.author?._id || '' : '';
      setForm({
        title: post.title || '',
        slug: post.slug || '',
        authorRef: authorId,
        category: post.category || 'Construction',
        excerpt: post.excerpt || '',
        bodyPm: null,
        mainImage: post.image || null,
      });
      setPmContent(post.body ? ptToPm(post.body) : null);
      if (post.image) {
        setMainImagePreview(urlFor(post.image).width(400).url());
      }
    }
  }, [post, editing]);

  const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prev => ({
      ...prev,
      [id]: value,
      ...(id === 'title' && !editing ? { slug: slugify(value) } : {}),
    }));
  };

  const handleMainImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMainImageFile(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  const uploadImage = async (file) => {
    if (!file) return null;
    const asset = await sanityApi.uploadImage(file);
    return { _type: 'image', asset: { _ref: asset._id, _type: 'reference' } };
  };

  const handleSave = async () => {
    if (!form.title || !form.slug || !form.excerpt) { setErr('Title, slug, and excerpt are required.'); return; }
    setSaving(true);
    setErr('');
    try {
      const body = pmContent ? pmToPt(pmContent) : [];
      const doc = {
        _type: 'post',
        title: form.title,
        slug: { _type: 'slug', current: form.slug },
        category: form.category,
        excerpt: form.excerpt,
        publishedAt: editing ? post.publishedAt : new Date().toISOString(),
        body,
      };
      if (form.authorRef) {
        doc.author = { _type: 'reference', _ref: form.authorRef };
      }
      if (mainImageFile) {
        doc.mainImage = await uploadImage(mainImageFile);
      }
      if (editing) {
        await sanityApi.patch(post._id, doc);
      } else {
        await sanityApi.create(doc);
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
            <label htmlFor="authorRef">Author</label>
            <select id="authorRef" value={form.authorRef} onChange={handleChange}>
              <option value="">Select an author…</option>
              {authors.map(a => <option key={a._id} value={a._id}>{a.name}</option>)}
            </select>
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
          <label>Featured Image</label>
          <div className="admin-image-upload">
            {mainImagePreview ? (
              <div className="admin-image-preview">
                <img src={mainImagePreview} alt="Preview" />
                <button type="button" className="admin-btn admin-btn-outline" onClick={() => { setMainImagePreview(null); setMainImageFile(null); setForm(prev => ({ ...prev, mainImage: null })); }} style={{ marginTop: '0.5rem' }}>
                  <X size={12} /> Remove
                </button>
              </div>
            ) : (
              <label className="admin-upload-btn">
                <Image size={16} /> Choose Image
                <input type="file" accept="image/*" onChange={handleMainImage} style={{ display: 'none' }} />
              </label>
            )}
          </div>
        </div>

        <div className="admin-form-group">
          <label>Content</label>
          <TipTapEditor content={pmContent} onChange={setPmContent} />
        </div>

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
function PostsTab({ posts, onRefresh, authors }) {
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const handleDelete = async (id) => {
    if (!confirm('Delete this post? This cannot be undone.')) return;
    setDeleting(id);
    await sanityApi.delete(id).catch(() => {});
    setDeleting(null);
    onRefresh();
  };

  if (view === 'new') return <PostForm onSave={() => { setView('list'); onRefresh(); }} onCancel={() => setView('list')} authors={authors} />;
  if (view === 'edit') return <PostForm post={editing} onSave={() => { setView('list'); onRefresh(); }} onCancel={() => setView('list')} authors={authors} />;

  const authorName = (p) => typeof p.author === 'object' ? p.author?.name : p.author || '—';

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
                  <td>{authorName(p)}</td>
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

/* ── Authors Tab ── */
function AuthorsTab() {
  const [authors, setAuthors] = useState([]);
  const [view, setView] = useState('list');
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);

  const fetch = () => {
    sanityApi.fetch(AUTHORS_QUERY).then(setAuthors).catch(() => {});
  };

  useEffect(() => { fetch(); }, []);

  const handleDelete = async (id) => {
    if (!confirm('Delete this author? Posts referencing them will lose the author link.')) return;
    setDeleting(id);
    await sanityApi.delete(id).catch(() => {});
    setDeleting(null);
    fetch();
  };

  if (view === 'new') return <AuthorForm onSave={() => { setView('list'); fetch(); }} onCancel={() => setView('list')} />;
  if (view === 'edit') return <AuthorForm author={editing} onSave={() => { setView('list'); fetch(); }} onCancel={() => setView('list')} />;

  return (
    <>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Authors</h1>
          <p className="admin-page-sub">Manage blog authors who can be assigned to posts.</p>
        </div>
        <button className="admin-btn admin-btn-primary" onClick={() => setView('new')}>
          <Plus size={14} /> New Author
        </button>
      </div>

      <div className="admin-card">
        {authors.length === 0 ? (
          <p className="admin-empty">No authors yet. Click <strong>New Author</strong> to add one.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {authors.map(a => (
                <tr key={a._id}>
                  <td className="admin-table-title">{a.name}</td>
                  <td>{a.email || '—'}</td>
                  <td>{a.role || '—'}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="admin-btn admin-btn-outline" style={{ padding: '0.3rem 0.6rem' }}
                        onClick={() => { setEditing(a); setView('edit'); }}>
                        <Pencil size={12} />
                      </button>
                      <button className="admin-btn admin-btn-danger" style={{ padding: '0.3rem 0.6rem' }}
                        onClick={() => handleDelete(a._id)} disabled={deleting === a._id}>
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

/* ── Contact Submissions Tab ── */
function ContactTab() {
  const [submissions, setSubmissions] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetch = () => {
    sanityApi.fetch(CONTACT_QUERY).then(setSubmissions).catch(() => {});
  };

  useEffect(() => { fetch(); }, []);

  const markRead = async (id) => {
    await sanityApi.patch(id, { read: true }).catch(() => {});
    fetch();
  };

  if (selected) {
    return (
      <div className="admin-card">
        <div className="admin-card-header">
          <span className="admin-card-title">Message from {selected.name}</span>
          <button className="admin-btn admin-btn-outline" onClick={() => { if (!selected.read) markRead(selected._id); setSelected(null); }}><X size={14} /> Back</button>
        </div>
        <div className="admin-submission-detail">
          <div className="admin-submission-field"><strong>Name:</strong> {selected.name}</div>
          <div className="admin-submission-field"><strong>Email:</strong> {selected.email}</div>
          {selected.company && <div className="admin-submission-field"><strong>Company:</strong> {selected.company}</div>}
          {selected.subject && <div className="admin-submission-field"><strong>Subject:</strong> {selected.subject}</div>}
          <div className="admin-submission-field"><strong>Date:</strong> {formatDateTime(selected.submittedAt)}</div>
          <div className="admin-submission-field" style={{ marginTop: '1rem' }}><strong>Message:</strong></div>
          <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6, color: 'var(--text-primary)' }}>{selected.message}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Contact Submissions</h1>
          <p className="admin-page-sub">Messages received from the contact form.</p>
        </div>
      </div>

      <div className="admin-card">
        {submissions.length === 0 ? (
          <p className="admin-empty">No submissions yet.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(s => (
                <tr key={s._id} style={{ fontWeight: s.read ? 'normal' : '600' }}>
                  <td className="admin-table-title">{s.name} {!s.read && <span className="admin-unread-dot" />}</td>
                  <td>{s.subject || '—'}</td>
                  <td>{formatDateTime(s.submittedAt)}</td>
                  <td>
                    <button className="admin-btn admin-btn-outline" style={{ padding: '0.3rem 0.6rem' }}
                      onClick={() => { setSelected(s); if (!s.read) markRead(s._id); }}>
                      <Eye size={12} />
                    </button>
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

/* ── Quote Requests Tab ── */
function QuotesTab() {
  const [submissions, setSubmissions] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetch = () => {
    sanityApi.fetch(QUOTES_QUERY).then(setSubmissions).catch(() => {});
  };

  useEffect(() => { fetch(); }, []);

  const markRead = async (id) => {
    await sanityApi.patch(id, { read: true }).catch(() => {});
    fetch();
  };

  const updateStatus = async (id, status) => {
    await sanityApi.patch(id, { status }).catch(() => {});
    fetch();
  };

  if (selected) {
    return (
      <div className="admin-card">
        <div className="admin-card-header">
          <span className="admin-card-title">Quote Request from {selected.name}</span>
          <button className="admin-btn admin-btn-outline" onClick={() => { if (!selected.read) markRead(selected._id); setSelected(null); }}><X size={14} /> Back</button>
        </div>
        <div className="admin-submission-detail">
          <div className="admin-submission-field"><strong>Name:</strong> {selected.name}</div>
          <div className="admin-submission-field"><strong>Email:</strong> {selected.email}</div>
          {selected.phone && <div className="admin-submission-field"><strong>Phone:</strong> {selected.phone}</div>}
          {selected.company && <div className="admin-submission-field"><strong>Company:</strong> {selected.company}</div>}
          {selected.product && <div className="admin-submission-field"><strong>Product:</strong> {selected.product}</div>}
          {selected.quantity && <div className="admin-submission-field"><strong>Quantity:</strong> {selected.quantity}</div>}
          {selected.delivery && <div className="admin-submission-field"><strong>Delivery:</strong> {selected.delivery}</div>}
          {selected.timeline && <div className="admin-submission-field"><strong>Timeline:</strong> {selected.timeline}</div>}
          <div className="admin-submission-field"><strong>Date:</strong> {formatDateTime(selected.submittedAt)}</div>
          <div className="admin-submission-field" style={{ marginTop: '0.5rem' }}>
            <strong>Status:</strong>
            <select value={selected.status} onChange={(e) => updateStatus(selected._id, e.target.value)} style={{ marginLeft: '0.5rem', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-primary)', background: 'var(--bg-primary)', color: 'var(--text-primary)', fontSize: 'var(--text-sm)' }}>
              <option value="pending">Pending</option>
              <option value="responded">Responded</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          {selected.projectDetails && (
            <>
              <div className="admin-submission-field" style={{ marginTop: '1rem' }}><strong>Project Details:</strong></div>
              <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6, color: 'var(--text-primary)' }}>{selected.projectDetails}</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="admin-topbar">
        <div>
          <h1 className="admin-page-title">Quote Requests</h1>
          <p className="admin-page-sub">Quote requests from the website.</p>
        </div>
      </div>

      <div className="admin-card">
        {submissions.length === 0 ? (
          <p className="admin-empty">No quote requests yet.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Product</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {submissions.map(s => (
                <tr key={s._id} style={{ fontWeight: s.read ? 'normal' : '600' }}>
                  <td className="admin-table-title">{s.name} {!s.read && <span className="admin-unread-dot" />}</td>
                  <td>{s.product || '—'}</td>
                  <td><span className={`admin-badge ${statusBadge(s.status)}`}>{s.status || 'pending'}</span></td>
                  <td>{formatDateTime(s.submittedAt)}</td>
                  <td>
                    <button className="admin-btn admin-btn-outline" style={{ padding: '0.3rem 0.6rem' }}
                      onClick={() => { setSelected(s); if (!s.read) markRead(s._id); }}>
                      <Eye size={12} />
                    </button>
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

/* ── Main Dashboard ── */
export default function AdminDashboard() {
  const { logout } = useAdminAuth();
  const [tab, setTab] = useState('overview');
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [quotes, setQuotes] = useState([]);

  const fetchPosts = () => {
    sanityApi.fetch(POSTS_QUERY).then(setPosts).catch(() => {});
  };
  const fetchAuthors = () => {
    sanityApi.fetch(AUTHORS_QUERY).then(setAuthors).catch(() => {});
  };
  const fetchContacts = () => {
    sanityApi.fetch(CONTACT_QUERY).then(setContacts).catch(() => {});
  };
  const fetchQuotes = () => {
    sanityApi.fetch(QUOTES_QUERY).then(setQuotes).catch(() => {});
  };

  useEffect(() => { fetchPosts(); fetchAuthors(); fetchContacts(); fetchQuotes(); }, []);

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
        {tab === 'overview' && <Overview posts={posts} contacts={contacts} quotes={quotes} />}
        {tab === 'posts' && <PostsTab posts={posts} onRefresh={fetchPosts} authors={authors} />}
        {tab === 'authors' && <AuthorsTab />}
        {tab === 'contact' && <ContactTab />}
        {tab === 'quotes' && <QuotesTab />}
      </main>
    </div>
  );
}
