'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Sparkles, Rocket, Brain, Heart, Zap } from 'lucide-react'

const genres = [
  { name: 'Science Fiction', icon: Rocket, color: 'cyan', count: 1250 },
  { name: 'Fantasy', icon: Sparkles, color: 'purple', count: 980 },
  { name: 'Mystery', icon: Brain, color: 'pink', count: 750 },
  { name: 'Romance', icon: Heart, color: 'pink', count: 1100 },
  { name: 'Thriller', icon: Zap, color: 'yellow', count: 890 },
  { name: 'Non-Fiction', icon: BookOpen, color: 'green', count: 1500 },
]

export default function FeaturedGenres() {
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
            <span className="gradient-text">Explore Genres</span>
          </h2>
          <p className="text-gray-400 text-lg">Find your next favorite read</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre, index) => {
            const Icon = genre.icon
            return (
              <motion.div
                key={genre.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/shop?genre=${genre.name.toLowerCase().replace(' ', '-')}`}
                  className="group glass rounded-lg p-6 text-center hover:shadow-neon-cyan transition-all duration-300 block"
                >
                  <div className={`inline-flex p-4 rounded-full mb-4 group-hover:scale-110 transition-transform ${
                    genre.color === 'cyan' ? 'bg-cyber-neon-cyan/20' :
                    genre.color === 'purple' ? 'bg-cyber-neon-purple/20' :
                    genre.color === 'pink' ? 'bg-cyber-neon-pink/20' :
                    genre.color === 'yellow' ? 'bg-cyber-neon-yellow/20' :
                    'bg-cyber-neon-green/20'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      genre.color === 'cyan' ? 'text-cyber-neon-cyan' :
                      genre.color === 'purple' ? 'text-cyber-neon-purple' :
                      genre.color === 'pink' ? 'text-cyber-neon-pink' :
                      genre.color === 'yellow' ? 'text-cyber-neon-yellow' :
                      'text-cyber-neon-green'
                    }`} />
                  </div>
                  <h3 className="font-orbitron font-semibold text-white mb-2 group-hover:text-cyber-neon-cyan transition-colors">
                    {genre.name}
                  </h3>
                  <p className="text-sm text-gray-400">{genre.count} books</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

