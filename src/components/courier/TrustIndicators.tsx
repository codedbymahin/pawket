
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, MapPin, Star, Clock, Users, Award, 
  Heart, CheckCircle, Truck, Phone
} from "lucide-react";

const TrustIndicators = () => {
  const stats = [
    { icon: Users, label: "Happy Pet Parents", value: "10,000+", color: "text-blue-500" },
    { icon: Truck, label: "Successful Transports", value: "15,000+", color: "text-green-500" },
    { icon: Star, label: "Average Rating", value: "4.9/5", color: "text-yellow-500" },
    { icon: Clock, label: "On-Time Delivery", value: "99.5%", color: "text-purple-500" },
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Safe & Secure",
      description: "All drivers are background checked and pet care certified",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: MapPin,
      title: "Real-time GPS Tracking",
      description: "Monitor your pet's journey every step of the way",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      title: "Pet-Loving Drivers",
      description: "Every driver is a certified pet lover with special training",
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    }
  ];

  const certifications = [
    "ISO 9001 Certified",
    "Pet Transport Licensed",
    "Fully Insured Service",
    "24/7 Emergency Support"
  ];

  return (
    <div className="space-y-8">
      {/* Statistics */}
      <Card className="bg-gradient-to-br from-cyan-50 to-sky-50 border-cyan-200 border-2 rounded-3xl overflow-hidden">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold text-gray-800 font-poppins mb-2">
            Trusted by Pet Parents Across Bangladesh
          </CardTitle>
          <p className="text-gray-600 font-nunito text-lg">
            Join thousands of happy customers who trust Pawket with their precious pets
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
                  <stat.icon size={32} />
                </div>
                <div className="font-bold text-2xl text-gray-800 font-poppins">{stat.value}</div>
                <div className="text-gray-600 text-sm font-nunito">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="bg-white/80 text-cyan-600 border-cyan-200 px-4 py-2">
                <CheckCircle size={14} className="mr-2" />
                {cert}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white shadow-xl rounded-3xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className={`w-20 h-20 rounded-full ${feature.bgColor} flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className={feature.color} size={40} />
              </div>
              <h3 className="font-bold text-xl text-gray-800 font-poppins mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-nunito leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Contact */}
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 border-2 rounded-3xl">
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                <Phone className="text-white" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-800 font-poppins">
                  24/7 Emergency Support
                </h3>
                <p className="text-gray-600 font-nunito">
                  Our support team is always available for any urgent needs
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-2xl text-red-600">+880-1XXX-PAWKET</p>
              <p className="text-sm text-red-500">Always here for you</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrustIndicators;
