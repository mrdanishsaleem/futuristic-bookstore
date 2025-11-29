'use client'

import { motion } from 'framer-motion'
import { Rocket, Globe, Shield, Heart } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Pushing the boundaries of what a bookstore can be with cutting-edge technology.',
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'Making books accessible to everyone, everywhere, at any time.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and transactions are protected with enterprise-grade security.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love books and are dedicated to sharing that passion with you.',
    },
  ]

  const timeline = [
    { year: '2020', event: 'Founded with a vision to revolutionize online book retail' },
    { year: '2022', event: 'Launched nationwide shipping across the United States' },
    { year: '2024', event: 'Reached 50,000+ happy customers and 10,000+ book titles' },
    { year: '2025', event: 'Introducing AI-powered book recommendations and AR previews' },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-orbitron text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to the bookstore of 2050. We're not just selling books—we're creating
            an experience that combines the timeless joy of reading with the limitless
            possibilities of technology.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-strong rounded-2xl p-8 md:p-12 mb-16"
        >
          <h2 className="font-orbitron text-3xl font-bold mb-6 text-cyber-neon-cyan">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            At Cyberpunk Bookstore, we believe that books are portals to infinite worlds.
            Our mission is to make these portals accessible to everyone through a seamless,
            beautiful, and technologically advanced platform.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We're committed to curating the finest selection of books across all genres,
            providing exceptional customer service, and continuously innovating to enhance
            your reading journey.
          </p>
        </motion.section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="font-orbitron text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Our Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass rounded-lg p-6 text-center hover:shadow-neon-cyan transition-all"
                >
                  <div className="inline-flex p-4 rounded-full bg-cyber-neon-cyan/20 mb-4">
                    <Icon className="w-8 h-8 text-cyber-neon-cyan" />
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="font-orbitron text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">Our Journey</span>
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyber-neon-cyan opacity-30" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative pl-24"
                >
                  <div className="absolute left-6 top-0 w-4 h-4 bg-cyber-neon-cyan rounded-full border-4 border-cyber-darker" />
                  <div className="glass rounded-lg p-6">
                    <div className="font-orbitron text-2xl font-bold text-cyber-neon-cyan mb-2">
                      {item.year}
                    </div>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-strong rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="font-orbitron text-3xl font-bold mb-6 text-cyber-neon-cyan">
            Nationwide U.S. Shipping
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            We ship to all 50 states with free shipping on orders over $50.
          </p>
          <p className="text-lg text-gray-300">
            Standard shipping: 5-7 business days | Express shipping: 2-3 business days
          </p>
        </motion.section>
      </div>
    </div>
  )
}

