import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
const AboutSection = () => {
  const features = ['Sem taxa mínima de compra para CNPJ', 'Sem compras altas ou casadas', 'Lucratividade acima de 120%', 'Preços competitivos de SP', 'Atendimento humanizado', 'Agilidade na entrega'];
  return <section id="sobre" className="py-24 bg-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossa História</h2>
          <p className="section-subtitle">
            Conheça nossa trajetória e nosso compromisso em ser mais que um fornecedor: um verdadeiro parceiro de negócios
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img alt="Distribuição Pet Shop" className="w-full h-auto object-cover" src="/lovable-uploads/c49a9673-237c-43b0-bbd9-63495ed25990.png" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-accent/10 text-accent rounded-full">
              Desde Nossa Fundação
            </span>
            <h3 className="text-3xl font-bold">Compromisso com seus resultados</h3>
            <p className="text-gray-600">
              O CDPET nasceu observando que muitos lojistas enfrentavam grandes desafios no abastecimento 
              de produtos, principalmente pela necessidade de realizar compras altas, com volumes excessivos, 
              muitas vezes atreladas a compras casadas e com margens apertadas.
            </p>
            <p className="text-gray-600">
              Nossa proposta é clara: atender cada cliente de forma personalizada, garantir o melhor 
              custo-benefício do mercado e gerar margens líquidas superiores a 120% para nossos parceiros.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {features.map(feature => <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>)}
            </div>
            
            <a href="https://wa.me/5561999822328" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-4">
              Fale com nosso time
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default AboutSection;