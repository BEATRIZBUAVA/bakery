export interface CakeOption {
  nome: string;
  cor: string;
  preco: number;
}

export interface CakeOptions {
  cobertura: CakeOption[];
  recheio: CakeOption[];
  massa: CakeOption[];
}

export interface CakeCustomization {
  cobertura: number;
  recheio: number;
  massa: number;
}

export interface CartItem {
  id: number;
  cobertura: string;
  recheio: string;
  massa: string;
  preco: number;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}
