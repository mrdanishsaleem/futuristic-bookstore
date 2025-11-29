'use client'

import { useCartStore } from '@/lib/store/cart-store'
import { motion } from 'framer-motion'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore()

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here. Cart items are stored in localStorage.')
    // In a real app, you'd redirect to a payment page
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
          <h2 className="font-orbitron text-3xl font-bold mb-4 text-gray-400">Your cart is empty</h2>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple rounded-lg text-cyber-darker font-bold hover:shadow-neon-cyan transition-all"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-8">
          <span className="gradient-text">Shopping Cart</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.book_id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-lg p-6 flex flex-col sm:flex-row gap-4"
              >
                {item.image_url && (
                  <div className="relative w-24 h-32 flex-shrink-0">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="96px"
                    />
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="font-orbitron text-xl font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{item.author}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.book_id, item.quantity - 1)}
                        className="p-2 glass rounded-lg hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.book_id, item.quantity + 1)}
                        className="p-2 glass rounded-lg hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <div className="text-cyber-neon-green font-bold text-lg">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                      {item.quantity > 1 && (
                        <div className="text-gray-500 text-sm">
                          {formatPrice(item.price)} each
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.book_id)}
                  className="p-2 glass rounded-lg hover:bg-red-500 hover:text-white transition-all self-start sm:self-auto"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-strong rounded-lg p-6 sticky top-24"
            >
              <h2 className="font-orbitron text-2xl font-bold mb-6 text-cyber-neon-cyan">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>{formatPrice(getTotal())}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-cyber-neon-green">
                    {getTotal() >= 50 ? 'Free' : '$5.99'}
                  </span>
                </div>
                <div className="border-t border-cyber-glassBorder pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-cyber-neon-green">
                      {formatPrice(getTotal() + (getTotal() >= 50 ? 0 : 5.99))}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple rounded-lg text-cyber-darker font-bold text-lg hover:shadow-neon-cyan transition-all mb-4"
              >
                Proceed to Checkout
              </button>

              <Link
                href="/shop"
                className="block w-full px-8 py-4 glass rounded-lg text-white text-center hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

