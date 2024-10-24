export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  variants: Variant[];
  brand: Brand;
  categories: string[];
}

export interface Variant {
  id: number;
  color: string;
  size: string;
  stock: number;
  image: string;
}

interface Brand {
  id: number;
  name: string;
}