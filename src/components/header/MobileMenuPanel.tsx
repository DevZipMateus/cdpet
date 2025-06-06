
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";

interface MobileMenuPanelProps {
  isMenuOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const MobileMenuPanel = ({ isMenuOpen, onClose, menuItems }: MobileMenuPanelProps) => {
  return (
    <div 
      className={cn(
        'fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-white shadow-2xl',
        'transform transition-transform duration-300 ease-in-out md:hidden',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {/* Menu Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/e2f5f030-4382-43df-96ad-e3613c13ed0b.png" 
            alt="CD PET Express" 
            className="h-8"
          />
        </div>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-colors"
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="px-6 pt-8 pb-8 overflow-y-auto h-[calc(100%-82px)]">
        <ul className="space-y-5">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-xl font-medium text-gray-700 hover:text-primary transition-all duration-200 block py-2 
                           hover:translate-x-1 hover:scale-[1.02] focus:outline-none focus:text-primary rounded-lg
                           hover:bg-primary/5 px-3 -mx-3"
                onClick={onClose}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-md text-gray-500 mb-3">Entre em contato conosco</p>
          <a 
            href="https://wa.me/5561999822328" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-green-600 hover:text-green-700 font-medium block py-2
                       transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]
                       rounded-lg hover:bg-green-50 px-3 -mx-3"
          >
            (61) 99982-2328
          </a>
          <a 
            href="mailto:cdpetdf@gmail.com"
            className="text-lg text-primary hover:text-primary/80 font-medium block py-1
                       transition-all duration-200 hover:translate-x-1 hover:scale-[1.02]
                       rounded-lg hover:bg-primary/5 px-3 -mx-3"
          >
            cdpetdf@gmail.com
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenuPanel;
