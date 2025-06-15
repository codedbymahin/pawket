
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, Filter } from "lucide-react";

interface Breed {
  id: number;
  name: string;
  type: "dog" | "cat";
  size: "small" | "medium" | "large";
  energyLevel: "low" | "medium" | "high";
  goodWithKids: boolean;
  suitableForBangladesh: boolean;
  image: string;
  characteristics: string[];
  careTips: string[];
  description: string;
}

interface BreedGuideProps {
  title: string;
  className?: string;
}

const BreedGuide = ({ title, className = "" }: BreedGuideProps) => {
  const [selectedType, setSelectedType] = useState<"all" | "dog" | "cat">("all");
  const [selectedSize, setSelectedSize] = useState<"all" | "small" | "medium" | "large">("all");
  const [selectedEnergy, setSelectedEnergy] = useState<"all" | "low" | "medium" | "high">("all");

  const breeds: Breed[] = [
    {
      id: 1,
      name: "Golden Retriever",
      type: "dog",
      size: "large",
      energyLevel: "high",
      goodWithKids: true,
      suitableForBangladesh: false,
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=300&h=200&fit=crop",
      characteristics: ["Friendly", "Intelligent", "Loyal", "Active"],
      careTips: ["Regular grooming needed", "Daily exercise required", "Not suitable for hot climate"],
      description: "Golden Retrievers are friendly and intelligent but require cool environments and extensive grooming."
    },
    {
      id: 2,
      name: "Persian Cat",
      type: "cat",
      size: "medium",
      energyLevel: "low",
      goodWithKids: true,
      suitableForBangladesh: true,
      image: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?w=300&h=200&fit=crop",
      characteristics: ["Calm", "Affectionate", "Quiet", "Indoor"],
      careTips: ["Daily brushing", "Indoor living", "Regular eye cleaning"],
      description: "Persian cats are calm and affectionate, perfect for indoor living in Bangladesh's climate."
    },
    {
      id: 3,
      name: "Local Bengali Cat",
      type: "cat",
      size: "small",
      energyLevel: "medium",
      goodWithKids: true,
      suitableForBangladesh: true,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=200&fit=crop",
      characteristics: ["Hardy", "Adaptable", "Independent", "Local"],
      careTips: ["Low maintenance", "Naturally adapted to climate", "Regular vaccination"],
      description: "Local Bengali cats are perfectly adapted to Bangladesh's climate and require minimal special care."
    },
    {
      id: 4,
      name: "Indian Pariah Dog",
      type: "dog",
      size: "medium",
      energyLevel: "medium",
      goodWithKids: true,
      suitableForBangladesh: true,
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300&h=200&fit=crop",
      characteristics: ["Hardy", "Loyal", "Intelligent", "Local"],
      careTips: ["Naturally adapted", "Regular exercise", "Basic grooming"],
      description: "Indian Pariah dogs are naturally suited to the local climate and make excellent companions."
    },
    {
      id: 5,
      name: "British Shorthair",
      type: "cat",
      size: "medium",
      energyLevel: "low",
      goodWithKids: true,
      suitableForBangladesh: true,
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=300&h=200&fit=crop",
      characteristics: ["Calm", "Independent", "Sturdy", "Easy-going"],
      careTips: ["Minimal grooming", "Indoor preferred", "Moderate exercise"],
      description: "British Shorthairs are easy-going cats that adapt well to indoor living in warm climates."
    },
    {
      id: 6,
      name: "Jack Russell Terrier",
      type: "dog",
      size: "small",
      energyLevel: "high",
      goodWithKids: true,
      suitableForBangladesh: false,
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=300&h=200&fit=crop",
      characteristics: ["Energetic", "Smart", "Bold", "Active"],
      careTips: ["High exercise needs", "Mental stimulation", "Not for hot climates"],
      description: "Jack Russell Terriers are highly energetic and require significant exercise and cool environments."
    }
  ];

  const filteredBreeds = breeds.filter(breed => {
    if (selectedType !== "all" && breed.type !== selectedType) return false;
    if (selectedSize !== "all" && breed.size !== selectedSize) return false;
    if (selectedEnergy !== "all" && breed.energyLevel !== selectedEnergy) return false;
    return true;
  });

  const resetFilters = () => {
    setSelectedType("all");
    setSelectedSize("all");
    setSelectedEnergy("all");
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">
          Discover the perfect pet breed for your lifestyle in Bangladesh
        </p>
      </div>

      {/* Filters */}
      <Card className="p-4 bg-gray-50">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-600" />
            <span className="font-semibold text-gray-700">Filters:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="px-3 py-1 rounded-full border border-gray-300 text-sm"
            >
              <option value="all">All Types</option>
              <option value="dog">Dogs</option>
              <option value="cat">Cats</option>
            </select>
            
            <select 
              value={selectedSize} 
              onChange={(e) => setSelectedSize(e.target.value as any)}
              className="px-3 py-1 rounded-full border border-gray-300 text-sm"
            >
              <option value="all">All Sizes</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            
            <select 
              value={selectedEnergy} 
              onChange={(e) => setSelectedEnergy(e.target.value as any)}
              className="px-3 py-1 rounded-full border border-gray-300 text-sm"
            >
              <option value="all">All Energy Levels</option>
              <option value="low">Low Energy</option>
              <option value="medium">Medium Energy</option>
              <option value="high">High Energy</option>
            </select>
            
            <Button variant="outline" size="sm" onClick={resetFilters}>
              Reset
            </Button>
          </div>
        </div>
      </Card>

      {/* Breed Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBreeds.map((breed) => (
          <Card key={breed.id} className="border-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-video bg-gray-100 rounded-t-2xl overflow-hidden">
              <img 
                src={breed.image} 
                alt={breed.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-[#333333]">
                  {breed.name}
                </CardTitle>
                {breed.suitableForBangladesh && (
                  <Badge className="bg-green-100 text-green-800">
                    Bangladesh Suitable
                  </Badge>
                )}
              </div>
              <p className="text-gray-600 text-sm">{breed.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{breed.type}</Badge>
                <Badge variant="outline">{breed.size}</Badge>
                <Badge variant="outline">{breed.energyLevel} energy</Badge>
                {breed.goodWithKids && (
                  <Badge className="bg-blue-100 text-blue-800">
                    <Heart size={12} className="mr-1" />
                    Kid-friendly
                  </Badge>
                )}
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2">Characteristics:</h4>
                <div className="flex flex-wrap gap-1">
                  {breed.characteristics.map((char, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                      {char}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm mb-2">Care Tips:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {breed.careTips.map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <Star size={10} className="mr-1 mt-0.5 text-yellow-500" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBreeds.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No breeds match your current filters. Try adjusting your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default BreedGuide;
