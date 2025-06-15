import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Truck, Package } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { productData } from "@/data/profileData";

const ProductProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const product = productData[id || ""];

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product not found</h1>
          <Button onClick={() => navigate("/shop")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    setShowLoginModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-blue-100">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/shop")}
          className="mb-4 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Shop
        </Button>
      </div>

      {/* Product Profile */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <div className="text-8xl">{product.image}</div>
              </div>
              <div className="flex justify-center mb-4">
                <Badge variant="outline" className={`px-4 py-2 text-sm font-semibold ${
                  product.inStock 
                    ? 'bg-green-100 text-green-700 border-green-200' 
                    : 'bg-red-100 text-red-700 border-red-200'
                }`}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800">
                {product.name}
              </CardTitle>
              <p className="text-xl text-gray-600 mt-2">{product.brand} • {product.category}</p>
              <div className="flex items-center justify-center mt-3">
                <Star size={20} className="mr-1 text-yellow-500 fill-current" />
                <span className="text-lg font-semibold text-gray-700">{product.rating}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {product.price}
                </div>
                <div className="text-xl text-gray-500 line-through">
                  {product.originalPrice}
                </div>
                <div className="text-sm text-green-600 font-medium mt-1">
                  Save ৳{parseInt(product.originalPrice.replace('৳', '').replace(',', '')) - parseInt(product.price.replace('৳', '').replace(',', ''))}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>
                
                {product.features && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                      <Package size={20} className="mr-2 text-purple-500" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.sizes && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Available Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size: string, index: number) => (
                        <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.colors && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Available Colors</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color: string, index: number) => (
                        <span key={index} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.varieties && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Available Varieties</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.varieties.map((variety: string, index: number) => (
                        <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          {variety}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.includes && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Kit Includes</h3>
                    <div className="grid grid-cols-1 gap-1">
                      {product.includes.map((item: string, index: number) => (
                        <div key={index} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.ingredients && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Ingredients</h3>
                    <p className="text-gray-700">{product.ingredients}</p>
                  </div>
                )}
                
                {product.dimensions && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Dimensions</h3>
                    <p className="text-gray-700">{product.dimensions}</p>
                  </div>
                )}
                
                {product.weight && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Weight</h3>
                    <p className="text-gray-700">{product.weight}</p>
                  </div>
                )}
                
                {product.batteryLife && (
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">Battery Life</h3>
                    <p className="text-gray-700">{product.batteryLife}</p>
                  </div>
                )}
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 flex items-center">
                    <Truck size={20} className="mr-2 text-orange-500" />
                    Delivery Information
                  </h3>
                  <p className="text-gray-700">{product.deliveryNote}</p>
                </div>
              </div>
              
              <div className="flex justify-center pt-6">
                <Button 
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg disabled:opacity-50"
                >
                  {product.inStock ? "Buy Now" : "Out of Stock"}
                </Button>
              </div>
            </CardContent>
          </Card>
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
              Login required. Guest access does not allow interaction. Only early-access users approved by the Pawket team can use this feature.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowLoginModal(false)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            >
              Got it! 🐾
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductProfile;
