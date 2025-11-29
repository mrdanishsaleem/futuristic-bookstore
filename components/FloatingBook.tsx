'use client'

import { motion } from 'framer-motion'

export default function FloatingBook() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex items-center justify-center perspective-1000"
    >
      <motion.div
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 10, -10, 0],
          y: [0, -20, 0],
        }}
        transition={{
          rotateY: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
          rotateX: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="relative w-64 h-96 preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Book Front */}
        <div
          className="absolute inset-0 glass-strong rounded-lg border-2 border-cyber-neon-cyan"
          style={{
            transform: 'translateZ(20px)',
            boxShadow: '0 0 40px rgba(0, 240, 255, 0.5), inset 0 0 20px rgba(0, 240, 255, 0.2)',
          }}
        >
          <div className="h-full flex flex-col items-center justify-center p-8">
            <div className="text-6xl mb-4">📚</div>
            <div className="font-orbitron text-xl font-bold text-cyber-neon-cyan text-center">
              CYBER
              <br />
              BOOKS
            </div>
          </div>
        </div>

        {/* Book Spine */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-cyber-neon-cyan to-cyber-neon-purple rounded-lg"
          style={{
            transform: 'rotateY(90deg) translateZ(20px)',
            width: '40px',
            left: '0',
            boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)',
          }}
        />

        {/* Book Pages */}
        <div
          className="absolute inset-0 bg-cyber-light rounded-lg border border-cyber-neon-cyan/30"
          style={{
            transform: 'translateZ(0px)',
            boxShadow: 'inset 0 0 20px rgba(0, 240, 255, 0.1)',
          }}
        >
          <div className="h-full flex items-center justify-center">
            <div className="w-full h-full flex flex-col gap-1 p-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1 bg-gradient-to-r from-transparent via-cyber-neon-cyan/20 to-transparent"
                  style={{ opacity: 1 - i * 0.05 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.3) 0%, transparent 70%)',
            filter: 'blur(20px)',
            transform: 'translateZ(-10px)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}

