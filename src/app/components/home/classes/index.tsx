'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SingleClass from './SingleClass'
import { classesData } from '@/data/classesData'

function Classes() {
  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  return (
    <section className='py-16 md:py-24'>
      <div className='container'>
        <motion.div
          {...bottomAnimation}
          className='flex flex-col gap-4 text-center mb-12'>
          <h2 className='font-medium'>
            Choose Your <span className='instrument-font italic'>Class</span>
          </h2>
          <p className='max-w-38 mx-auto text-dark_black/60 dark:text-white/60'>
            Select your grade to access comprehensive study materials, video lessons, 
            and practice exercises tailored for your curriculum.
          </p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
          {classesData.map((classItem, index) => (
            <SingleClass 
              key={classItem.classNumber} 
              item={{
                id: classItem.classNumber,
                class: classItem.className,
                subjects: classItem.subjects.length,
                content: `${classItem.totalContent}+ Videos`
              }} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes
