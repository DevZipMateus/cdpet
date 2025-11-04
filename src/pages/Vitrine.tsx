import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      // Altura total - header (80px) - badge inferior (63px)
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(height);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    // Travar scroll da página
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("resize", calculateHeight);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="w-full pt-20" style={{ height: `calc(${iframeHeight}px + 80px)` }}>
        <iframe
          src="https://cdpetcentro.egestor.com.br/vitrine/"
          className="w-full h-full"
          style={{ border: "none" }}
          title="Demonstração de Vitrine"
        />
      </main>
      <div id="montesite-footer-badge" className="w-full" style={{ height: "63px" }}></div>
    </div>
  );
};

export default Vitrine;
