
import { Facebook, Instagram, Linkedin, Twitter, Calendar, FileText, Calculator, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
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
            <h3 className="text-xl font-bold mb-4">Produtos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Rações Premium</li>
              <li>• Petiscos e Ossos</li>
              <li>• Brinquedos</li>
              <li>• Acessórios</li>
              <li>• Produtos de Higiene</li>
              <li>• Medicamentos Veterinários</li>
            </ul>
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
  );
};

export default Footer;
