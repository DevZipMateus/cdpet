import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    // Trava o scroll da página
    document.body.style.overflow = "hidden";
    
    const calculateHeight = () => {
      // Altura total - header (80px)
      const height = window.innerHeight - 80;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => {
      window.removeEventListener("resize", calculateHeight);
      // Restaura o scroll ao sair da página
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Header />
      <main className="w-full pt-20 overflow-hidden" style={{ height: `calc(${iframeHeight}px + 80px)` }}>
        <iframe
          src="https://cdpetcentro.egestor.com.br/vitrine/"
          className="w-full h-full overflow-hidden"
          style={{ border: "none" }}
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
