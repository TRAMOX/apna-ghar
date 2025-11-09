'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Particles } from '../ui/particles'

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'minimal'
  className?: string
  particles?: boolean
}

export default function AnimatedBackground({ 
  variant = 'hero', 
  className = '',
  particles = true 
}: AnimatedBackgroundProps) {
  const { resolvedTheme } = useTheme()
  const [color, setColor] = useState('#ec4899')

  useEffect(() => {
    setColor(resolvedTheme === 'dark' ? '#ec4899' : '#a855f7')
  }, [resolvedTheme])
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Base Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20" />
        
        {/* Particles */}
        {particles && (
          <Particles
            className="absolute inset-0"
            quantity={150}
            ease={80}
            color={color}
            refresh
          />
        )}
        
        {/* Animated SVG Curve - Pink/Purple */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            d="M0,400 Q360,100 720,400 T1440,400 L1440,800 L0,800 Z"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="3"
            className="drop-shadow-lg"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Additional Floating Blobs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    )
  }

  if (variant === 'section') {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-gray-900/50 dark:via-purple-900/10 dark:to-pink-900/10" />
        
        {/* Particles */}
        {particles && (
          <Particles
            className="absolute inset-0"
            quantity={80}
            ease={80}
            color={color}
            refresh
          />
        )}
        
        {/* Subtle Curve */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-30" 
          viewBox="0 0 1440 600" 
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            d="M0,300 Q360,150 720,300 T1440,300"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="absolute top-10 right-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    )
  }

  // Minimal variant
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-pink-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />
      
      {/* Particles */}
      {particles && (
        <Particles
          className="absolute inset-0"
          quantity={50}
          ease={80}
          color={color}
          refresh
        />
      )}
      
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
