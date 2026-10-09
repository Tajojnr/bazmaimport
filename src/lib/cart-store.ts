import { create } from 'zustand'

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, delta: number) => void
  toggleCart: () => void
  closeCart: () => void
  clearCart: () => void
  totalPrice: () => number
  totalItems: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (item) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isOpen: true,
        }
      }
      return { items: [...state.items, { ...item, quantity: 1 }], isOpen: true }
    })
  },
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  updateQuantity: (id, delta) =>
    set((state) => ({
      items: state.items
        .map((i) => {
          if (i.id === id) {
            const newQty = i.quantity + delta
            return newQty > 0 ? { ...i, quantity: newQty } : null
          }
          return i
        })
        .filter(Boolean) as CartItem[],
    })),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCart: () => set({ isOpen: false }),
  clearCart: () => set({ items: [], isOpen: false }),
  totalPrice: () =>
    get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
}))