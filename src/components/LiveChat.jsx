import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '233302555019';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function LiveChat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float"
    >
      <MessageCircle size={22} />
    </a>
  );
}
