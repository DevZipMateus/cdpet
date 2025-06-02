
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  folder?: string;
}

const ProductCard = ({ name, price, image, folder = "shampoo" }: ProductCardProps) => {
  const isVegan = folder === "vegano";
  const isRace = folder === "Raca";
  
  const getVolume = () => {
    if (isVegan) return "500ml";
    if (isRace) return "500ml";
    return "750ml";
  };
  
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-4">
        <div className="aspect-square relative overflow-hidden rounded-lg mb-3 bg-gray-50">
          <img 
            src={`/lovable-uploads/${folder}/${image}`}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="font-medium text-sm text-gray-800 mb-2 line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-accent">
            R$ {price}
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {getVolume()}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
