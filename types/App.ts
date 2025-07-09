export interface App {
  id: string;
  name: string;
  package?: string;
  description: string;
  version: string;
  icon: string;
  screenshots: string[];
  download: string;
  category: string;
  section?: string;
  features: string[];
  rating?: number;
  downloads?: string;
  developer?: string;
} 