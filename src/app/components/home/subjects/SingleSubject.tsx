'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface SubjectProps {
  subject: {
    id: number
    title: string
    description: string
    icon: string
    topics: string
    color: string
    image?: string
  }
  index: number
}

function SingleSubject({ subject, index }: SubjectProps) {
  return (
    <Link href={`/subject/${subject.id}`}>
      <motion.div 
        whileHover={{ scale: 1.05, y: -10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className='group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] hover:shadow-2xl hover:shadow-purple-500/30 transition-shadow duration-500 border border-gray-800/50 hover:border-purple-500/50 cursor-pointer h-[450px]'
      >
        {/* Image Section */}
        {subject.image && (
          <div className='relative h-3/5 w-full overflow-hidden'>
            <Image
              src={subject.image}
              alt={subject.title}
              fill
              className='object-cover group-hover:scale-110 transition-transform duration-700'
              priority={index < 3}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/60 to-transparent'></div>
            
            {/* Icon Badge with Pulse Animation */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className='absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30 text-3xl'
            >
              {subject.icon}
            </motion.div>
            
            {/* Topics Badge */}
            <div className='absolute top-6 right-6'>
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className='text-sm font-bold text-white bg-purple-600/90 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-400/30'
              >
                {subject.topics}
              </motion.span>
            </div>

            {/* Animated Gradient Overlay on Hover */}
            <div className='absolute inset-0 bg-gradient-to-t from-purple-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-blue-600/10 group-hover:to-purple-600/20 transition-all duration-500'></div>
          </div>
        )}
        
        <div className='relative z-10 p-8 flex flex-col gap-3 h-2/5'>
          <h3 className='font-bold text-2xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300'>
            {subject.title}
          </h3>
          <p className='text-gray-400 text-sm leading-relaxed line-clamp-2'>
            {subject.description}
          </p>

          <motion.div 
            className='flex items-center gap-3 text-purple-400 font-medium text-base mt-auto'
            whileHover={{ gap: '1rem' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span>Explore lessons</span>
            <svg className='w-5 h-5 transition-transform duration-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </motion.div>
        </div>

        {/* Border Glow Effect on Hover */}
        <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
          <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-xl'></div>
        </div>
      </motion.div>
    </Link>
  )
}

export default SingleSubject
