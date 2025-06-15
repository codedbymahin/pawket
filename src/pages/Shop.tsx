import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Star, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ImageGallery from "@/components/ImageGallery";
import ProductComparison from "@/components/ProductComparison";
import LoginRequiredModal from "@/components/LoginRequiredModal";

const Shop = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      brand: "Pedigree",
      category: "Food",
      price: "৳2,500",
      originalPrice: "৳3,000",
      rating: 4.8,
      description: "Nutritious dry food for adult dogs, 10kg pack",
      inStock: true,
      features: ["High Protein", "Natural Ingredients", "Vitamin Enriched", "Grain Free"]
    },
    {
      id: 2,
      name: "Cat Litter Box",
      brand: "Pet Zone",
      category: "Accessories",
      price: "৳1,200",
      originalPrice: "৳1,500",
      rating: 4.6,
      description: "Easy-clean litter box with cover and scoop",
      inStock: true,
      features: ["Easy Clean", "Odor Control", "Non-Slip Base", "Durable Plastic"]
    },
    {
      id: 3,
      name: "Dog Collar & Leash Set",
      brand: "Pawsome",
      category: "Accessories",
      price: "৳800",
      originalPrice: "৳1,000",
      rating: 4.7,
      description: "Adjustable collar with matching leash, multiple colors",
      inStock: true,
      features: ["Adjustable", "Reflective Strip", "Comfortable Padding", "Weather Resistant"]
    },
    {
      id: 4,
      name: "Cat Wet Food Variety",
      brand: "Whiskas",
      category: "Food",
      price: "৳450",
      originalPrice: "৳500",
      rating: 4.9,
      description: "12-pack wet food variety for cats, different flavors",
      inStock: false,
      features: ["Variety Pack", "High Moisture", "Taurine Added", "Delicious Flavors"]
    },
    {
      id: 5,
      name: "Pet Grooming Kit",
      brand: "FurCare",
      category: "Grooming",
      price: "৳1,800",
      originalPrice: "৳2,200",
      rating: 4.5,
      description: "Complete grooming set with brush, nail clipper, shampoo",
      inStock: true,
      features: ["Complete Set", "Ergonomic Design", "Safe Materials", "Easy to Use"]
    },
    {
      id: 6,
      name: "Interactive Cat Toy",
      brand: "PlayPet",
      category: "Toys",
      price: "৳650",
      originalPrice: "৳750",
      rating: 4.4,
      description: "Electronic toy mouse with motion sensor",
      inStock: true,
      features: ["Motion Sensor", "Durable", "Battery Operated", "Engaging"]
    },
    {
      id: 7,
      name: "Dog Training Treats",
      brand: "GoodBoy",
      category: "Food",
      price: "৳300",
      originalPrice: "৳350",
      rating: 4.7,
      description: "Healthy training treats, chicken flavor, 500g",
      inStock: true,
      features: ["Chicken Flavor", "Low Calorie", "Small Size", "Digestible"]
    },
    {
      id: 8,
      name: "Pet Carrier Bag",
      brand: "TravelPet",
      category: "Accessories",
      price: "৳2,200",
      originalPrice: "৳2,800",
      rating: 4.8,
      description: "Comfortable travel carrier for small to medium pets",
      inStock: true,
      features: ["Ventilated", "Comfortable", "Durable", "Portable"]
    }
  ];

  const handleBuyNow = () => {
    setShowLoginModal(true);
  };

  const handleCardClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Enhanced Header */}
      <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-xl transition-all duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </Button>
        
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-poppins bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
            Pet Store Products
          </h1>
          <p className="text-gray-600 text-xl font-nunito mb-6">Everything your pet needs, delivered to your door</p>
          
          <Button
            onClick={() => setShowComparison(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <BarChart3 size={20} className="mr-2" />
            Compare Products
          </Button>
        </div>
      </div>

      {/* Enhanced Product Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24 pt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl">
              <div onClick={() => handleCardClick(product.id)} className="cursor-pointer">
                <CardHeader className="text-center pb-4 px-6 pt-6">
                  <ImageGallery 
                    images={[]} 
                    alt={product.name}
                    className="mb-4"
                  />
                  <CardTitle className="text-lg font-bold text-gray-800 leading-tight font-poppins">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm font-nunito">
                    {product.brand} • {product.category}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3 px-6">
                  <div className="flex items-center justify-center text-sm">
                    <Star size={16} className="mr-1 text-yellow-500 fill-current" />
                    <span className="text-gray-600 font-nunito">{product.rating}</span>
                  </div>
                  
                  <p className="text-gray-700 text-xs leading-relaxed text-center font-nunito">
                    {product.description}
                  </p>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 font-poppins">
                      {product.price}
                    </div>
                    <div className="text-sm text-gray-500 line-through font-nunito">
                      {product.originalPrice}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    {product.inStock ? (
                      <span className="text-green-600 text-sm font-medium font-nunito">✓ In Stock</span>
                    ) : (
                      <span className="text-red-500 text-sm font-medium font-nunito">Out of Stock</span>
                    )}
                  </div>
                </CardContent>
              </div>
              
              <CardContent className="pt-0 pb-6 px-6">
                <Button 
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 font-poppins"
                >
                  {product.inStock ? "Buy Now" : "Sold Out"}
                </Button>
              </CardContent>
            </Card>
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
