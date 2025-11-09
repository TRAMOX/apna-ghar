'use client'
import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import SingleClass from './SingleClass'
import { classesData } from '@/data/classesData'
import AnimatedBackground from '../../shared/AnimatedBackground'

function Classes() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  // Infinite scroll animation
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollSpeed = 1 // pixels per frame

    const animate = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed

        // Reset to start when reaching the end (seamless loop)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId)
    }

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Duplicate items for seamless infinite scroll
  const duplicatedClasses = [...classesData, ...classesData]

  return (
    <section id="classes" className='relative py-16 md:py-24 overflow-hidden'>
      <AnimatedBackground variant="section" />
      <div className='container relative z-10'>
        <motion.div
          {...bottomAnimation}
          className='flex flex-col gap-4 text-center mb-12'>
          <h2 className='font-medium text-dark_black dark:text-white'>
            Choose Your <span className='instrument-font italic text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text'>Class</span>
          </h2>
          <p className='max-w-38 mx-auto text-dark_black/60 dark:text-white/60'>
            Select your grade to access comprehensive study materials, video lessons, 
            and practice exercises tailored for your curriculum.
          </p>
        </motion.div>

        <div className='relative'>
          {/* Scrollable Container - Infinite Loop */}
          <div 
            ref={scrollContainerRef}
            className='flex gap-6 overflow-x-auto scrollbar-hide pb-4'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {duplicatedClasses.map((classItem, index) => (
              <div key={`${classItem.classNumber}-${index}`} className='flex-shrink-0 w-[200px]'>
                <SingleClass 
                  item={{
                    id: classItem.classNumber,
                    class: classItem.className,
                    subjects: classItem.subjects.length,
                    content: `${classItem.totalContent}+ Videos`
                  }} 
                  index={index} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Classes
