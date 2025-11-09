'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import StarRating from '../../shared/star-rating'
import { AuroraText } from '../../ui/aurora-text'

function HeroSection() {
  const ref = useRef(null)
   const [avatarList, setAvatarList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()        
        setAvatarList(data)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section className="relative overflow-hidden">
      {/* Animated Curved Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
        {/* Animated SVG Curve */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M0,400 Q360,100 720,400 T1440,400 L1440,800 L0,800 Z"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
            className="drop-shadow-lg"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className='relative w-full pt-44 2xl:pb-20 pb-10'>
        <div className='container relative z-10'>
          <div ref={ref} className='flex flex-col gap-8'>
            {/* ---------------- heading text --------------- */}
            <motion.div
              {...bottomAnimation}
              className='relative flex flex-col text-center items-center gap-4'>
              <h1 className='font-medium w-full text-dark_black dark:text-white'>
                Your Complete{' '}
                <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]} speed={1.5}>
                  Learning Journey
                </AuroraText>
                <span className='instrument-font italic font-normal text-dark_black/70 dark:text-white/70'>
                  {' '}
                  from Class 1 to 12
                </span>
              </h1>
              <p className='max-w-38 text-dark_black/60 dark:text-white/60'>
                Welcome to Apna Ghar - Your trusted educational platform offering comprehensive 
                study materials, video lessons, practice tests, and interactive content for 
                students from Class 1 to 12.
              </p>
            </motion.div>

            <motion.div
              {...bottomAnimation}
              className='flex flex-col items-center justify-center gap-4'>
              <div className='flex flex-col items-center justify-center gap-8 w-full sm:flex-row'>
                {/* ----------- Get started Link -------------- */}
                <Link
                  href='/contact'
                  className='group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex flex-row justify-between items-center py-3 px-6 rounded-full max-w-64 w-full md:py-3 border-2 border-transparent transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105'>
                  <span className='flex text-start transform transition-transform duration-200 ease-in-out group-hover:translate-x-24'>
                    Start Learning
                  </span>
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-44 group-hover:rotate-45'>
                    <rect
                      width='40'
                      height='40'
                      rx='20'
                      className='fill-white/90'
                    />
                    <path
                      d='M15.832 15.3334H24.1654V23.6667'
                      className='stroke-purple-600'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15.832 23.6667L24.1654 15.3334'
                      className='stroke-purple-600'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>

                {/* --------------- avatar division -------------- */}
                <div className='flex items-center gap-7'>
                  <ul className='avatar flex flex-row items-center'>
                    {avatarList?.avatarList?.map((items:any, index:any) => (
                      <li key={index} className='-mr-2 z-1 avatar-hover:ml-2'>
                        <Image
                          src={items.image}
                          alt='Image'
                          width={44}
                          height={44}
                          quality={100}
                          className='rounded-full border-2 border-white'
                          unoptimized={true}
                        />
                      </li>
                    ))}
                  </ul>
                  {/* -------------- Star rating division --------------- */}
                  <div className='gap-1 flex flex-col'>
                    <div>
                      <StarRating count={4} color='#F59E0B' />
                    </div>
                    <p className='text-sm font-normal text-dark_black/60 dark:text-white/60'>
                      Trusted by 5000+ students
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
