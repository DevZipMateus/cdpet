import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Load MonteSite badge script for Vitrine page only
    const script = document.createElement('script');
    script.src = 'https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe';
    script.async = true;
    document.body.appendChild(script);
    scriptRef.current = script;

    // Create fixed badge container
    const badgeDiv = document.createElement('div');
    badgeDiv.id = 'montesite-footer-badge';
    badgeDiv.style.cssText = 'position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;';
    document.body.appendChild(badgeDiv);

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
      
      // Remove MonteSite script and badge safely
      if (scriptRef.current?.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
      const badgeDiv = document.getElementById('montesite-footer-badge');
      if (badgeDiv?.parentNode) {
        badgeDiv.parentNode.removeChild(badgeDiv);
      }
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
