'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface ClassItemProps {
  item: {
    id: number
    class: string
    subjects: number
    content: string
  }
  index: number
}

function SingleClass({ item, index }: ClassItemProps) {
  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.6, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
    viewport: { once: true },
  }

  return (
    <motion.div {...bottomAnimation}>
      <Link href={`/class/${item.id}`}>
        <motion.div 
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] dark:from-[#1a1a2e] dark:to-[#16213e] p-8 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-800/50 hover:border-purple-500/50 cursor-pointer'
        >
          {/* Animated gradient overlay */}
          <div className='absolute inset-0 bg-gradient-to-br from-purple-600/0 via-blue-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-blue-600/5 group-hover:to-purple-600/10 transition-all duration-500'></div>
          
          <div className='relative z-10 flex flex-col items-center gap-4'>
            {/* Class Number Badge */}
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className='relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/50'
            >
              <span className='text-3xl font-bold text-white'>{item.id}</span>
            </motion.div>
            
            {/* Class Title */}
            <h3 className='font-bold text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300'>
              {item.class}
            </h3>
            
            {/* Info Cards */}
            <div className='flex flex-col gap-2 w-full text-sm text-center'>
              <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500/30 group-hover:bg-purple-600/30 transition-colors duration-300'>
                <svg className='w-4 h-4 text-purple-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                </svg>
                <span className='text-gray-300 font-medium'>
                  {item.subjects} Subjects
                </span>
              </div>
              <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 group-hover:bg-blue-600/30 transition-colors duration-300'>
                <svg className='w-4 h-4 text-blue-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                </svg>
                <span className='text-blue-300 font-semibold'>
                  {item.content}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default SingleClass
