import { Ebook } from '@/types/ebook'; // or wherever your Ebook type lives

export interface CartItem {
  ebook: Ebook;
  quantity: number;
  addedAt: Date;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: Ebook }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_DRAWER' }
  | { type: 'SET_DRAWER'; payload: boolean };