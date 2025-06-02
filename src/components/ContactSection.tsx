
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-gradient-to-b from-secondary/30 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para ser seu parceiro de negócios e responder todas suas dúvidas
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-secondary/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* WhatsApp */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <img 
                      src="/whatsapp1.png" 
                      alt="WhatsApp" 
                      className="h-5 w-5"
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">WhatsApp</h4>
                    <a 
                      href="https://wa.me/5561999822328" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-600 hover:text-green-700 transition-colors"
                    >
                      (61) 99982-2328
                    </a>
                    <p className="text-sm text-gray-600">Atendimento rápido</p>
                  </div>
                </div>
                
                {/* E-mail */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">E-mail</h4>
                    <a 
                      href="mailto:cdpetdf@gmail.com"
                      className="text-sm text-primary hover:text-primary/80 transition-colors break-words"
                    >
                      cdpetdf@gmail.com
                    </a>
                    <p className="text-sm text-gray-600">Comercial e suporte</p>
                  </div>
                </div>
                
                {/* Endereço */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Endereço</h4>
                    <p className="text-sm text-gray-600">Via Marginal Estrutural, 142</p>
                    <p className="text-sm text-gray-600">Vicente Pires - Brasília/DF</p>
                    <a 
                      href="https://www.google.com/maps/dir//Rua+12,+St.+Hab.+Vicente+Pires+Vicente+Pires,+Bras%C3%ADlia+-+DF,+72007-605/@-15.7913144,-48.1128238,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935a33201265e36d:0xc32ca6bbc76b8a06!2m2!1d-48.030422!2d-15.7913299?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      Ver no Mapa
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg">
                <h4 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Instagram className="h-5 w-5 text-accent" />
                  Siga-nos no Instagram
                </h4>
                <a 
                  href="https://instagram.com/cdpetdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors text-sm"
                >
                  @cdpetdf
                </a>
                <p className="text-gray-600 text-sm mt-1">Acompanhe nossas novidades e promoções</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
