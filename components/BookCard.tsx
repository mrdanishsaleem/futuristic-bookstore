'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart-store'
import { formatPrice } from '@/lib/utils'
import { useState } from 'react'

interface BookCardProps {
  book: {
    id: string
    title: string
    author: string
    price: number
    image_url: string | null
    rating: number
    review_count: number
    genre: string
  }
}

export default function BookCard({ book }: BookCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      book_id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image_url: book.image_url,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <Link href={`/shop/${book.id}`}>
        <div className="glass rounded-lg overflow-hidden card-3d h-full flex flex-col hover:shadow-neon-cyan transition-all duration-300">
          {/* Image */}
          <div className="relative aspect-[2/3] overflow-hidden bg-cyber-light">
            {book.image_url ? (
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-cyber-neon-cyan">
                <span className="text-4xl">📚</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Rating Badge */}
            {book.rating > 0 && (
              <div className="absolute top-2 right-2 glass-strong px-2 py-1 rounded-full flex items-center space-x-1 text-xs">
                <Star className="w-3 h-3 text-cyber-neon-yellow fill-cyber-neon-yellow" />
                <span className="text-white font-semibold">{book.rating.toFixed(1)}</span>
              </div>
            )}

            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-strong px-4 py-2 rounded-lg flex items-center space-x-2 text-white hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all opacity-0 group-hover:opacity-100"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Add to Cart</span>
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-orbitron text-lg font-semibold text-white mb-1 line-clamp-2 group-hover:text-cyber-neon-cyan transition-colors">
              {book.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2 line-clamp-1">{book.author}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-cyber-neon-green font-bold text-lg">
                {formatPrice(book.price)}
              </span>
              <span className="text-xs text-gray-500 uppercase">{book.genre}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

