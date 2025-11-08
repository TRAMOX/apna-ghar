'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface SubjectProps {
  subject: {
    id: number
    title: string
    description: string
    icon: string
    topics: string
    color: string
  }
  index: number
}

function SingleSubject({ subject, index }: SubjectProps) {
  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8, delay: index * 0.1 },
    viewport: { once: true },
  }

  return (
    <motion.div {...bottomAnimation}>
      <Link href={`/subject/${subject.id}`}>
        <div className='group relative overflow-hidden rounded-2xl bg-white dark:bg-dark_black p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:border-purple_blue/40 cursor-pointer h-full'>
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${subject.color} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
          
          <div className='relative z-10 flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
              <div className='text-5xl'>{subject.icon}</div>
              <span className='text-sm font-medium text-purple_blue bg-purple_blue/10 px-3 py-1 rounded-full'>
                {subject.topics}
              </span>
            </div>
            
            <div className='flex flex-col gap-2'>
              <h3 className='font-semibold text-xl text-dark_black dark:text-white group-hover:text-purple_blue transition-colors'>
                {subject.title}
              </h3>
              <p className='text-dark_black/60 dark:text-white/60 text-sm'>
                {subject.description}
              </p>
            </div>

            <div className='flex items-center gap-2 text-purple_blue font-medium text-sm mt-2'>
              <span>Explore lessons</span>
              <svg 
                className='w-4 h-4 group-hover:translate-x-2 transition-transform' 
                fill='none' 
                stroke='currentColor' 
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default SingleSubject
