'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'

const FloatingBook = dynamic(() => import('./FloatingBook'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-cyber-light rounded-lg" />,
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-cyber-neon-cyan" />
              <span className="text-sm text-white">Welcome to 2050</span>
            </motion.div>

            <h1 className="font-orbitron text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">The Future</span>
              <br />
              <span className="text-white">of Reading</span>
              <br />
              <span className="neon-cyan">Starts Here</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl">
              Experience a revolutionary bookstore where cutting-edge technology meets
              an unparalleled selection of books. Browse, discover, and immerse yourself
              in the stories that shape tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="group px-8 py-4 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple rounded-lg text-cyber-darker font-bold text-lg flex items-center justify-center space-x-2 hover:shadow-neon-cyan transition-all"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 glass rounded-lg text-white font-bold text-lg hover:bg-cyber-neon-purple hover:text-white transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-orbitron font-bold neon-cyan">10K+</div>
                <div className="text-sm text-gray-400">Books Available</div>
              </div>
              <div>
                <div className="text-3xl font-orbitron font-bold neon-pink">50K+</div>
                <div className="text-sm text-gray-400">Happy Readers</div>
              </div>
              <div>
                <div className="text-3xl font-orbitron font-bold text-cyber-neon-green">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </motion.div>

          {/* 3D Book */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] hidden lg:block"
          >
            <FloatingBook />
          </motion.div>
          
          {/* Fallback for mobile/SSR */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:hidden flex items-center justify-center"
          >
            <div className="w-64 h-96 glass rounded-lg flex items-center justify-center">
              <span className="text-8xl">📚</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

