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
    transition: { duration: 0.8, delay: index * 0.1 },
    viewport: { once: true },
  }

  return (
    <motion.div {...bottomAnimation}>
      <Link href={`/class/${item.id}`}>
        <div className='group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple_blue/5 to-purple_blue/10 dark:from-purple_blue/10 dark:to-purple_blue/20 p-6 hover:shadow-lg transition-all duration-300 border border-purple_blue/20 hover:border-purple_blue/40 cursor-pointer'>
          <div className='absolute top-0 right-0 w-20 h-20 bg-purple_blue/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500'></div>
          
          <div className='relative z-10 flex flex-col items-center gap-3'>
            <div className='w-16 h-16 rounded-full bg-purple_blue/20 dark:bg-purple_blue/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
              <span className='text-2xl font-bold text-purple_blue'>{item.id}</span>
            </div>
            
            <h3 className='font-semibold text-lg text-dark_black dark:text-white'>
              {item.class}
            </h3>
            
            <div className='flex flex-col gap-1 text-sm text-center'>
              <p className='text-dark_black/60 dark:text-white/60'>
                {item.subjects} Subjects
              </p>
              <p className='text-purple_blue font-medium'>
                {item.content}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default SingleClass
