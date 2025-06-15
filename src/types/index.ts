
export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  location: string;
  description: string;
  owner: string;
  type: "dog" | "cat";
}

export interface SharingOffer {
  id: number;
  petName: string;
  breed: string;
  location: string;
  duration: string;
  reason: string;
  owner: string;
  status: "Available" | "Temporarily Shared";
}

export interface Veterinarian {
  id: number;
  name: string;
  specialty: string;
  location: string;
  experience: string;
  rating: number;
  consultation: string;
  availability: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: string;
  originalPrice: string;
  rating: number;
  description: string;
  inStock: boolean;
  features: string[];
}
