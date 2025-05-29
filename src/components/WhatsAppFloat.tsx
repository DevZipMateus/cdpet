
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5561999822328"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppFloat;
