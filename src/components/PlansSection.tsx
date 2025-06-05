
import PlanCard from './PlanCard';
import AnimatedSection from './AnimatedSection';
import { CreditCard, Zap } from 'lucide-react';

const PlansSection = () => {
  const plans = [{
    title: "Retirada/FOB",
    price: "R$168",
    description: "Ideal para quem pode retirar no CD ou possui frete próprio",
    features: ["Compra mínima R$ 168,00", "Retirada no centro de distribuição", "Frete por conta do cliente", "Preços especiais para volume", "Atendimento personalizado"],
    isPopular: false
  }, {
    title: "Brasília e Região",
    price: "R$444",
    description: "Perfeito para pet shops em Brasília e entorno",
    features: ["Compra mínima R$ 444,00", "Frete incluso para Brasília", "Entrega programada", "Atendimento via WhatsApp", "Margem garantida 120%+", "Produtos selecionados"],
    isPopular: true
  }, {
    title: "Demais Estados",
    price: "R$888",
    description: "Para pet shops em Bahia, Goiânia, Goiás, Piauí, Rondônia",
    features: ["Compra mínima R$ 888,00", "Frete incluso", "Cobertura ampla", "Logística especializada", "Preços competitivos", "Suporte completo", "Consultoria comercial"],
    isPopular: false
  }];

  return (
    <section id="planos" className="bg-white py-16">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Planos</h2>
          <p className="section-subtitle">
            Escolha a opção que melhor se adapta à localização e necessidades do seu pet shop
          </p>
        </AnimatedSection>

        {/* Destacar opções de pagamento */}
        <AnimatedSection className="mb-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-6 text-primary">Formas de Pagamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Parcelamento</h4>
                  <p className="text-primary font-medium">Em até 6x sem juros</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">PIX à vista</h4>
                  <p className="text-accent font-medium">10% de desconto</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.title} animation="fade-in-up" delay={index * 150}>
              <PlanCard 
                title={plan.title} 
                price={plan.price} 
                description={plan.description} 
                features={plan.features} 
                isPopular={plan.isPopular} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-3">Precisa de condições especiais?</h3>
          <p className="text-gray-600 mb-6">
            Oferecemos condições personalizadas para pet shops com necessidades específicas. 
            Entre em contato conosco via WhatsApp para uma proposta sob medida.
          </p>
          <a 
            href="https://wa.me/5561999822328" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-block"
          >
            Falar com Especialista
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PlansSection;
