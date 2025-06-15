
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Clock, ChevronRight } from "lucide-react";

interface EmergencyProcedure {
  id: number;
  title: string;
  severity: "high" | "medium" | "low";
  symptoms: string[];
  steps: string[];
  whenToCallVet: string;
  prevention: string[];
}

interface EmergencyGuideProps {
  title: string;
  className?: string;
}

const EmergencyGuide = ({ title, className = "" }: EmergencyGuideProps) => {
  const [selectedEmergency, setSelectedEmergency] = useState<number | null>(null);

  const emergencies: EmergencyProcedure[] = [
    {
      id: 1,
      title: "Choking",
      severity: "high",
      symptoms: ["Difficulty breathing", "Pawing at mouth", "Blue tongue/gums", "Panic"],
      steps: [
        "Stay calm and restrain your pet safely",
        "Open the mouth and look for visible objects",
        "If you can see the object, try to remove it with tweezers (be careful not to push it deeper)",
        "For small dogs/cats: Hold upside down and give 5 firm back blows",
        "For large dogs: Lift rear legs, push firmly on belly just below rib cage",
        "Check mouth again and remove any dislodged objects",
        "If unsuccessful after 1-2 minutes, rush to vet immediately"
      ],
      whenToCallVet: "Immediately if you cannot dislodge the object within 1-2 minutes",
      prevention: ["Keep small objects away from pets", "Choose appropriate sized toys", "Supervise during play time"]
    },
    {
      id: 2,
      title: "Poisoning",
      severity: "high",
      symptoms: ["Vomiting", "Diarrhea", "Drooling", "Difficulty breathing", "Seizures", "Lethargy"],
      steps: [
        "Identify the poison if possible",
        "Remove your pet from the source immediately",
        "Do NOT induce vomiting unless specifically instructed by a vet",
        "If poison is on skin/fur, rinse with water for 10+ minutes",
        "Collect the poison container/packaging",
        "Contact emergency vet or poison control immediately",
        "Follow their specific instructions"
      ],
      whenToCallVet: "Immediately - this is always an emergency",
      prevention: ["Store chemicals safely", "Know toxic foods (chocolate, onions, etc.)", "Pet-proof your home"]
    },
    {
      id: 3,
      title: "Heatstroke",
      severity: "high",
      symptoms: ["Heavy panting", "Drooling", "Vomiting", "Diarrhea", "Loss of coordination", "High body temperature"],
      steps: [
        "Move your pet to a cool, shaded area immediately",
        "Apply cool (not cold) water to paw pads, ears, and belly",
        "Use fans to increase air circulation",
        "Offer small amounts of cool water to drink",
        "Do NOT use ice or very cold water",
        "Monitor temperature if possible (normal is 100-102.5°F)",
        "Head to vet even if pet seems to recover"
      ],
      whenToCallVet: "Immediately - heatstroke can be fatal",
      prevention: ["Avoid midday heat (10am-4pm)", "Provide shade and water", "Never leave in vehicles", "Limit exercise in hot weather"]
    },
    {
      id: 4,
      title: "Bleeding/Wounds",
      severity: "medium",
      symptoms: ["Visible bleeding", "Open wounds", "Limping", "Pain when touched"],
      steps: [
        "Stay calm and approach your pet carefully",
        "Apply direct pressure with clean cloth/gauze",
        "Elevate the injured area if possible",
        "Do not remove embedded objects",
        "Wrap wound with bandage (not too tight)",
        "Keep your pet calm and still",
        "Monitor for signs of shock"
      ],
      whenToCallVet: "For deep wounds, heavy bleeding, or if bleeding doesn't stop in 10-15 minutes",
      prevention: ["Pet-proof sharp objects", "Regular nail trimming", "Safe play environments"]
    },
    {
      id: 5,
      title: "Seizures",
      severity: "high",
      symptoms: ["Uncontrolled shaking", "Loss of consciousness", "Drooling", "Loss of bladder control"],
      steps: [
        "Do NOT put anything in your pet's mouth",
        "Move away any objects that could cause injury",
        "Time the seizure (note start and end time)",
        "Keep the area quiet and dimly lit",
        "Do not restrain your pet",
        "Speak softly and calmly",
        "Note any details about the seizure for the vet"
      ],
      whenToCallVet: "If seizure lasts more than 2-3 minutes, or if multiple seizures occur",
      prevention: ["Regular vet checkups", "Maintain consistent medication if prescribed", "Avoid stress triggers"]
    }
  ];

  const emergencyContacts = [
    { name: "Dhaka Central Vet Emergency", phone: "+880-1xxx-xxxxxx", hours: "24/7" },
    { name: "Animal Emergency Helpline", phone: "+880-1xxx-xxxxxx", hours: "24/7" },
    { name: "Poison Control (Pets)", phone: "+880-1xxx-xxxxxx", hours: "24/7" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#00AEEF] mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">
          Quick reference guide for pet emergencies - Always contact your vet for serious situations
        </p>
      </div>

      {/* Emergency Contacts */}
      <Card className="bg-red-50 border-red-200 border-2">
        <CardHeader>
          <CardTitle className="text-red-800 flex items-center">
            <Phone className="mr-2" size={20} />
            Emergency Contacts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="text-center p-3 bg-white rounded-lg border">
                <div className="font-semibold text-red-800">{contact.name}</div>
                <div className="font-mono text-lg">{contact.phone}</div>
                <div className="text-sm text-gray-600">{contact.hours}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-red-700 mt-4 text-center">
            ⚠️ Note: These are example numbers. Please save your local vet's actual emergency number.
          </p>
        </CardContent>
      </Card>

      {/* Emergency Procedures */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emergencies.map((emergency) => (
          <Card 
            key={emergency.id} 
            className={`border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedEmergency === emergency.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setSelectedEmergency(selectedEmergency === emergency.id ? null : emergency.id)}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-bold text-[#333333]">
                  {emergency.title}
                </CardTitle>
                <div className={`px-2 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(emergency.severity)}`}>
                  {emergency.severity.toUpperCase()}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-600">
                  <AlertTriangle size={16} className="mr-1" />
                  <span className="text-sm">Click for details</span>
                </div>
                <ChevronRight 
                  size={16} 
                  className={`transition-transform ${selectedEmergency === emergency.id ? 'rotate-90' : ''}`} 
                />
              </div>
            </CardHeader>
            
            {selectedEmergency === emergency.id && (
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-red-700">Symptoms:</h4>
                  <ul className="text-sm space-y-1">
                    {emergency.symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-red-500 rounded-full mr-2 mt-2"></span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-blue-700">Steps to Take:</h4>
                  <ol className="text-sm space-y-1">
                    {emergency.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-sm mb-1 text-yellow-800 flex items-center">
                    <Clock size={14} className="mr-1" />
                    When to Call Vet:
                  </h4>
                  <p className="text-sm text-yellow-700">{emergency.whenToCallVet}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-green-700">Prevention:</h4>
                  <ul className="text-sm space-y-1">
                    {emergency.prevention.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2 mt-2"></span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200 border-2">
        <CardContent className="pt-6">
          <div className="text-center">
            <AlertTriangle className="mx-auto mb-4 text-blue-600" size={32} />
            <h3 className="font-bold text-blue-800 mb-2">Important Reminder</h3>
            <p className="text-blue-700 text-sm">
              This guide provides basic first aid information only. Always contact your veterinarian for professional medical advice. 
              In serious emergencies, head to the nearest emergency animal hospital immediately.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmergencyGuide;
