'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, LogIn, UserPlus, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setMessage('')

    // Simulate authentication
    setTimeout(() => {
      if (isLogin) {
        setMessage('Sign in functionality would be implemented here (static site demo)')
      } else {
        setMessage('Account created! (Static site demo - no actual account created)')
        setEmail('')
        setPassword('')
      }
      setIsLoading(false)
    }, 1000)
  }

  const handleGoogleSignIn = () => {
    alert('OAuth sign-in would be implemented here (static site demo)')
  }

  const handleAppleSignIn = () => {
    alert('OAuth sign-in would be implemented here (static site demo)')
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h1 className="font-orbitron text-4xl font-bold mb-4">
              <span className="gradient-text">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </span>
            </h1>
            <p className="text-gray-400">
              {isLogin
                ? 'Sign in to continue your reading journey'
                : 'Join us and discover your next favorite book'}
            </p>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 glass rounded-lg p-4 flex items-center space-x-2 text-red-400"
            >
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </motion.div>
          )}

          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 glass rounded-lg p-4 flex items-center space-x-2 text-cyber-neon-green"
            >
              <AlertCircle className="w-5 h-5" />
              <span>{message}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-neon-cyan"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  className="w-full pl-12 pr-4 py-3 glass rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyber-neon-cyan"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyber-neon-cyan to-cyber-neon-purple rounded-lg text-cyber-darker font-bold text-lg flex items-center justify-center space-x-2 hover:shadow-neon-cyan transition-all disabled:opacity-50"
            >
              {isLogin ? (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>{isLoading ? 'Signing in...' : 'Sign In'}</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-5 h-5" />
                  <span>{isLoading ? 'Creating account...' : 'Sign Up'}</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cyber-glassBorder" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 glass text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                onClick={handleGoogleSignIn}
                className="px-4 py-3 glass rounded-lg text-white hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all flex items-center justify-center space-x-2"
              >
                <span>Google</span>
              </button>
              <button
                onClick={handleAppleSignIn}
                className="px-4 py-3 glass rounded-lg text-white hover:bg-cyber-neon-cyan hover:text-cyber-darker transition-all flex items-center justify-center space-x-2"
              >
                <span>Apple</span>
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin)
                setError('')
                setMessage('')
              }}
              className="text-cyber-neon-cyan hover:text-cyber-neon-pink transition-colors"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

