
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  folder?: string;
  onClick?: () => void;
  onWhatsAppOrder?: () => void;
}

const ProductCard = ({ name, price, image, folder = "shampoo", onClick, onWhatsAppOrder }: ProductCardProps) => {
  const isVegan = folder === "vegano";
  const isRace = folder === "Raca";
  const isLancamentos = folder === "lancamentos";
  const isTratamento = folder === "tratamento";
  
  const getVolume = () => {
    if (isVegan) return "500ml";
    if (isRace) return "500ml";
    if (isLancamentos) return "750ml";
    if (isTratamento) {
      if (name.includes("TALCO") || name.includes("SABONETE")) return "";
      if (name.includes("500ML")) return "500ml";
      return "750ml";
    }
    return "750ml";
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onWhatsAppOrder) {
      onWhatsAppOrder();
    } else {
      const message = `Olá! Gostaria de fazer um pedido do produto: ${name} - R$ ${price}`;
      const whatsappUrl = `https://wa.me/5561999822328?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <CardContent className="p-4">
        <div className="aspect-square relative overflow-hidden rounded-lg mb-3 bg-gray-50" onClick={onClick}>
          <img 
            src={`/lovable-uploads/${folder}/${image}`}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
              Clique para ampliar
            </span>
          </div>
        </div>
        <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-accent">
            R$ {price}
          </span>
          {getVolume() && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {getVolume()}
            </span>
          )}
        </div>
        <button
          onClick={handleWhatsAppOrder}
          className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <img 
            src="/whatsapp1.png" 
            alt="WhatsApp" 
            className="h-4 w-4"
          />
          Comprar
        </button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
