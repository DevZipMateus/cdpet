import AnimatedSection from './AnimatedSection';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ClothingSection = () => {
  const fleeceProducts = [
    { numero: 0, tamanho: "22 cm", preco: "13,99" },
    { numero: 1, tamanho: "27 cm", preco: "17,99" },
    { numero: 2, tamanho: "32 cm", preco: "19,99" },
    { numero: 3, tamanho: "37 cm", preco: "24,99" },
    { numero: 4, tamanho: "42 cm", preco: "28,99" },
    { numero: 5, tamanho: "47 cm", preco: "32,99" },
    { numero: 6, tamanho: "52 cm", preco: "36,99" },
    { numero: 7, tamanho: "57 cm", preco: "39,99" },
    { numero: 8, tamanho: "62 cm", preco: "44,99" },
    { numero: 9, tamanho: "67 cm", preco: "49,99" },
    { numero: 10, tamanho: "72 cm", preco: "55,99" }
  ];

  const ovelhaProducts = [
    { numero: 0, tamanho: "22 cm", preco: "19,99" },
    { numero: 1, tamanho: "27 cm", preco: "22,99" },
    { numero: 2, tamanho: "32 cm", preco: "26,99" },
    { numero: 3, tamanho: "37 cm", preco: "30,99" },
    { numero: 4, tamanho: "42 cm", preco: "34,99" },
    { numero: 5, tamanho: "47 cm", preco: "39,99" },
    { numero: 6, tamanho: "52 cm", preco: "45,99" },
    { numero: 7, tamanho: "57 cm", preco: "51,99" },
    { numero: 8, tamanho: "62 cm", preco: "57,99" },
    { numero: 9, tamanho: "67 cm", preco: "62,99" },
    { numero: 10, tamanho: "72 cm", preco: "68,99" }
  ];

  const handleWhatsAppOrder = (productType: string, numero: number, preco: string) => {
    const message = `Olá! Gostaria de fazer um pedido da ${productType} Nº ${numero} - R$ ${preco}`;
    const whatsappUrl = `https://wa.me/5561999822328?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppKitOrder = () => {
    const message = `Olá! Gostaria de fazer um pedido do Kit Colchão P/M/G Nylon Impermeável - R$ 69,99`;
    const whatsappUrl = `https://wa.me/5561999822328?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="roupinhas" className="py-16 bg-gradient-to-b from-secondary/20 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Roupinhas e Acessórios para Pets</h2>
          <p className="section-subtitle">
            Mantenha seu pet aquecido e estiloso com nossas roupinhas em tecido fleece e microfibra
          </p>
        </AnimatedSection>

        <div className="mt-12">
          <AnimatedSection delay={200}>
            <Tabs defaultValue="fleece" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1">
                <TabsTrigger 
                  value="fleece" 
                  className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-1.5 leading-tight whitespace-normal text-center"
                >
                  <span className="block">Roupinhas em</span>
                  <span className="block">Tecido Fleece</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="ovelha" 
                  className="text-xs sm:text-sm px-2 py-2 sm:px-3 sm:py-1.5 leading-tight whitespace-normal text-center"
                >
                  <span className="block">Roupinhas Ovelha</span>
                  <span className="block">Premium</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="fleece">
                <Card className="overflow-hidden">
                  <CardHeader className="pb-4 px-4 sm:px-6">
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src="/lovable-uploads/70350305-fcda-4426-adf2-cd5b34e3a9c2.png"
                        alt="Roupinhas em Tecido Fleece - Grade de Numerações e Medidas"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-primary text-center">
                      Roupinhas em Tecido Fleece - Microfibra
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-2 sm:px-6">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-center text-xs sm:text-sm px-1 sm:px-3">Número</TableHead>
                            <TableHead className="text-center text-xs sm:text-sm px-1 sm:px-3">Tamanho</TableHead>
                            <TableHead className="text-center text-xs sm:text-sm px-1 sm:px-3">Preço</TableHead>
                            <TableHead className="text-center text-xs sm:text-sm px-1 sm:px-3">Ação</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fleeceProducts.map((product) => (
                            <TableRow key={product.numero}>
                              <TableCell className="text-center font-medium text-xs sm:text-sm px-1 sm:px-3">
                                Nº {product.numero}
                              </TableCell>
                              <TableCell className="text-center text-xs sm:text-sm px-1 sm:px-3">
                                {product.tamanho}
                              </TableCell>
                              <TableCell className="text-center font-bold text-accent text-xs sm:text-sm px-1 sm:px-3">
                                R$ {product.preco}
                              </TableCell>
                              <TableCell className="text-center px-1 sm:px-3">
                                <button
                                  onClick={() => handleWhatsAppOrder("Roupinha Fleece", product.numero, product.preco)}
                                  className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1 mx-auto whitespace-nowrap"
                                >
                                  <img 
                                    src="/whatsapp1.png" 
                                    alt="WhatsApp" 
                                    className="h-3 w-3 flex-shrink-0"
                                  />
                                  <span className="hidden sm:inline">Comprar</span>
                                  <span className="sm:hidden">Buy</span>
                                </button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ovelha">
                <Card className="overflow-hidden">
                  <CardHeader className="pb-4 px-4 sm:px-6">
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src="/lovable-uploads/68486833-9c9e-4361-b194-673406a2c0d1.png"
                        alt="Roupinhas em Tecido Fleece - Microfibra Melhor que Soft"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-primary text-center">
                      Roupinhas Ovelha - Premium
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-2 sm:px-6">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-center text-xs sm:text-sm px-1 sm:px-3">Número</TableHead>
                            <TableHead className="text-center text-xs sm:text-sm px-1 sm:px-3">Tamanho</TableHead>
                            <TableHead className="text-center text-xs sm:text-sm px-1 sm:px-3">Preço</TableHead>
                            <TableHead className="text-center text-xs sm:text-sm px-1 sm:px-3">Ação</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {ovelhaProducts.map((product) => (
                            <TableRow key={product.numero}>
                              <TableCell className="text-center font-medium text-xs sm:text-sm px-1 sm:px-3">
                                Nº {product.numero}
                              </TableCell>
                              <TableCell className="text-center text-xs sm:text-sm px-1 sm:px-3">
                                {product.tamanho}
                              </TableCell>
                              <TableCell className="text-center font-bold text-accent text-xs sm:text-sm px-1 sm:px-3">
                                R$ {product.preco}
                              </TableCell>
                              <TableCell className="text-center px-1 sm:px-3">
                                <button
                                  onClick={() => handleWhatsAppOrder("Roupinha Ovelha", product.numero, product.preco)}
                                  className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1 mx-auto whitespace-nowrap"
                                >
                                  <img 
                                    src="/whatsapp1.png" 
                                    alt="WhatsApp" 
                                    className="h-3 w-3 flex-shrink-0"
                                  />
                                  <span className="hidden sm:inline">Comprar</span>
                                  <span className="sm:hidden">Buy</span>
                                </button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </AnimatedSection>

          {/* Kit Colchão Section */}
          <AnimatedSection delay={400}>
            <div className="mt-12">
              <Card className="overflow-hidden max-w-2xl mx-auto">
                <CardHeader className="pb-4 px-4 sm:px-6">
                  <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src="/lovable-uploads/6e879b97-36db-4668-ac59-27e582cac477.png"
                      alt="Kit Colchão P/M/G Nylon Impermeável com Ziper"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-primary text-center">
                    Kit Colchão P/M/G Nylon Impermeável
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center px-4 sm:px-6">
                  <p className="text-lg font-bold text-accent mb-4">R$ 69,99</p>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Kit completo com colchões em três tamanhos (P/M/G) em nylon impermeável com zíper
                  </p>
                  <button
                    onClick={handleWhatsAppKitOrder}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-3 rounded text-sm flex items-center gap-2 mx-auto"
                  >
                    <img 
                      src="/whatsapp1.png" 
                      alt="WhatsApp" 
                      className="h-4 w-4"
                    />
                    <span className="hidden sm:inline">Comprar Kit Colchão</span>
                    <span className="sm:hidden">Kit Colchão</span>
                  </button>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-12 text-center">
            <div className="glass-card rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-3">
                Quer mais informações sobre as roupinhas?
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Entre em contato conosco para conhecer mais modelos e cores disponíveis!
              </p>
              <a 
                href="https://wa.me/5561999822328" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 text-sm sm:text-base px-4 sm:px-6"
              >
                <img 
                  src="/whatsapp1.png" 
                  alt="WhatsApp" 
                  className="h-4 w-4 sm:h-5 sm:w-5"
                />
                <span className="hidden sm:inline">Ver Mais Modelos</span>
                <span className="sm:hidden">Mais Modelos</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClothingSection;
