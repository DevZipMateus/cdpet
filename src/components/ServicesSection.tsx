import { Truck, DollarSign, Package, Users, MapPin, Heart } from 'lucide-react';
import ServiceCard from './ServiceCard';
import AnimatedSection from './AnimatedSection';

const ServicesSection = () => {
  const services = [
    {
      icon: Package,
      title: 'Distribuição Inteligente',
      description: 'Produtos de qualidade com curadoria especializada, focando apenas no que realmente vende no seu pet shop.'
    },
    {
      icon: DollarSign,
      title: 'Margens Superiores',
      description: 'Garantimos margens líquidas acima de 120% para nossos parceiros, com preços competitivos como os de São Paulo.'
    },
    {
      icon: Truck,
      title: 'Entrega Ágil',
      description: 'Logística eficiente para Brasília e regiões, com frete FOB a partir de R$ 168,00 e entrega programada.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Relacionamento próximo e humanizado, respeitando o ritmo e necessidade de cada cliente parceiro.'
    },
    {
      icon: MapPin,
      title: 'Cobertura Regional',
      description: 'Atendemos Brasília, Bahia, Goiânia, Goiás, São Paulo, Piauí e DF, expandindo para mais estados.'
    },
    {
      icon: Heart,
      title: 'Parceria Verdadeira',
      description: 'Sem taxas mínimas, sem compras casadas. Crescemos juntos, oferecendo suporte e confiança contínua.'
    }
  ];

  return (
    <section id="serviços" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Diferenciais</h2>
          <p className="section-subtitle">
            Descubra por que somos a melhor escolha para o abastecimento do seu pet shop
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.title} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <a 
            href="https://wa.me/5561999822328" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-block"
          >
            Solicite seu orçamento personalizado
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
