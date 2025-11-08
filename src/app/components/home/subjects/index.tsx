'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SingleSubject from './SingleSubject'

const subjectsData = [
  {
    id: 1,
    title: 'Mathematics',
    description: 'Master problem-solving with comprehensive math lessons',
    icon: '📐',
    topics: '200+ Topics',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Science',
    description: 'Explore physics, chemistry, and biology concepts',
    icon: '🔬',
    topics: '180+ Topics',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'English',
    description: 'Improve grammar, vocabulary, and comprehension',
    icon: '📚',
    topics: '150+ Topics',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 4,
    title: 'Hindi',
    description: 'Learn Hindi language and literature',
    icon: '✍️',
    topics: '120+ Topics',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 5,
    title: 'Social Science',
    description: 'Understand history, geography, and civics',
    icon: '🌍',
    topics: '160+ Topics',
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 6,
    title: 'Computer Science',
    description: 'Learn programming and digital literacy',
    icon: '💻',
    topics: '100+ Topics',
    color: 'from-indigo-500 to-indigo-600'
  },
]

function Subjects() {
  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  return (
    <section className='py-16 md:py-24 bg-gray-50 dark:bg-gray-900'>
      <div className='container'>
        <motion.div
          {...bottomAnimation}
          className='flex flex-col gap-4 text-center mb-12'>
          <h2 className='font-medium'>
            Popular <span className='instrument-font italic'>Subjects</span>
          </h2>
          <p className='max-w-38 mx-auto text-dark_black/60 dark:text-white/60'>
            Access quality educational content across all major subjects. Each subject 
            includes video lessons, notes, and practice questions.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {subjectsData.map((subject, index) => (
            <SingleSubject key={subject.id} subject={subject} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Subjects
