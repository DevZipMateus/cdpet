
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/e2f5f030-4382-43df-96ad-e3613c13ed0b.png" 
        alt="CD PET Express" 
        className={cn(
          "transition-all duration-300 hover:scale-105",
          scrolled ? "h-12" : "h-14"
        )}
      />
    </a>
  );
};

export default Logo;
