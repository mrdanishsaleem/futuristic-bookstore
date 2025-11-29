'use client'

import { useState } from 'react'
import { books } from '@/lib/data/books'
import BookCard from './BookCard'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function NewArrivals() {
  // Get the 10 most recent books (by ID, simulating newest)
  const newBooks = [...books].slice(-10).reverse()
  const [currentIndex, setCurrentIndex] = useState(0)

  const booksToShow = newBooks.slice(currentIndex, currentIndex + 4)

  const next = () => {
    setCurrentIndex((prev) => (prev + 4 >= newBooks.length ? 0 : prev + 4))
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 4 < 0 ? Math.max(0, newBooks.length - 4) : prev - 4))
  }

  if (newBooks.length === 0) return null

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">New Arrivals</span>
          </h2>
          <p className="text-gray-400 text-lg">Discover the latest additions to our collection</p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {booksToShow.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {newBooks.length > 4 && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass-strong p-3 rounded-full hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass-strong p-3 rounded-full hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

