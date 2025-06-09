
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

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
      inStock: true
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
      inStock: true
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
      inStock: true
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
      inStock: false
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
      inStock: true
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
      inStock: true
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
      inStock: true
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
      inStock: true
    }
  ];

  const handleBuyNow = () => {
    setShowLoginModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
      {/* Header */}
      <div className="p-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </Button>
        
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
            Pet Shop
          </h1>
          <p className="text-gray-600 text-lg">Everything your pet needs, delivered to your door</p>
        </div>
      </div>

      {/* Product Listings */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="text-center pb-3">
                <div className="flex justify-center mb-3">
                  <ShoppingCart size={32} className="text-purple-500" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 leading-tight">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  {product.brand} • {product.category}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center justify-center text-sm">
                  <Star size={14} className="mr-1 text-yellow-500 fill-current" />
                  <span className="text-gray-600">{product.rating}</span>
                </div>
                
                <p className="text-gray-700 text-xs leading-relaxed text-center">
                  {product.description}
                </p>
                
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">
                    {product.price}
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    {product.originalPrice}
                  </div>
                </div>
                
                <div className="text-center">
                  {product.inStock ? (
                    <span className="text-green-600 text-sm font-medium">✓ In Stock</span>
                  ) : (
                    <span className="text-red-500 text-sm font-medium">Out of Stock</span>
                  )}
                </div>
                
                <Button 
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-lg disabled:opacity-50"
                >
                  {product.inStock ? "Buy Now" : "Sold Out"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Login Required Modal */}
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold">
              ⚠️ Login Required
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 pt-4 leading-relaxed">
              Login required to access this feature. Guest access is view-only. (Only early access users approved by the Pawket Team can log in and use these services.)
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowLoginModal(false)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            >
              Understood
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Shop;
