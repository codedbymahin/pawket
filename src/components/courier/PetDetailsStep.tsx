
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dog, Cat, Bird, Rabbit, PawPrint, Heart } from "lucide-react";
import { BookingData } from "./BookingWizard";

interface PetDetailsStepProps {
  formData: BookingData;
  updateFormData: (updates: Partial<BookingData>) => void;
}

const PetDetailsStep = ({ formData, updateFormData }: PetDetailsStepProps) => {
  const petTypes = [
    { id: "dog", name: "Dog", icon: Dog, color: "bg-amber-500", hoverColor: "hover:bg-amber-600" },
    { id: "cat", name: "Cat", icon: Cat, color: "bg-purple-500", hoverColor: "hover:bg-purple-600" },
    { id: "bird", name: "Bird", icon: Bird, color: "bg-blue-500", hoverColor: "hover:bg-blue-600" },
    { id: "rabbit", name: "Rabbit", icon: Rabbit, color: "bg-green-500", hoverColor: "hover:bg-green-600" },
    { id: "other", name: "Other", icon: PawPrint, color: "bg-gray-500", hoverColor: "hover:bg-gray-600" },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
        <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-2">
          Tell us about your beloved pet
        </h3>
        <p className="text-gray-600 font-nunito">
          This helps us provide the best care during transport
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label className="font-poppins text-gray-700 text-lg mb-4 block">
            What type of pet? *
          </Label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {petTypes.map((pet) => (
              <Card
                key={pet.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  formData.petType === pet.id
                    ? "ring-2 ring-cyan-400 bg-cyan-50 border-cyan-200"
                    : "hover:border-gray-300"
                }`}
                onClick={() => updateFormData({ petType: pet.id })}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${pet.color} ${pet.hoverColor} flex items-center justify-center mx-auto mb-3 transition-colors duration-300`}>
                    <pet.icon className="text-white" size={24} />
                  </div>
                  <p className="font-semibold text-gray-800 font-poppins">{pet.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="petBreed" className="font-poppins text-gray-700">
              Breed
            </Label>
            <Input
              id="petBreed"
              placeholder="e.g., Golden Retriever"
              value={formData.petBreed}
              onChange={(e) => updateFormData({ petBreed: e.target.value })}
              className="rounded-xl border-cyan-200 focus:border-cyan-400 transition-colors duration-300"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="petAge" className="font-poppins text-gray-700">
              Age
            </Label>
            <Input
              id="petAge"
              placeholder="e.g., 3 years"
              value={formData.petAge}
              onChange={(e) => updateFormData({ petAge: e.target.value })}
              className="rounded-xl border-cyan-200 focus:border-cyan-400 transition-colors duration-300"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="petWeight" className="font-poppins text-gray-700">
            Weight (kg) *
          </Label>
          <div className="relative">
            <Input
              id="petWeight"
              placeholder="e.g., 15"
              type="number"
              value={formData.petWeight}
              onChange={(e) => updateFormData({ petWeight: e.target.value })}
              className="rounded-xl border-cyan-200 focus:border-cyan-400 transition-colors duration-300 pr-12"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
              kg
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Weight helps us determine the appropriate vehicle and pricing
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialNeeds" className="font-poppins text-gray-700">
            Special Care Instructions
          </Label>
          <Textarea
            id="specialNeeds"
            placeholder="Any special care instructions, medical needs, behavioral notes, or things we should know..."
            value={formData.specialNeeds}
            onChange={(e) => updateFormData({ specialNeeds: e.target.value })}
            className="rounded-xl border-cyan-200 focus:border-cyan-400 transition-colors duration-300 min-h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PetDetailsStep;
