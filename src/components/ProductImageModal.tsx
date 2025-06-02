
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface Product {
  name: string;
  price: string;
  image: string;
  folder?: string;
}

interface ProductImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

const ProductImageModal = ({ 
  isOpen, 
  onClose, 
  products, 
  currentIndex, 
  onIndexChange 
}: ProductImageModalProps) => {
  const currentProduct = products[currentIndex];
  
  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1;
    onIndexChange(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0;
    onIndexChange(newIndex);
  };

  const handleWhatsAppOrder = () => {
    const message = `Olá! Gostaria de fazer um pedido do produto: ${currentProduct.name} - R$ ${currentProduct.price}`;
    const whatsappUrl = `https://wa.me/5561999822328?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!currentProduct) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0 overflow-hidden">
        <div className="relative w-full h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <h3 className="text-lg font-semibold text-gray-800 flex-1 pr-4">
              {currentProduct.name}
            </h3>
            <span className="text-xl font-bold text-accent mr-4">
              R$ {currentProduct.price}
            </span>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>

          {/* Image container */}
          <div className="flex-1 relative bg-gray-50 flex items-center justify-center">
            <img 
              src={`/lovable-uploads/${currentProduct.folder || "shampoo"}/${currentProduct.image}`}
              alt={currentProduct.name}
              className="max-w-full max-h-full object-contain p-4"
            />

            {/* Navigation arrows */}
            {products.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-lg"
                  onClick={goToPrevious}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white shadow-lg"
                  onClick={goToNext}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {/* Image counter */}
            {products.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} de {products.length}
              </div>
            )}
          </div>

          {/* Footer with WhatsApp button */}
          <div className="p-4 border-t bg-white">
            <Button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3"
            >
              <img 
                src="/whatsapp1.png" 
                alt="WhatsApp" 
                className="mr-2 h-5 w-5"
              />
              Comprar via WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductImageModal;
