
import AnimatedSection from './AnimatedSection';
import ProductCard from './ProductCard';

interface Product {
  name: string;
  price: string;
  image: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
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
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProductSection;
