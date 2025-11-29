'use client'

import { useState, useMemo } from 'react'
import { books } from '@/lib/data/books'
import BookCard from '@/components/BookCard'
import { Search, Filter, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const genres = [
  'All Genres',
  'Science Fiction',
  'Fantasy',
  'Mystery',
  'Romance',
  'Thriller',
  'Non-Fiction',
  'Biography',
  'History',
  'Horror',
]

const formats = ['All Formats', 'Hardcover', 'Paperback', 'Ebook', 'Audiobook']

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('All Genres')
  const [selectedFormat, setSelectedFormat] = useState('All Formats')
  const [priceRange, setPriceRange] = useState([0, 200])
  const [minRating, setMinRating] = useState(0)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredBooks = useMemo(() => {
    let filtered = [...books]

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Genre filter
    if (selectedGenre !== 'All Genres') {
      filtered = filtered.filter((book) => book.genre === selectedGenre)
    }

    // Format filter
    if (selectedFormat !== 'All Formats') {
      filtered = filtered.filter((book) => book.format.toLowerCase() === selectedFormat.toLowerCase())
    }

    // Price filter
    filtered = filtered.filter((book) => book.price >= priceRange[0] && book.price <= priceRange[1])

    // Rating filter
    filtered = filtered.filter((book) => book.rating >= minRating)

    return filtered
  }, [searchQuery, selectedGenre, selectedFormat, priceRange, minRating])

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Shop</span>
          </h1>
          <p className="text-gray-400 text-lg">Discover your next favorite book</p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search books, authors..."
                className="w-full pl-12 pr-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-neon-cyan"
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-6 py-3 glass rounded-lg text-white hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all flex items-center space-x-2"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters Panel */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="glass-strong rounded-lg p-6 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-orbitron text-xl font-semibold text-cyber-neon-cyan">Filters</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 hover:bg-cyber-neon-pink rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Genre */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
                    <select
                      value={selectedGenre}
                      onChange={(e) => setSelectedGenre(e.target.value)}
                      className="w-full px-4 py-2 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-neon-cyan"
                    >
                      {genres.map((genre) => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Format */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Format</label>
                    <select
                      value={selectedFormat}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className="w-full px-4 py-2 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-neon-cyan"
                    >
                      {formats.map((format) => (
                        <option key={format} value={format}>
                          {format}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Price: ${priceRange[0]} - ${priceRange[1]}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        max="200"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full px-4 py-2 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-neon-cyan"
                      />
                      <input
                        type="number"
                        min="0"
                        max="200"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full px-4 py-2 glass rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-neon-cyan"
                      />
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Min Rating: {minRating.toFixed(1)} ⭐
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.5"
                      value={minRating}
                      onChange={(e) => setMinRating(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-400">
          Showing {filteredBooks.length} of {books.length} books
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No books found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

