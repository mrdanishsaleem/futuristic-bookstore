'use client'

import { books } from '@/lib/data/books'
import BookCard from './BookCard'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Bestsellers() {
  // Sort by rating and review count, get top 8
  const bestsellers = [...books]
    .sort((a, b) => {
      if (b.rating !== a.rating) return b.rating - a.rating
      return b.review_count - a.review_count
    })
    .slice(0, 8)

  if (bestsellers.length === 0) return null

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Bestsellers</span>
            </h2>
            <p className="text-gray-400 text-lg">Top-rated books loved by readers</p>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center space-x-2 glass px-6 py-3 rounded-lg hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
          >
            <span>View All</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BookCard book={book} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

