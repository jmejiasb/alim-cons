import type { CartState, CartAction } from '@/types/cart';

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.some(
        (item) => item.ebook.id === action.payload.id
      );
      
      if (exists) {
        return state;
      }
      
      return {
        ...state,
        items: [
          ...state.items,
          {
            ebook: action.payload,
            quantity: 1,
            addedAt: new Date()
          }
        ]
      };
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.ebook.id !== action.payload)
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };
    
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        isOpen: !state.isOpen
      };
    
    case 'SET_DRAWER':
      return {
        ...state,
        isOpen: action.payload
      };
    
    default:
      return state;
  }
}