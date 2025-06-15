
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Star, Check, Minus } from "lucide-react";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  originalPrice: string;
  rating: number;
  features: string[];
  category: string;
  inStock: boolean;
}

interface ProductComparisonProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const ProductComparison = ({ isOpen, onClose, products }: ProductComparisonProps) => {
  const maxProducts = Math.min(products.length, 3);
  const compareProducts = products.slice(0, maxProducts);

  const allFeatures = Array.from(
    new Set(compareProducts.flatMap(p => p.features))
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Product Comparison
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onClose}
          >
            <X size={20} />
          </Button>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {compareProducts.map((product) => (
            <Card key={product.id} className="border-2 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
                <p className="text-gray-600">{product.brand}</p>
                <div className="flex items-center justify-center space-x-1">
                  <Star size={16} className="text-yellow-500 fill-current" />
                  <span className="text-sm">{product.rating}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{product.price}</div>
                  <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                </div>
                
                <Badge 
                  variant={product.inStock ? "default" : "destructive"}
                  className="w-full justify-center"
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
                
                <div className="space-y-2">
                  <h4 className="font-semibold">Features:</h4>
                  {allFeatures.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      {product.features.includes(feature) ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Minus size={16} className="text-gray-400" />
                      )}
                      <span className={`text-sm ${
                        product.features.includes(feature) ? 'text-gray-800' : 'text-gray-400'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Button onClick={onClose} className="px-8 py-2 rounded-2xl">
            Close Comparison
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductComparison;
