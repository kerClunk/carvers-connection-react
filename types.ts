export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  specs?: Record<string, string>;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface NavLink {
  label: string;
  path: string;
}

export enum Currency {
  USD = 'USD',
  CAD = 'CAD'
}