import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

const AUTO_REPLIES = [
  { match: /hello|hi|hey/i, reply: 'Hello! Welcome to Bessblock. How can I help you today?' },
  { match: /price|cost|quote/i, reply: 'For pricing information, please visit our Request a Quote page or provide your project details and we\'ll get back to you.' },
  { match: /product|catalog|range/i, reply: 'We manufacture paving blocks, walling blocks, kerbs, paving slabs, and step risers. Browse our full range on the Products page.' },
  { match: /delivery|shipping/i, reply: 'We deliver to projects within a 200km radius of our manufacturing facility in Accra. For locations beyond this range, please contact us.' },
  { match: /contact|phone|email|call/i, reply: 'You can reach us at +233 302 555 019 or email info@bessblock.com. Our office hours are Mon-Fri 7AM-5PM, Sat 8AM-1PM.' },
];

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 0, from: 'bot', text: 'Hi there! 👋 Ask us anything about our products or services.' },
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const listRef = useRef(null);
  const nextId = useRef(1);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || sending) return;

    const userMsg = { id: nextId.current++, from: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setSending(true);

    const match = AUTO_REPLIES.find(r => r.match.test(text));
    const reply = match
      ? match.reply
      : 'Thank you for your message. Our team will get back to you during business hours. You can also email info@bessblock.com for a faster response.';

    setTimeout(() => {
      setMessages(prev => [...prev, { id: nextId.current++, from: 'bot', text: reply }]);
      setSending(false);
    }, 600 + Math.random() * 400);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="live-chat-toggle"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
          width: 52, height: 52, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: 'none', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          background: open ? '#ef4444' : 'var(--color-bessblock-blue)',
          color: '#fff', transition: 'background 200ms ease, transform 200ms ease',
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="live-chat-panel"
          style={{
            position: 'fixed', bottom: 88, right: 24, zIndex: 9999,
            width: 360, maxWidth: 'calc(100vw - 48px)', height: 480, maxHeight: 'calc(100vh - 120px)',
            borderRadius: 16, overflow: 'hidden', display: 'flex', flexDirection: 'column',
            background: 'var(--bg)', border: '1px solid var(--border)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            animation: 'liveChatIn 200ms ease-out',
          }}
        >
          <style>{`
            @keyframes liveChatIn { from { opacity:0; transform:translateY(12px) scale(0.96); } to { opacity:1; transform:translateY(0) scale(1); } }
            .live-chat-msg { animation: msgIn 200ms ease-out both; }
            @keyframes msgIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
          `}</style>

          {/* Header */}
          <div style={{
            padding: '14px 16px', fontWeight: 600, fontSize: 15,
            background: 'var(--color-bessblock-blue)', color: '#fff',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e' }} />
            Bessblock Chat
          </div>

          {/* Messages */}
          <div ref={listRef} style={{
            flex: 1, overflowY: 'auto', padding: 12, display: 'flex', flexDirection: 'column', gap: 8,
          }}>
            {messages.map(m => (
              <div key={m.id} className="live-chat-msg" style={{
                alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '80%',
                padding: '10px 14px',
                borderRadius: m.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                background: m.from === 'user' ? 'var(--color-bessblock-blue)' : 'var(--bg-section)',
                color: m.from === 'user' ? '#fff' : 'var(--text)',
                fontSize: 14, lineHeight: 1.5, whiteSpace: 'pre-wrap',
              }}>
                {m.text}
              </div>
            ))}
            {sending && (
              <div style={{ alignSelf: 'flex-start', padding: '8px 14px', color: 'var(--text-secondary)', fontSize: 13 }}>
                <Loader2 size={14} style={{ animation: 'spin 1s linear infinite', display: 'inline', marginRight: 6 }} />
                Typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{ display: 'flex', gap: 8, padding: '10px 12px', borderTop: '1px solid var(--border)' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              aria-label="Chat message"
              style={{
                flex: 1, padding: '10px 14px', borderRadius: 10, border: '1px solid var(--border)',
                fontSize: 14, fontFamily: 'inherit', outline: 'none',
                background: 'var(--bg-section)', color: 'var(--text)',
              }}
              disabled={sending}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || sending}
              aria-label="Send message"
              style={{
                width: 40, height: 40, borderRadius: 10, border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: input.trim() ? 'var(--color-bessblock-blue)' : 'var(--bg-section)',
                color: input.trim() ? '#fff' : 'var(--text-muted)',
                transition: 'background 200ms ease',
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
