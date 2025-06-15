
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  visibleSections: Set<string>;
  setSectionRef: (sectionId: string) => (el: HTMLElement | null) => void;
}

const TestimonialsSection = ({ visibleSections, setSectionRef }: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Fatima Rahman",
      role: "Pet Parent from Dhaka",
      content: "Pawket helped me find the perfect companion for my family. The process was so smooth and the community is amazing!",
      rating: 5,
      image: "👩"
    },
    {
      name: "Ahmed Hassan",
      role: "Vet Professional",
      content: "As a veterinarian, I love how Pawket connects pet owners with quality care. The virtual consultation feature is revolutionary!",
      rating: 5,
      image: "👨‍⚕️"
    },
    {
      name: "Rashida Begum",
      role: "Pet Adopter from Sylhet",
      content: "I adopted my cat through Pawket and it was the best decision ever. The team ensures every pet finds the right home.",
      rating: 5,
      image: "👵"
    },
    {
      name: "Karim Abdullah",
      role: "Pet Sharing User",
      content: "When I had to travel, Pawket's pet sharing feature was a lifesaver. My dog was well cared for and I had peace of mind.",
      rating: 5,
      image: "👨"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className={`py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-r from-purple-50 to-pink-50 transition-all duration-700 ease-in-out ${
        visibleSections.has('testimonials') 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      data-section="testimonials"
      ref={setSectionRef('testimonials')}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#00AEEF] mb-6 font-['Nunito',sans-serif]">
            What Pet Parents Say
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-['Nunito',sans-serif]">
            Real stories from our growing community
          </p>
        </div>

        <div className="relative">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              <div className="relative">
                <Quote size={60} className="absolute -top-4 -left-4 text-[#00AEEF]/20" />
                
                <div className="text-center">
                  <div className="text-6xl mb-6">
                    {testimonials[currentIndex].image}
                  </div>
                  
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={24} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 font-['Nunito',sans-serif] italic max-w-4xl mx-auto">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div>
                    <h4 className="text-2xl font-bold text-[#333333] mb-2 font-['Nunito',sans-serif]">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 font-['Nunito',sans-serif]">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-[#00AEEF]" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} className="text-[#00AEEF]" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#00AEEF] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
