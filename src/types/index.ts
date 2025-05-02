export interface Brand {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description?: string;
}

export interface Outlet {
  id: string;
  name: string;
  description: string;
  image: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  mapLink: string;
  rating: number;
  brand: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  timeline: string;
  clientDescription: string;
  challenge: string;
  solution: string;
  approach: string[];
  results: { metric: string; value: string }[];
  images: {
    hero: string;
    content: string[];
    results: string;
  };
  relatedCaseStudies: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  technologies: string[];
  ctaText: string;
  ctaLink: string;
} 