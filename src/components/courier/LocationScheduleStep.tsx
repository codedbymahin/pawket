
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar as CalendarIcon, Clock, Zap, Crown, Truck } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { BookingData } from "./BookingWizard";

interface LocationScheduleStepProps {
  formData: BookingData;
  updateFormData: (updates: Partial<BookingData>) => void;
}

const LocationScheduleStep = ({ formData, updateFormData }: LocationScheduleStepProps) => {
  const locations = [
    { value: "dhaka-gulshan", label: "Dhaka - Gulshan", area: "Premium Area" },
    { value: "dhaka-dhanmondi", label: "Dhaka - Dhanmondi", area: "Central" },
    { value: "dhaka-uttara", label: "Dhaka - Uttara", area: "North" },
    { value: "chittagong", label: "Chittagong", area: "Port City" },
    { value: "sylhet", label: "Sylhet", area: "Tea Capital" },
    { value: "rajshahi", label: "Rajshahi", area: "Silk City" },
  ];

  const serviceTypes = [
    {
      id: "standard",
      name: "Standard Service",
      description: "Safe and reliable transport",
      time: "4-6 hours",
      price: "Base Price",
      icon: Truck,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: "express",
      name: "Express Service",
      description: "Faster delivery with priority handling",
      time: "2-4 hours",
      price: "+50%",
      icon: Zap,
      color: "bg-orange-500",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: "premium",
      name: "Premium Service",
      description: "Luxury transport with real-time updates",
      time: "1-2 hours",
      price: "+100%",
      icon: Crown,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <MapPin className="w-12 h-12 text-cyan-500 mx-auto mb-4 animate-bounce-gentle" />
        <h3 className="text-2xl font-bold text-gray-800 font-poppins mb-2">
          Where and when?
        </h3>
        <p className="text-gray-600 font-nunito">
          Plan your pet's safe journey
        </p>
      </div>

      <div className="space-y-8">
        {/* Location Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="font-poppins text-gray-700 text-lg flex items-center gap-2">
              <MapPin size={16} className="text-cyan-500" />
              From Location *
            </Label>
            <Select value={formData.fromLocation} onValueChange={(value) => updateFormData({ fromLocation: value })}>
              <SelectTrigger className="rounded-xl border-cyan-200 h-12 focus:border-cyan-400 transition-colors duration-300">
                <SelectValue placeholder="Select pickup location" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value} className="rounded-lg">
                    <div>
                      <div className="font-semibold">{location.label}</div>
                      <div className="text-xs text-gray-500">{location.area}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label className="font-poppins text-gray-700 text-lg flex items-center gap-2">
              <MapPin size={16} className="text-cyan-500" />
              To Location *
            </Label>
            <Select value={formData.toLocation} onValueChange={(value) => updateFormData({ toLocation: value })}>
              <SelectTrigger className="rounded-xl border-cyan-200 h-12 focus:border-cyan-400 transition-colors duration-300">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value} className="rounded-lg">
                    <div>
                      <div className="font-semibold">{location.label}</div>
                      <div className="text-xs text-gray-500">{location.area}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Service Type Selection */}
        <div className="space-y-4">
          <Label className="font-poppins text-gray-700 text-lg flex items-center gap-2">
            <Truck size={16} className="text-cyan-500" />
            Service Type *
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {serviceTypes.map((service) => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  formData.serviceType === service.id
                    ? "ring-2 ring-cyan-400 bg-cyan-50 border-cyan-200"
                    : "hover:border-gray-300"
                }`}
                onClick={() => updateFormData({ serviceType: service.id })}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110`}>
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-gray-800 font-poppins mb-2">{service.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {service.time}
                    </span>
                    <span className="font-semibold text-cyan-600">
                      {service.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="font-poppins text-gray-700 text-lg flex items-center gap-2">
              <CalendarIcon size={16} className="text-cyan-500" />
              Pickup Date *
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-xl border-cyan-200 h-12 focus:border-cyan-400 transition-colors duration-300",
                    !formData.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-xl" align="start">
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => updateFormData({ date })}
                  initialFocus
                  className="rounded-xl"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label className="font-poppins text-gray-700 text-lg flex items-center gap-2">
              <Clock size={16} className="text-cyan-500" />
              Pickup Time *
            </Label>
            <Select value={formData.timeSlot} onValueChange={(value) => updateFormData({ timeSlot: value })}>
              <SelectTrigger className="rounded-xl border-cyan-200 h-12 focus:border-cyan-400 transition-colors duration-300">
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time} className="rounded-lg">
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationScheduleStep;
