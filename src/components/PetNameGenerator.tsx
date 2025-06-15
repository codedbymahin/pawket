
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Heart, Shuffle, Search, Sparkles } from "lucide-react";

interface PetName {
  name: string;
  meaning: string;
  origin: string;
  gender: "male" | "female" | "unisex";
  petType: string[];
  personality?: string[];
}

interface PetNameGeneratorProps {
  title: string;
  className?: string;
}

const PetNameGenerator = ({ title, className = "" }: PetNameGeneratorProps) => {
  const [selectedPetType, setSelectedPetType] = useState<string>("all");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedPersonality, setSelectedPersonality] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [favoriteNames, setFavoriteNames] = useState<string[]>([]);
  const [generatedNames, setGeneratedNames] = useState<PetName[]>([]);

  const petNames: PetName[] = [
    // Bengali Traditional Names
    { name: "Kalu", meaning: "Black/Dark", origin: "Bengali", gender: "male", petType: ["dog", "cat"], personality: ["independent", "protective"] },
    { name: "Roxy", meaning: "Dawn", origin: "Bengali", gender: "female", petType: ["dog", "cat"], personality: ["energetic", "playful"] },
    { name: "Moni", meaning: "Gem/Jewel", origin: "Bengali", gender: "unisex", petType: ["dog", "cat", "bird"], personality: ["gentle", "loving"] },
    { name: "Tuku", meaning: "Little One", origin: "Bengali", gender: "unisex", petType: ["dog", "cat", "rabbit"], personality: ["playful", "social"] },
    { name: "Chompa", meaning: "Flower", origin: "Bengali", gender: "female", petType: ["dog", "cat"], personality: ["gentle", "calm"] },
    { name: "Raja", meaning: "King", origin: "Bengali", gender: "male", petType: ["dog"], personality: ["confident", "leader"] },
    { name: "Rani", meaning: "Queen", origin: "Bengali", gender: "female", petType: ["dog", "cat"], personality: ["elegant", "confident"] },
    { name: "Goltu", meaning: "Round/Chubby", origin: "Bengali", gender: "unisex", petType: ["dog", "cat"], personality: ["calm", "friendly"] },
    
    // Nature-inspired
    { name: "Nodi", meaning: "River", origin: "Bengali", gender: "female", petType: ["dog", "cat"], personality: ["calm", "flowing"] },
    { name: "Pakhi", meaning: "Bird", origin: "Bengali", gender: "female", petType: ["bird", "cat"], personality: ["free-spirited", "energetic"] },
    { name: "Phul", meaning: "Flower", origin: "Bengali", gender: "unisex", petType: ["dog", "cat", "rabbit"], personality: ["gentle", "beautiful"] },
    { name: "Megh", meaning: "Cloud", origin: "Bengali", gender: "male", petType: ["dog", "cat"], personality: ["dreamy", "calm"] },
    
    // Modern International
    { name: "Max", meaning: "Greatest", origin: "International", gender: "male", petType: ["dog"], personality: ["energetic", "leader"] },
    { name: "Bella", meaning: "Beautiful", origin: "International", gender: "female", petType: ["dog", "cat"], personality: ["elegant", "loving"] },
    { name: "Charlie", meaning: "Free Man", origin: "International", gender: "unisex", petType: ["dog", "cat"], personality: ["friendly", "social"] },
    { name: "Luna", meaning: "Moon", origin: "International", gender: "female", petType: ["dog", "cat"], personality: ["mysterious", "gentle"] },
    { name: "Rocky", meaning: "Rock/Stone", origin: "International", gender: "male", petType: ["dog"], personality: ["strong", "protective"] },
    { name: "Coco", meaning: "Coconut", origin: "International", gender: "female", petType: ["dog", "cat"], personality: ["sweet", "playful"] },
    
    // Personality-based
    { name: "Jolly", meaning: "Happy/Cheerful", origin: "English", gender: "unisex", petType: ["dog", "cat"], personality: ["playful", "energetic"] },
    { name: "Buddy", meaning: "Friend", origin: "English", gender: "male", petType: ["dog"], personality: ["friendly", "loyal"] },
    { name: "Princess", meaning: "Royal", origin: "English", gender: "female", petType: ["dog", "cat"], personality: ["elegant", "spoiled"] },
    { name: "Shadow", meaning: "Dark Silhouette", origin: "English", gender: "unisex", petType: ["dog", "cat"], personality: ["mysterious", "loyal"] }
  ];

  const petTypes = ["all", "dog", "cat", "bird", "rabbit"];
  const genders = ["all", "male", "female", "unisex"];
  const personalities = ["all", "playful", "gentle", "energetic", "calm", "friendly", "independent", "loyal"];

  const generateRandomNames = () => {
    const shuffled = [...petNames].sort(() => 0.5 - Math.random());
    setGeneratedNames(shuffled.slice(0, 6));
  };

  const getFilteredNames = () => {
    return petNames.filter(name => {
      const matchesPetType = selectedPetType === "all" || name.petType.includes(selectedPetType);
      const matchesGender = selectedGender === "all" || name.gender === selectedGender || name.gender === "unisex";
      const matchesPersonality = selectedPersonality === "all" || name.personality?.includes(selectedPersonality);
      const matchesSearch = searchTerm === "" || name.name.toLowerCase().includes(searchTerm.toLowerCase()) || name.meaning.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesPetType && matchesGender && matchesPersonality && matchesSearch;
    });
  };

  const toggleFavorite = (name: string) => {
    setFavoriteNames(prev => 
      prev.includes(name) 
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  const filteredNames = getFilteredNames();

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">
          Find the perfect name for your furry friend with Bengali cultural touch
        </p>
      </div>

      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="generator">Name Generator</TabsTrigger>
          <TabsTrigger value="browse">Browse Names</TabsTrigger>
          <TabsTrigger value="favorites">Favorites ({favoriteNames.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="generator" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="text-[#00AEEF]" size={24} />
                <span>Generate Perfect Names</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label>Pet Type</Label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={selectedPetType}
                    onChange={(e) => setSelectedPetType(e.target.value)}
                  >
                    {petTypes.map(type => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label>Gender</Label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                  >
                    {genders.map(gender => (
                      <option key={gender} value={gender}>
                        {gender.charAt(0).toUpperCase() + gender.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label>Personality</Label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={selectedPersonality}
                    onChange={(e) => setSelectedPersonality(e.target.value)}
                  >
                    {personalities.map(personality => (
                      <option key={personality} value={personality}>
                        {personality.charAt(0).toUpperCase() + personality.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-end">
                  <Button onClick={generateRandomNames} className="w-full">
                    <Shuffle size={16} className="mr-2" />
                    Generate
                  </Button>
                </div>
              </div>

              {generatedNames.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {generatedNames.map((name, index) => (
                    <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-[#00AEEF]">{name.name}</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFavorite(name.name)}
                            className={favoriteNames.includes(name.name) ? "text-red-500" : "text-gray-400"}
                          >
                            <Heart size={16} fill={favoriteNames.includes(name.name) ? "currentColor" : "none"} />
                          </Button>
                        </div>
                        <p className="text-gray-600 mb-2">{name.meaning}</p>
                        <div className="flex flex-wrap gap-1">
                          <Badge variant="secondary">{name.origin}</Badge>
                          <Badge variant="outline">{name.gender}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="browse" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Browse All Names</CardTitle>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search names or meanings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredNames.map((name, index) => (
                  <Card key={index} className="border hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-[#00AEEF]">{name.name}</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(name.name)}
                          className={favoriteNames.includes(name.name) ? "text-red-500" : "text-gray-400"}
                        >
                          <Heart size={14} fill={favoriteNames.includes(name.name) ? "currentColor" : "none"} />
                        </Button>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{name.meaning}</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary" className="text-xs">{name.origin}</Badge>
                        <Badge variant="outline" className="text-xs">{name.gender}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {filteredNames.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No names found matching your criteria. Try adjusting your filters.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites">
          <Card>
            <CardHeader>
              <CardTitle>Your Favorite Names</CardTitle>
            </CardHeader>
            <CardContent>
              {favoriteNames.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No favorite names yet. Start browsing to add some favorites!
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {favoriteNames.map((favName) => {
                    const nameData = petNames.find(n => n.name === favName);
                    return nameData ? (
                      <Card key={favName} className="border hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-bold text-[#00AEEF]">{nameData.name}</h3>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleFavorite(nameData.name)}
                              className="text-red-500"
                            >
                              <Heart size={14} fill="currentColor" />
                            </Button>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{nameData.meaning}</p>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="secondary" className="text-xs">{nameData.origin}</Badge>
                            <Badge variant="outline" className="text-xs">{nameData.gender}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ) : null;
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PetNameGenerator;
