
import AnimatedSection from './AnimatedSection';
import { ExternalLink, Truck, Shield, Clock } from 'lucide-react';

const PartnersSection = () => {
  return (
    <section id="parceiros" className="py-16 bg-gradient-to-b from-secondary/20 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nosso Parceiro Logístico</h2>
          <p className="section-subtitle">
            Conheça a Accert, nossa parceira de confiança para transportes e logística
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={200}>
            <div className="glass-card rounded-xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/29f6e9de-36e8-4cf4-aafc-d4bdbd7ff2cd.png" 
                    alt="Accert Transportes e Logística" 
                    className="w-48 h-auto"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Accert® Transportes e Logística
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Desde 2002, a Accert® é especializada em transportes e logística, 
                    atendendo diversos segmentos como agrícola, metalúrgico, construção civil, 
                    automotivo e muito mais. Com frota própria renovada e serviço de logística 
                    completo, oferece pontualidade, qualidade e segurança nas operações.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>Pontualidade</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="h-4 w-4 text-accent" />
                      <span>Segurança</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Truck className="h-4 w-4 text-accent" />
                      <span>Frota Própria</span>
                    </div>
                  </div>

                  <a 
                    href="https://www.accertlogistica.com.br/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent inline-flex items-center gap-2"
                  >
                    Conheça a Accert
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold text-primary mb-2">Missão</h4>
                <p className="text-sm text-gray-600">
                  "Transportar com compromisso e eficiência para satisfação de todos os envolvidos."
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold text-primary mb-2">Visão</h4>
                <p className="text-sm text-gray-600">
                  "Assegurar o melhor atendimento e ser reconhecida pela pontualidade e integridade."
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold text-primary mb-2">Valores</h4>
                <p className="text-sm text-gray-600">
                  Compromisso, competência, conhecimento, superação, responsabilidade e liderança.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
