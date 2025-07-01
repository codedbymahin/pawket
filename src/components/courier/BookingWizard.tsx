
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, PawPrint, MapPin, Calendar as CalendarIcon, CheckCircle } from "lucide-react";
import PetDetailsStep from "./PetDetailsStep";
import LocationScheduleStep from "./LocationScheduleStep";
import BookingSummaryStep from "./BookingSummaryStep";

export interface BookingData {
  petType: string;
  petBreed: string;
  petAge: string;
  petWeight: string;
  fromLocation: string;
  toLocation: string;
  serviceType: string;
  specialNeeds: string;
  date: Date | undefined;
  timeSlot: string;
}

interface BookingWizardProps {
  onBooking: () => void;
}

const BookingWizard = ({ onBooking }: BookingWizardProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingData>({
    petType: "",
    petBreed: "",
    petAge: "",
    petWeight: "",
    fromLocation: "",
    toLocation: "",
    serviceType: "",
    specialNeeds: "",
    date: undefined,
    timeSlot: ""
  });

  const steps = [
    { id: 1, title: "Pet Details", icon: PawPrint, description: "Tell us about your pet" },
    { id: 2, title: "Location & Schedule", icon: MapPin, description: "Where and when" },
    { id: 3, title: "Summary", icon: CalendarIcon, description: "Review and book" }
  ];

  const progress = (currentStep / steps.length) * 100;

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return formData.petType && formData.petWeight;
      case 2:
        return formData.fromLocation && formData.toLocation && formData.serviceType && formData.date && formData.timeSlot;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length && isStepValid(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (updates: Partial<BookingData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  return (
    <Card className="bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-cyan-50 to-sky-50 border-b border-cyan-100">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-2xl font-bold text-gray-800 font-poppins flex items-center gap-3">
            <PawPrint className="text-cyan-500" size={28} />
            Book Your Pet's Journey
          </CardTitle>
          <Badge variant="outline" className="bg-white/80 text-cyan-600 border-cyan-200">
            Step {currentStep} of {steps.length}
          </Badge>
        </div>
        
        <Progress value={progress} className="w-full h-2 bg-cyan-100" />
        
        <div className="flex justify-between mt-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center gap-2 transition-all duration-300 ${
                step.id === currentStep
                  ? "text-cyan-600 scale-105"
                  : step.id < currentStep
                  ? "text-green-600"
                  : "text-gray-400"
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                step.id === currentStep
                  ? "bg-cyan-500 text-white animate-pulse"
                  : step.id < currentStep
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-400"
              }`}>
                {step.id < currentStep ? (
                  <CheckCircle size={16} />
                ) : (
                  <step.icon size={16} />
                )}
              </div>
              <div className="hidden sm:block">
                <p className="font-semibold text-sm">{step.title}</p>
                <p className="text-xs opacity-75">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardHeader>

      <CardContent className="p-8">
        <div className="min-h-[400px]">
          {currentStep === 1 && (
            <PetDetailsStep
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 2 && (
            <LocationScheduleStep
              formData={formData}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 3 && (
            <BookingSummaryStep
              formData={formData}
              onBooking={onBooking}
            />
          )}
        </div>

        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="rounded-xl border-cyan-200 hover:bg-cyan-50 transition-all duration-300"
          >
            <ArrowLeft size={18} className="mr-2" />
            Previous
          </Button>

          {currentStep < steps.length ? (
            <Button
              onClick={nextStep}
              disabled={!isStepValid(currentStep)}
              className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-600 hover:to-sky-600 text-white rounded-xl px-8 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Next Step
              <ArrowRight size={18} className="ml-2" />
            </Button>
          ) : (
            <Button
              onClick={onBooking}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl px-8 transition-all duration-300 hover:scale-105"
            >
              Complete Booking
              <CheckCircle size={18} className="ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingWizard;
