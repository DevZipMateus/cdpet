
import TestimonialCard from './TestimonialCard';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Trabalhar com a distribuidora foi a melhor decisão para o nosso pet shop. Além de preços altamente competitivos, comparáveis aos de São Paulo, recebemos um atendimento próximo e personalizado. A equipe está sempre disponível para tirar dúvidas e ajudar na reposição rápida dos produtos.",
      author: "Carla Mendes",
      role: "Pet&Vida Comércio de Rações",
      rating: 5
    },
    {
      content: "O que mais nos impressionou foi o equilíbrio entre preço e qualidade. Encontramos produtos com valores acessíveis, sem abrir mão do excelente atendimento e da agilidade nas entregas. Sempre indicamos a distribuidora para quem quer crescer no segmento pet.",
      author: "Roberto Lima",
      role: "Mundo Animal Pet Shop",
      rating: 5
    },
    {
      content: "Os preços são realmente competitivos, mas o que faz a diferença é o serviço! A entrega é rápida, o catálogo é completo e a equipe de vendas sempre nos atualiza com as melhores ofertas. Hoje, nossa loja tem muito mais variedade graças à parceria com a distribuidora.",
      author: "Fernanda Souza",
      role: "Arca Pet Center",
      rating: 5
    },
    {
      content: "Além de preços imbatíveis, o atendimento é humanizado e eficiente. Sempre recebemos suporte para escolher os melhores produtos para o perfil dos nossos clientes. A logística também é impecável, nunca tivemos problemas com prazos.",
      author: "Eduardo Martins",
      role: "Bicho Feliz Pet Shop",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Depoimentos dos Nossos Parceiros</h2>
          <p className="section-subtitle">
            Veja o que nossos clientes parceiros dizem sobre nossa parceria e resultados
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.author} 
              animation="fade-in-up" 
              delay={index * 100}
            >
              <TestimonialCard 
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <p className="text-gray-600 mb-4">Veja mais depoimentos no nosso Google</p>
          <a 
            href="https://g.co/kgs/tZMTpqs" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            Ver Todos os Depoimentos
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
