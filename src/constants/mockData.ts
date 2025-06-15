
import { Pet, SharingOffer, Veterinarian, Product } from '@/types';

export const pets: Pet[] = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "2 years",
    location: "Dhanmondi, Dhaka",
    description: "Friendly and energetic dog, great with kids",
    owner: "Ahmed Hassan",
    type: "dog"
  },
  {
    id: 2,
    name: "Mimi",
    breed: "Persian Cat",
    age: "1.5 years",
    location: "Gulshan, Dhaka",
    description: "Calm and affectionate, perfect lap cat",
    owner: "Fatima Khan",
    type: "cat"
  },
  {
    id: 3,
    name: "Rocky",
    breed: "German Shepherd",
    age: "3 years",
    location: "Mymensingh",
    description: "Loyal guard dog, well-trained",
    owner: "Rashed Ahmed",
    type: "dog"
  },
  {
    id: 4,
    name: "Whiskers",
    breed: "Bengali Cat",
    age: "6 months",
    location: "Sylhet",
    description: "Playful kitten, loves to explore",
    owner: "Nazma Begum",
    type: "cat"
  },
  {
    id: 5,
    name: "Max",
    breed: "Labrador Mix",
    age: "4 years",
    location: "Chittagong",
    description: "Active and loving, great running partner",
    owner: "Karim Rahman",
    type: "dog"
  },
  {
    id: 6,
    name: "Luna",
    breed: "Siamese Cat",
    age: "2 years",
    location: "Rangpur",
    description: "Elegant and intelligent, loves attention",
    owner: "Salma Khatun",
    type: "cat"
  }
];

export const sharingOffers: SharingOffer[] = [
  {
    id: 1,
    petName: "Charlie",
    breed: "Beagle",
    location: "Banani, Dhaka",
    duration: "Weekend trip",
    reason: "Owner traveling for work",
    owner: "Rashida Akter",
    status: "Available"
  },
  {
    id: 2,
    petName: "Fluffy",
    breed: "British Shorthair",
    location: "Uttara, Dhaka",
    duration: "3 days",
    reason: "Family emergency",
    owner: "Mohammad Ali",
    status: "Available"
  },
  {
    id: 3,
    petName: "Daisy",
    breed: "Golden Retriever Puppy",
    location: "Mymensingh",
    duration: "2 hours morning",
    reason: "Owner works early shifts",
    owner: "Sadia Rahman",
    status: "Available"
  },
  {
    id: 4,
    petName: "Tiger",
    breed: "German Shepherd",
    location: "Sylhet",
    duration: "Evening walks",
    reason: "Owner has mobility issues",
    owner: "Aminul Islam",
    status: "Available"
  },
  {
    id: 5,
    petName: "Mittens",
    breed: "Persian Mix",
    location: "Chittagong",
    duration: "Daily playtime",
    reason: "Owner working long hours",
    owner: "Nasreen Sultana",
    status: "Temporarily Shared"
  },
  {
    id: 6,
    petName: "Bruno",
    breed: "Labrador",
    location: "Comilla",
    duration: "Full weekend",
    reason: "Owner traveling to village",
    owner: "Rafiq Ahmed",
    status: "Available"
  }
];

export const vets: Veterinarian[] = [
  {
    id: 1,
    name: "Dr. Mahmuda Islam",
    specialty: "General Pet Care",
    location: "Dhanmondi, Dhaka",
    experience: "8 years",
    rating: 4.9,
    consultation: "৳800",
    availability: "Mon-Fri 9AM-6PM",
    description: "Experienced veterinarian specializing in cats and dogs"
  },
  {
    id: 2,
    name: "Dr. Rafiqul Alam",
    specialty: "Pet Surgery",
    location: "Gulshan, Dhaka",
    experience: "12 years",
    rating: 4.8,
    consultation: "৳1200",
    availability: "Tue-Sat 10AM-5PM",
    description: "Expert in advanced pet surgical procedures"
  },
  {
    id: 3,
    name: "Dr. Fatema Khatun",
    specialty: "Pet Dermatology",
    location: "Mymensingh",
    experience: "6 years",
    rating: 4.7,
    consultation: "৳600",
    availability: "Mon-Wed-Fri 2PM-8PM",
    description: "Specialist in pet skin and allergy treatments"
  },
  {
    id: 4,
    name: "Dr. Habibur Rahman",
    specialty: "Emergency Care",
    location: "Sylhet",
    experience: "10 years",
    rating: 4.9,
    consultation: "৳1000",
    availability: "24/7 Emergency",
    description: "Available for urgent pet medical emergencies"
  },
  {
    id: 5,
    name: "Dr. Nasir Ahmed",
    specialty: "Pet Nutrition",
    location: "Chittagong",
    experience: "5 years",
    rating: 4.6,
    consultation: "৳500",
    availability: "Thu-Sun 11AM-4PM",
    description: "Expert in pet diet and nutritional planning"
  },
  {
    id: 6,
    name: "Dr. Salma Begum",
    specialty: "Behavioral Therapy",
    location: "Rangpur",
    experience: "7 years",
    rating: 4.8,
    consultation: "৳700",
    availability: "Mon-Fri 3PM-7PM",
    description: "Specialist in pet behavioral issues and training"
  }
];

export const products: Product[] = [
    {
      id: 1,
      name: "Premium Dog Food",
      brand: "Pedigree",
      category: "Food",
      price: "৳2,500",
      originalPrice: "৳3,000",
      rating: 4.8,
      description: "Nutritious dry food for adult dogs, 10kg pack",
      inStock: true,
      features: ["High Protein", "Natural Ingredients", "Vitamin Enriched", "Grain Free"]
    },
    {
      id: 2,
      name: "Cat Litter Box",
      brand: "Pet Zone",
      category: "Accessories",
      price: "৳1,200",
      originalPrice: "৳1,500",
      rating: 4.6,
      description: "Easy-clean litter box with cover and scoop",
      inStock: true,
      features: ["Easy Clean", "Odor Control", "Non-Slip Base", "Durable Plastic"]
    },
    {
      id: 3,
      name: "Dog Collar & Leash Set",
      brand: "Pawsome",
      category: "Accessories",
      price: "৳800",
      originalPrice: "৳1,000",
      rating: 4.7,
      description: "Adjustable collar with matching leash, multiple colors",
      inStock: true,
      features: ["Adjustable", "Reflective Strip", "Comfortable Padding", "Weather Resistant"]
    },
    {
      id: 4,
      name: "Cat Wet Food Variety",
      brand: "Whiskas",
      category: "Food",
      price: "৳450",
      originalPrice: "৳500",
      rating: 4.9,
      description: "12-pack wet food variety for cats, different flavors",
      inStock: false,
      features: ["Variety Pack", "High Moisture", "Taurine Added", "Delicious Flavors"]
    },
    {
      id: 5,
      name: "Pet Grooming Kit",
      brand: "FurCare",
      category: "Grooming",
      price: "৳1,800",
      originalPrice: "৳2,200",
      rating: 4.5,
      description: "Complete grooming set with brush, nail clipper, shampoo",
      inStock: true,
      features: ["Complete Set", "Ergonomic Design", "Safe Materials", "Easy to Use"]
    },
    {
      id: 6,
      name: "Interactive Cat Toy",
      brand: "PlayPet",
      category: "Toys",
      price: "৳650",
      originalPrice: "৳750",
      rating: 4.4,
      description: "Electronic toy mouse with motion sensor",
      inStock: true,
      features: ["Motion Sensor", "Durable", "Battery Operated", "Engaging"]
    },
    {
      id: 7,
      name: "Dog Training Treats",
      brand: "GoodBoy",
      category: "Food",
      price: "৳300",
      originalPrice: "৳350",
      rating: 4.7,
      description: "Healthy training treats, chicken flavor, 500g",
      inStock: true,
      features: ["Chicken Flavor", "Low Calorie", "Small Size", "Digestible"]
    },
    {
      id: 8,
      name: "Pet Carrier Bag",
      brand: "TravelPet",
      category: "Accessories",
      price: "৳2,200",
      originalPrice: "৳2,800",
      rating: 4.8,
      description: "Comfortable travel carrier for small to medium pets",
      inStock: true,
      features: ["Ventilated", "Comfortable", "Durable", "Portable"]
    }
  ];
