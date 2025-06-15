
import { Button } from "@/components/ui/button";
import { Star, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ImageGallery from "@/components/ImageGallery";
import ProductComparison from "@/components/ProductComparison";
import LoginRequiredModal from "@/components/LoginRequiredModal";
import PageHeader from "@/components/PageHeader";
import { products } from "@/constants/mockData";
import ItemCard from "@/components/ItemCard";

const Shop = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const handleBuyNow = () => {
    setShowLoginModal(true);
  };

  const handleCardClick = (productId: number | string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      <PageHeader
        title="Pet Store Products"
        subtitle="Everything your pet needs, delivered to your door"
        backPath="/dashboard"
        gradientFrom="from-orange-100"
        gradientTo="to-yellow-100"
        titleGradientFrom="from-orange-600"
        titleGradientTo="to-amber-600"
      >
        <Button
          onClick={() => setShowComparison(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <BarChart3 size={20} className="mr-2" />
          Compare Products
        </Button>
      </PageHeader>

      {/* Enhanced Product Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ItemCard
              key={product.id}
              id={product.id}
              onClick={() => handleCardClick(product.id)}
              category="shop"
              title={product.name}
              subtitle={`${product.brand} • ${product.category}`}
              image={
                <ImageGallery 
                  images={[]} 
                  alt={product.name}
                />
              }
              details={[
                { icon: Star, text: `${product.rating}`, colorClass: 'text-yellow-500 fill-current' },
              ]}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
              badge={{
                text: product.inStock ? 'In Stock' : 'Out of Stock',
                variant: product.inStock ? 'available' : 'unavailable',
              }}
              buttonText={product.inStock ? "Buy Now" : "Sold Out"}
              onButtonClick={handleBuyNow}
              buttonDisabled={!product.inStock}
            />
          ))}
        </div>
      </div>

      {/* Product Comparison Modal */}
      <ProductComparison
        isOpen={showComparison}
        onClose={() => setShowComparison(false)}
        products={products}
      />

      {/* Login Required Modal */}
      <LoginRequiredModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        buttonClassName="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
      />
    </div>
  );
};

export default Shop;
