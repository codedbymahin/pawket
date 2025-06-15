
export interface Pet {
  id: number;
  name: string;
  breed: string;
  age: string;
  location: string;
  description: string;
  owner: string;
  type: "dog" | "cat";
  datePosted?: string;
  status?: "Available" | "Lost" | "Found";
  listingType?: "Adoption" | "Lost & Found";
  photo?: string;
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
  age?: string;
  type?: "dog" | "cat";
  datePosted?: string;
  photo?: string;
  description?: string;
  listingType?: "Sharing";
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
  qualifications?: string;
  specializations?: string[];
  contactMethod?: string;
  photo?: string;
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
  image?: string;
  sizes?: string[];
  colors?: string[];
  varieties?: string[];
  includes?: string[];
  ingredients?: string;
  dimensions?: string;
  weight?: string;
  batteryLife?: string;
  deliveryNote?: string;
}

export interface LostFoundListing {
  id: number;
  petName: string;
  type: string;
  status: "Lost" | "Found";
  breed: string;
  lastSeen: string;
  date: string;
  ownerName: string;
  description: string;
  contactInfo: string;
  image: string;
}
