import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface CartItem {
  book_id: string
  title: string
  author: string
  price: number
  image_url: string | null
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (bookId: string) => void
  updateQuantity: (bookId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existingItem = get().items.find((i) => i.book_id === item.book_id)
        if (existingItem) {
          set({
            items: get().items.map((i) =>
              i.book_id === item.book_id
                ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                : i
            ),
          })
        } else {
          set({
            items: [...get().items, { ...item, quantity: item.quantity || 1 }],
          })
        }
      },
      removeItem: (bookId) => {
        set({
          items: get().items.filter((i) => i.book_id !== bookId),
        })
      },
      updateQuantity: (bookId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(bookId)
          return
        }
        set({
          items: get().items.map((i) =>
            i.book_id === bookId ? { ...i, quantity } : i
          ),
        })
      },
      clearCart: () => {
        set({ items: [] })
      },
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      },
      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: 'cyberpunk-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

