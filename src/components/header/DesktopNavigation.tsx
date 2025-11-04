import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface DesktopNavigationProps {
  menuItems: MenuItem[];
  scrolled: boolean;
}

const DesktopNavigation = ({ menuItems, scrolled }: DesktopNavigationProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Se for um link de âncora (#)
    if (href.startsWith('#')) {
      e.preventDefault();
      
      // Se não estiver na página inicial, navegar primeiro para lá
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        // Se já estiver na página inicial, fazer scroll suave
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    }
    // Se for uma rota interna (/), o Link cuida automaticamente
  };

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex gap-8">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            {item.href.startsWith('/') ? (
              <Link
                to={item.href}
                className={cn(
                  'text-sm font-medium relative inline-flex items-center transition-colors duration-200',
                  'hover:text-primary focus:text-primary',
                  scrolled ? 'text-gray-800' : 'text-gray-800',
                  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
                  'after:bg-primary after:transition-all after:duration-300',
                  'hover:after:w-full focus:after:w-full'
                )}
              >
                {item.name}
              </Link>
            ) : (
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  'text-sm font-medium relative inline-flex items-center transition-colors duration-200',
                  'hover:text-primary focus:text-primary',
                  scrolled ? 'text-gray-800' : 'text-gray-800',
                  'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
                  'after:bg-primary after:transition-all after:duration-300',
                  'hover:after:w-full focus:after:w-full'
                )}
              >
                {item.name}
              </a>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNavigation;
