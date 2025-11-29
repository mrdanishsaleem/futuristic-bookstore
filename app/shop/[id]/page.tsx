'use client'

import { useParams } from 'next/navigation'
import { books } from '@/lib/data/books'
import Image from 'next/image'
import { ShoppingCart, Star, ArrowLeft } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart-store'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BookDetailPage() {
  const params = useParams()
  const addItem = useCartStore((state) => state.addItem)
  
  const book = books.find((b) => b.id === params.id)
  const loading = false

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyber-neon-cyan mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-orbitron text-2xl font-bold mb-4 text-gray-400">Book not found</h2>
          <Link
            href="/shop"
            className="inline-block px-6 py-3 glass rounded-lg text-white hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link
          href="/shop"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-cyber-neon-cyan transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Shop</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[2/3] overflow-hidden rounded-lg glass"
          >
            {book.image_url ? (
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-cyber-neon-cyan">
                <span className="text-8xl">📚</span>
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-white">
                {book.title}
              </h1>
              <p className="text-2xl text-gray-400 mb-4">by {book.author}</p>

              {book.rating > 0 && (
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-cyber-neon-yellow fill-cyber-neon-yellow" />
                    <span className="text-white font-semibold">{book.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-500">({book.review_count} reviews)</span>
                </div>
              )}
            </div>

            <div className="glass rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Price</span>
                <span className="text-3xl font-orbitron font-bold text-cyber-neon-green">
                  {formatPrice(book.price)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Format</span>
                <span className="text-white font-semibold capitalize">{book.format}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Genre</span>
                <span className="text-white font-semibold">{book.genre}</span>
              </div>

              {book.pages && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Pages</span>
                  <span className="text-white font-semibold">{book.pages}</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Availability</span>
                <span className={`font-semibold ${book.in_stock ? 'text-cyber-neon-green' : 'text-red-400'}`}>
                  {book.in_stock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {book.description && (
              <div className="glass rounded-lg p-6">
                <h2 className="font-orbitron text-xl font-semibold text-cyber-neon-cyan mb-4">
                  Description
                </h2>
                <p className="text-gray-300 leading-relaxed">{book.description}</p>
              </div>
            )}

            <button
              onClick={() => addItem({
                book_id: book.id,
                title: book.title,
                author: book.author,
                price: book.price,
                image_url: book.image_url,
              })}
              disabled={!book.in_stock}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple rounded-lg text-cyber-darker font-bold text-lg flex items-center justify-center space-x-2 hover:shadow-neon-cyan transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>{book.in_stock ? 'Add to Cart' : 'Out of Stock'}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

