'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Menu, X, BookOpen } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart-store'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const itemCount = useCartStore((state) => state.getItemCount())

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-cyber-glassBorder">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <BookOpen className="w-8 h-8 text-cyber-neon-cyan group-hover:text-cyber-neon-pink transition-colors" />
            <span className="font-orbitron text-2xl font-bold gradient-text">
              CYBERBOOKS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-cyber-neon-cyan transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-white hover:text-cyber-neon-cyan transition-colors font-medium"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-cyber-neon-cyan transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-cyber-neon-cyan transition-colors font-medium"
            >
              Contact
            </Link>

            {/* Cart */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-cyber-glassBorder">
              <Link
                href="/cart"
                className="relative p-2 glass rounded-lg hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-cyber-neon-pink text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 glass rounded-lg hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass-strong rounded-lg p-4 space-y-3"
            >
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-cyber-neon-cyan transition-colors py-2"
              >
                Home
              </Link>
              <Link
                href="/shop"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-cyber-neon-cyan transition-colors py-2"
              >
                Shop
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-cyber-neon-cyan transition-colors py-2"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-cyber-neon-cyan transition-colors py-2"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-cyber-glassBorder space-y-3">
                <Link
                  href="/cart"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 px-4 py-2 glass rounded-lg text-white hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                  {itemCount > 0 && (
                    <span className="bg-cyber-neon-pink text-white text-xs font-bold rounded-full px-2 py-1">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

