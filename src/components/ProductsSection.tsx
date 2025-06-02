
import AnimatedSection from './AnimatedSection';
import ProductSection from './ProductSection';

const ProductsSection = () => {
  const traditionalShampoos = [
    { name: "BOBY DOG SHAMPOO CHOCOLATE 750ML", price: "12,99", image: "Shampoo 750 ml BOBY DOG CHOCOLATE.png" },
    { name: "BOBY DOG SHAMPOO CLAREADOR 750ML", price: "12,99", image: "Shampoo 750 ml BOBY DOG CLAREADOR.png" },
    { name: "BOBY DOG SHAMPOO COCO 750ML", price: "12,99", image: "Shampoo 750 ml BOBY DOG COCO.png" },
    { name: "BOBY DOG SHAMPOO FILHOTES 750ML", price: "12,99", image: "Shampoo 750 ml BOBY DOG FILHOTES.png" },
    { name: "BOBY DOG SHAMPOO HIPOALERGÊNICO 750ML", price: "12,99", image: "Shampoo 750 ml BOBY DOG HIPOALERGENICO.png" },
    { name: "BOBY DOG SHAMPOO NEUTRO 750ML", price: "12,99", image: "Shampoo 750 ml BOBY DOG NEUTRO.png" },
    { name: "BOBY DOG SHAMPOO PELAGEM ESCURA 750ML", price: "12,99", image: "Shampoo 750 ml BOBY DOG PELAGEM ESCURA.png" },
    { name: "BOBY DOG SHAMPOO SUAVE 750ML", price: "12,99", image: "Shampoo 750 ml BOBY DOG SUAVE.png" },
  ];

  const specialShampoos = [
    { name: "BOBY DOG SHAMPOO ALOE VERA + HAMAMELIS 750ML", price: "12,99", image: "SH_BOBY_ALOEVERA_HAMA_750ML.png", folder: "lancamentos" },
    { name: "BOBY DOG SHAMPOO ANTI-QUEDA 750ML", price: "12,99", image: "SH_BOBY_ANT_QUEDAS_750ML.png", folder: "lancamentos" },
    { name: "BOBY DOG SHAMPOO NEUTRALIZADOR DE ODORES 750ML", price: "12,99", image: "SH_BOBY_NEUTRA_ODORES_750ML.png", folder: "lancamentos" },
    { name: "BOBY DOG SHAMPOO PARA PELOS CURTOS 750ML", price: "12,99", image: "SH_BOBY_PELOS_CURTOS_750ML.png", folder: "lancamentos" },
    { name: "BOBY DOG SHAMPOO PARA PELOS LONGOS 750ML", price: "12,99", image: "SH_BOBY_PELOS_LONGOS_750ML.png", folder: "lancamentos" },
  ];

  const veganShampoos = [
    { name: "BOBY DOG SHAMPOO VEGANO MORANGO 500ML", price: "11,99", image: "SH_BOBY_VEG_MORANGO_500ML.png", folder: "vegano" },
    { name: "BOBY DOG SHAMPOO VEGANO MELANCIA 500ML", price: "11,99", image: "SH_BOBY_VEG_MELANCIA_500ML.png", folder: "vegano" },
    { name: "BOBY DOG SHAMPOO VEGANO FRUTAS VERMELHAS 500ML", price: "11,99", image: "SH_BOBY_VEG_FRUT_VERMELHAS_500ML.png", folder: "vegano" },
    { name: "BOBY DOG SHAMPOO VEGANO FRUTAS TROPICAIS 500ML", price: "11,99", image: "SH_BOBY_VEG_FRUT_TROPICAIS_500ML.png", folder: "vegano" },
    { name: "BOBY DOG SHAMPOO VEGANO FRUTAS CÍTRICAS 500ML", price: "11,99", image: "SH_BOBY_VEG_FRUT_CITRICAS_500ML.png", folder: "vegano" },
    { name: "BOBY DOG SHAMPOO VEGANO COCO 500ML", price: "11,99", image: "SH_BOBY_VEG_COCO_500ML.png", folder: "vegano" },
    { name: "BOBY DOG SHAMPOO VEGANO AÇAÍ + GUARANÁ 500ML", price: "11,99", image: "SH_BOBY_VEG_ACAI_GUARA_500ML.png", folder: "vegano" },
  ];

  const raceShampoos = [
    { name: "BOBY DOG SHAMPOO RAÇA SHIH TZU / LHASA / COCKER 500ML", price: "12,99", image: "SH_BOBY_RACAS_SHTZ_LHAS_COCK_500ML.png", folder: "Raca" },
    { name: "BOBY DOG SHAMPOO RAÇA ROTTWEILER / PITBULL / PINSCHER 500ML", price: "12,99", image: "SH_BOBY_RACAS_ROT_PIT_PIN_500ML.png", folder: "Raca" },
    { name: "BOBY DOG SHAMPOO RAÇA PUG / BULLDOG / BOXER 500ML", price: "12,99", image: "SH_BOBY_RACAS_PUG_BULDG_BOX_500ML.png", folder: "Raca" },
    { name: "BOBY DOG SHAMPOO RAÇA MALTES / YORKSHIRE / SPITZ 500ML", price: "12,99", image: "SH_BOBY_RACAS_MALT_YORK_SPZT_500ML.png", folder: "Raca" },
    { name: "BOBY DOG SHAMPOO RAÇA LABRADOR / GOLDEN 500ML", price: "12,99", image: "SH_BOBY_RACAS_LABRA_GOLDEN_500ML.png", folder: "Raca" },
  ];

  const treatmentProducts = [
    { name: "BOBY DOG SHAMPOO PELAGEM ESCURA 750ML", price: "12,99", image: "Pelagem Escura.png", folder: "tratamento" },
    { name: "BOBY DOG SHAMPOO NEUTRO 750ML", price: "12,99", image: "Neutro.png", folder: "tratamento" },
    { name: "BOBY DOG SHAMPOO FILHOTES 750ML", price: "12,99", image: "Filhotes.png", folder: "tratamento" },
    { name: "BOBY DOG SHAMPOO CLAREADOR 750ML", price: "12,99", image: "Clareador.png", folder: "tratamento" },
    { name: "BOBY DOG SHAMPOO COCO 750ML", price: "12,99", image: "Coco.png", folder: "tratamento" },
    { name: "BOBY DOG SABONETE ENXOFRE 80G", price: "11,99", image: "Enxofre.png", folder: "tratamento" },
    { name: "BOBY DOG SHAMPOO HIPOALERGÊNICO 750ML", price: "12,99", image: "Hipoalergênico.png", folder: "tratamento" },
    { name: "BOBY DOG SHAMPOO SUAVE 500ML", price: "12,99", image: "Suave.png", folder: "tratamento" },
    { name: "BOBY DOG TALCO BANHO A SECO", price: "11,99", image: "Talco BOBY DOG BANHO A SECO.png", folder: "tratamento" },
    { name: "BOBY DOG TALCO ERVA SANTA MARIA", price: "11,99", image: "Talco BOBY DOG ERVA SANTA MARIA.png", folder: "tratamento" },
    { name: "BOBY DOG TALCO HIPOALERGÊNICO", price: "11,99", image: "Talco BOBY DOG HIPOALERGENICO.png", folder: "tratamento" },
    { name: "BOBY CAT TALCO ERVA SANTA MARIA 100GR", price: "11,99", image: "Talco BOBY CAT ERVA SANTA MARIA.png", folder: "tratamento" },
  ];

  const conditioners = [
    { name: "BOBY DOG CONDICIONADOR CHOCOLATE 750ML", price: "12,99", image: "Condicionador 750 ml BOBY DOG CHOCOLATE.png" },
    { name: "BOBY DOG CONDICIONADOR SILICONADO 750ML", price: "12,99", image: "Condicionador 750 ml BOBY DOG SILICONADO.png" },
  ];

  return (
    <section id="produtos" className="py-16 bg-gradient-to-b from-white to-secondary/20">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="section-subtitle">
            Linha completa de shampoos e condicionadores BOBY DOG com preços imbatíveis
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          <ProductSection 
            title="Shampoos Tradicionais - 750ml - R$12,99"
            products={traditionalShampoos}
          />
          
          <ProductSection 
            title="Shampoos Especiais e por Raça - 750ml - R$12,99"
            products={specialShampoos}
          />

          <ProductSection 
            title="Shampoos Veganos e Naturais - 500ml - R$11,99"
            products={veganShampoos}
          />

          <ProductSection 
            title="Shampoos Específicos por Raça - 500ml - R$12,99"
            products={raceShampoos}
          />

          <ProductSection 
            title="Shampoos e Produtos de Tratamento"
            products={treatmentProducts}
          />
          
          <ProductSection 
            title="Condicionadores - 750ml - R$12,99"
            products={conditioners}
          />
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-12 text-center">
            <div className="glass-card rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-primary mb-3">
                Quer ver mais produtos?
              </h3>
              <p className="text-gray-600 mb-4">
                Entre em contato conosco e conheça nosso catálogo completo com rações, petiscos, brinquedos e muito mais!
              </p>
              <a 
                href="https://wa.me/5561999822328" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2"
              >
                Ver Catálogo Completo
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductsSection;
