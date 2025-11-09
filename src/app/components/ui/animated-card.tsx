'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-transparent bg-gradient-to-br transition-all duration-300',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </motion.div>
  )
}

export function ShimmerButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50',
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 -z-20 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </button>
  )
}

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  )
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  delay = 0,
}: {
  className?: string
  size?: number
  duration?: number
  delay?: number
}) {
  return (
    <div
      style={
        {
          '--size': size,
          '--duration': duration,
          '--delay': delay,
        } as React.CSSProperties
      }
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--size)*1px)_solid_transparent]',
        '[background:linear-gradient(to_right,#a855f7,#3b82f6,#a855f7)_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,_linear-gradient(#fff_0_0)]',
        'animate-border-beam ![mask-composite:subtract]',
        className
      )}
    />
  )
}
