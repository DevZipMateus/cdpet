
import { Facebook, Instagram, Linkedin, Twitter, Calendar, FileText, Calculator, Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Load MonteSite badge script
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []);
  
  return (
    <>
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CD PET Express</h3>
            <p className="text-gray-400 mb-6">
              Centro de distribuição para pet shops com os melhores preços e atendimento personalizado. A força e o preço de São Paulo com o coração em Brasília!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/cdpetdf" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Nossos Diferenciais</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Sem taxa mínima de trabalho</li>
              <li>• Sem compras casadas</li>
              <li>• Lucratividade acima de 120%</li>
              <li>• Preços de São Paulo</li>
              <li>• Atendimento personalizado</li>
              <li>• Entrega rápida</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Marcas Exclusivas</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/0ffcd292-07d6-436b-b52a-7b9f1bb48112.png"
                    alt="Dinâmica Vet"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded bg-white p-1 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">Dinâmica Vet</p>
                    <p className="text-xs text-gray-400 truncate">Saúde animal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/dc28fe92-88c7-4ce0-87ef-6a19c9b7ff09.png"
                    alt="Boby Dog Cosméticos"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded bg-white p-1 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">Boby Dog</p>
                    <p className="text-xs text-gray-400 truncate">Cosméticos para pets</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/51f3f012-7bc6-43d3-a546-2c05e39606ce.png"
                    alt="PROSS Professional"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded bg-white p-1 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">PROSS</p>
                    <p className="text-xs text-gray-400 truncate">Professional</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/31da2b15-1fca-45de-9ed0-82d2871e8544.png"
                    alt="LIFE Cosmético Animal"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded bg-white p-1 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">LIFE</p>
                    <p className="text-xs text-gray-400 truncate">Cosmético Animal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 col-span-2 sm:col-span-1">
                  <img 
                    src="/lovable-uploads/e7f1df0e-8a35-4428-b503-318c658f69d7.png"
                    alt="LAVI PET"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded bg-white p-1 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">LAVI PET</p>
                    <p className="text-xs text-gray-400 truncate">Produtos para pets</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-orange-400 font-medium text-center sm:text-left">
                Exclusivo em Brasília!
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <p>(61) 99982-2328</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <p>cdpetdf@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Via Marginal Estrutural, 142</p>
                  <p>Vicente Pires - Brasília/DF</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} CD PET Express - Centro de Distribuição para Pet Shop LTDA. Todos os direitos reservados.</p>
          <p className="mt-2 text-orange-400 font-medium">"A força e o preço de São Paulo com o coração em Brasília!"</p>
        </div>
      </div>
    </footer>
    <div id="montesite-footer-badge"></div>
    </>
  );
};

export default Footer;
