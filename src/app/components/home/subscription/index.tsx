"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Subscription() {
  const [startupPlanList, setstartupPlanList] = useState<any>(null)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setstartupPlanList(data?.startupPlanList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])
  
  return (
    <section id='pricing' className='bg-[#0a0a0f] dark:bg-[#0a0a0f] py-16 md:py-24'>
      <div className='container'>
        <div className='flex flex-col gap-10 md:gap-20'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='max-w-2xl text-center mx-auto'
          >
            <h2 className='text-white'>
              Pick the plan that fits your{' '}
              <span className='instrument-font italic font-normal text-purple-400'>
                learning goals
              </span>
            </h2>
          </motion.div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {startupPlanList?.map((items: any, index: number) => {
              const isYellow = items.plan_bg_color === 'bg-pale-yellow'
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`p-8 md:p-10 rounded-3xl border hover:scale-[1.02] transition-transform duration-300 ${
                    isYellow 
                      ? 'bg-yellow-400 border-yellow-500/30' 
                      : 'bg-gradient-to-br from-purple-600 to-blue-600 border-purple-500/30'
                  }`}
                >
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='flex flex-col gap-12'>
                      <div className='flex flex-col gap-3'>
                        <p className={`py-2 px-4 w-fit rounded-full font-bold text-sm ${
                          isYellow 
                            ? 'bg-dark_black text-white' 
                            : 'bg-white/20 text-white backdrop-blur-sm'
                        }`}>
                          {items.plan_name}
                        </p>
                        <p className={`text-base ${isYellow ? 'text-dark_black/80' : 'text-white/90'}`}>
                          {items.plan_descp}
                        </p>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <h2 className={`text-5xl md:text-6xl font-bold ${isYellow ? 'text-dark_black' : 'text-white'}`}>
                          {items.plan_price}
                          <span className={`text-base ml-2 font-normal ${isYellow ? 'text-dark_black/70' : 'text-white/70'}`}>
                            /month
                          </span>
                        </h2>
                        <Link
                          href='/contact'
                          className={`group font-semibold backdrop-blur-sm rounded-full flex items-center gap-4 py-3 pl-6 pr-3 w-fit transition-all duration-300 ${
                            isYellow 
                              ? 'text-white bg-dark_black/90 hover:bg-dark_black' 
                              : 'text-white bg-white/20 hover:bg-white/30'
                          }`}
                        >
                          <span className='group-hover:translate-x-2 transform transition-transform duration-200'>
                            Get Started
                          </span>
                          <svg width='32' height='32' viewBox='0 0 32 32' fill='none' className='group-hover:rotate-45 transition-transform duration-300'>
                            <rect width='32' height='32' rx='16' fill={isYellow ? 'white' : '#1B1D1E'} />
                            <path
                              d='M11.832 11.3335H20.1654M20.1654 11.3335V19.6668M20.1654 11.3335L11.832 19.6668'
                              stroke={isYellow ? '#1B1D1E' : 'white'}
                              strokeWidth='1.42857'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className={`flex flex-col gap-4 md:pl-8 md:border-l ${isYellow ? 'border-dark_black/20' : 'border-white/20'}`}>
                      <p className={`font-bold text-sm ${isYellow ? 'text-dark_black' : 'text-white'}`}>Features</p>
                      <ul className='flex flex-col gap-4'>
                        {items.plan_feature?.map((feature: any, featureIndex: number) => (
                          <li key={featureIndex} className='flex items-center gap-3'>
                            <Image
                              src={items.icon_img}
                              alt='icon'
                              width={20}
                              height={20}
                              className='flex-shrink-0'
                            />
                            <p className={`text-sm ${isYellow ? 'text-dark_black/90' : 'text-white/90'}`}>
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscription
