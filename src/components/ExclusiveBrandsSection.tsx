
import AnimatedSection from './AnimatedSection';

const ExclusiveBrandsSection = () => {
  const exclusiveBrands = [
    {
      name: "Dinâmica Vet",
      logo: "/lovable-uploads/0ffcd292-07d6-436b-b52a-7b9f1bb48112.png",
      description: "Saúde animal"
    },
    {
      name: "Boby Dog Cosméticos",
      logo: "/lovable-uploads/dc28fe92-88c7-4ce0-87ef-6a19c9b7ff09.png",
      description: "Cosméticos para pets"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/20 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Marcas Exclusivas em Brasília</h2>
          <p className="section-subtitle">
            Trabalhamos com marcas que só você encontra aqui em Brasília!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {exclusiveBrands.map((brand, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <img 
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full max-w-xs mx-auto h-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {brand.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {brand.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  Exclusivo em Brasília
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="mt-12 text-center">
            <div className="glass-card rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-primary mb-3">
                Quer conhecer mais sobre essas marcas?
              </h3>
              <p className="text-gray-600 mb-4">
                Entre em contato conosco e descubra todos os produtos exclusivos disponíveis!
              </p>
              <a 
                href="https://wa.me/5561999822328" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2"
              >
                <img 
                  src="/whatsapp1.png" 
                  alt="WhatsApp" 
                  className="h-5 w-5"
                />
                Falar com nosso time
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ExclusiveBrandsSection;
