'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true)
      setEmail('')
      setIsSubmitting(false)
      setTimeout(() => setIsSuccess(false), 5000)
    }, 500)
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex p-4 rounded-full bg-cyber-neon-cyan/20 mb-6">
            <Mail className="w-8 h-8 text-cyber-neon-cyan" />
          </div>

          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Stay in the Loop</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Get exclusive deals, new arrivals, and reading recommendations delivered to your inbox.
          </p>

          {isSuccess ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-lg text-cyber-neon-green"
            >
              <Check className="w-5 h-5" />
              <span>Successfully subscribed!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-neon-cyan"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple rounded-lg text-cyber-darker font-bold hover:shadow-neon-cyan transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

