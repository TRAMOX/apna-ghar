'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ReactLenis from 'lenis/react'

const subjectsData = [
  {
    id: 1,
    title: 'Mathematics',
    description: 'Master problem-solving with comprehensive math lessons',
    topics: '200+ Topics',
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1920&h=1080&fit=crop&q=80',
    ],
    stats: {
      label: 'FACTS & NUMBERS',
      percentage: '95%',
      text: 'Students improved their grades with our platform.'
    },
    review: {
      label: 'STUDENT STORIES',
      quote: 'Apna Ghar helped me excel in my board exams with amazing study materials!',
      student: 'Priya Sharma',
      class: 'Class 10 Student'
    }
  },
  {
    id: 2,
    title: 'Science',
    description: 'Explore physics, chemistry, and biology concepts',
    topics: '180+ Topics',
    images: [
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&h=1080&fit=crop&q=80',
    ],
    stats: {
      label: 'FACTS & NUMBERS',
      percentage: '92%',
      text: 'Students found science experiments engaging and easy.'
    },
    review: {
      label: 'STUDENT STORIES',
      quote: 'The interactive science lessons made complex topics simple and fun to learn!',
      student: 'Arjun Patel',
      class: 'Class 9 Student'
    }
  },
  {
    id: 3,
    title: 'English',
    description: 'Improve grammar, vocabulary, and comprehension',
    topics: '150+ Topics',
    images: [
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&h=1080&fit=crop&q=80',
    ],
    stats: {
      label: 'FACTS & NUMBERS',
      percentage: '88%',
      text: 'Students improved their English communication skills.'
    },
    review: {
      label: 'STUDENT STORIES',
      quote: 'My English vocabulary and writing skills improved tremendously!',
      student: 'Anjali Singh',
      class: 'Class 8 Student'
    }
  },
  {
    id: 4,
    title: 'Hindi',
    description: 'Learn Hindi language and literature',
    topics: '120+ Topics',
    images: [
      'https://images.unsplash.com/photo-1509715513011-e394f0cb20c4?w=1920&h=1080&fit=crop&q=80',
    ],
    stats: {
      label: 'FACTS & NUMBERS',
      percentage: '90%',
      text: 'Students mastered Hindi grammar and literature.'
    },
    review: {
      label: 'STUDENT STORIES',
      quote: 'Hindi literature became my favorite subject thanks to Apna Ghar!',
      student: 'Rohan Verma',
      class: 'Class 11 Student'
    }
  },
  {
    id: 5,
    title: 'Social Science',
    description: 'Understand history, geography, and civics',
    topics: '160+ Topics',
    images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80',
    ],
    stats: {
      label: 'FACTS & NUMBERS',
      percentage: '93%',
      text: 'Students aced their social studies exams.'
    },
    review: {
      label: 'STUDENT STORIES',
      quote: 'History lessons with visual maps made learning so much easier!',
      student: 'Sneha Reddy',
      class: 'Class 12 Student'
    }
  },
  {
    id: 6,
    title: 'Computer Science',
    description: 'Learn programming and digital literacy',
    topics: '140+ Topics',
    images: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop&q=80',
    ],
    stats: {
      label: 'FACTS & NUMBERS',
      percentage: '96%',
      text: 'Students built their first programs successfully.'
    },
    review: {
      label: 'STUDENT STORIES',
      quote: 'Coding became fun and easy with step-by-step video tutorials!',
      student: 'Karthik Menon',
      class: 'Class 11 Student'
    }
  },
]

const Card = ({ subject, i, progress, range, targetScale }: any) => {
  const container = useRef(null)
  const scale = useTransform(progress, range, [1, targetScale])
  
  // Random image selection on component mount
  const [selectedImage, setSelectedImage] = React.useState('')
  
  React.useEffect(() => {
    const randomImage = subject.images[Math.floor(Math.random() * subject.images.length)]
    setSelectedImage(randomImage)
  }, [subject.images])

  return (
    <div ref={container} className='h-screen flex items-center justify-center sticky top-0 px-4 md:px-8'>
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className='relative w-full max-w-[95vw] h-[90vh] rounded-3xl overflow-hidden origin-top shadow-2xl'
      >
        <div className='relative w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 p-4'>
          {/* Left Section - Main Subject Card with rounded corners and gap */}
          <Link href={`/subject/${subject.id}`} className='relative group cursor-pointer overflow-hidden rounded-2xl'>
            <div className='relative w-full h-full'>
              {/* Background Image */}
              <div className='absolute inset-0'>
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt={subject.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-700'
                    priority={i < 2}
                  />
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent'></div>
              </div>

              {/* Content */}
              <div className='relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 z-10'>
                {/* Topics Badge */}
                <div className='mb-6'>
                  <span className='inline-block bg-purple-600 text-white text-sm md:text-base font-bold px-6 py-3 rounded-full shadow-lg'>
                    {subject.topics}
                  </span>
                </div>

                {/* Title */}
                <h3 className='text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight'>
                  {subject.title}
                </h3>

                {/* Description */}
                <p className='text-gray-200 text-base md:text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed'>
                  {subject.description}
                </p>

                {/* Explore Button */}
                <div className='flex items-center gap-3 text-white text-base md:text-lg font-semibold group-hover:gap-5 transition-all duration-300'>
                  <span>Explore lessons</span>
                  <svg className='w-5 h-5 md:w-6 md:h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Right Section - Stats & Review with gap */}
          <div className='relative flex flex-col gap-4'>
            {/* Stats Section (Improved Yellow Card) */}
            <div className='flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden rounded-2xl shadow-xl'>
              {/* Animated decorative blobs */}
              <div className='absolute top-0 right-0 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl animate-pulse'></div>
              <div className='absolute bottom-0 left-0 w-48 h-48 bg-yellow-600/20 rounded-full blur-2xl'></div>
              <div className='absolute top-1/2 left-1/2 w-32 h-32 bg-orange-400/20 rounded-full blur-xl'></div>
              
              <div className='max-w-xl relative z-10'>
                <p className='text-dark_black/60 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] mb-6 animate-fadeIn'>
                  {subject.stats.label}
                </p>
                <h2 className='text-7xl md:text-8xl lg:text-9xl font-black text-dark_black mb-4 leading-none drop-shadow-sm'>
                  {subject.stats.percentage}
                </h2>
                <p className='text-dark_black/90 text-lg md:text-xl lg:text-2xl font-bold leading-snug'>
                  {subject.stats.text}
                </p>
              </div>
            </div>

            {/* Review Section (Improved Dark Card) */}
            <div className='flex-1 p-6 md:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f1729] relative overflow-hidden rounded-2xl shadow-xl border border-purple-500/20'>
              {/* Animated decorative elements */}
              <div className='absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl animate-pulse'></div>
              <div className='absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl'></div>
              <div className='absolute top-1/3 right-1/3 w-24 h-24 bg-pink-600/10 rounded-full blur-2xl'></div>
              
              <div className='max-w-xl relative z-10'>
                <p className='text-purple-400 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] mb-4 flex items-center gap-2'>
                  <span className='w-8 h-0.5 bg-purple-400'></span>
                  {subject.review.label}
                </p>
                <blockquote className='text-white text-base md:text-lg lg:text-xl font-medium mb-6 leading-relaxed relative'>
                  <span className='text-purple-400 text-4xl md:text-5xl absolute -top-2 -left-2 opacity-30'>&ldquo;</span>
                  <span className='relative z-10 block'>{subject.review.quote}</span>
                </blockquote>
                <div className='border-t border-purple-500/20 pt-5 mt-auto flex items-center gap-4'>
                  <div className='w-16 h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg'>
                    {subject.review.student.charAt(0)}
                  </div>
                  <div className='flex-1 min-w-0 overflow-hidden'>
                    <p className='text-white font-bold text-base md:text-lg lg:text-xl mb-1'>{subject.review.student}</p>
                    <p className='text-purple-300 text-xs md:text-sm'>{subject.review.class}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Subjects() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <ReactLenis root>
      <section id="subjects" className='relative bg-[#0a0a0f]'>
        {/* Header */}
        <div className='container py-24 text-center'>
          <h2 className='text-white text-5xl font-bold mb-4'>
            Popular <span className='text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text'>Subjects</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Access quality educational content across all major subjects. Each subject 
            includes video lessons, notes, and practice questions.
          </p>
        </div>

        {/* Cards Stack */}
        <div ref={container} className='relative'>
          {subjectsData.map((subject, i) => {
            const targetScale = 1 - ((subjectsData.length - i) * 0.05)
            return (
              <Card
                key={subject.id}
                subject={subject}
                i={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            )
          })}
        </div>
      </section>
    </ReactLenis>
  )
}

export default Subjects
