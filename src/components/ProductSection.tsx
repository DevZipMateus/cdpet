
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import ProductCard from './ProductCard';
import ProductImageModal from './ProductImageModal';

interface Product {
  name: string;
  price: string;
  image: string;
  folder?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <AnimatedSection>
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              folder={product.folder}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>

      <ProductImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        products={products}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />
    </AnimatedSection>
  );
};

export default ProductSection;
