'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

function CustomerStories() {
  return (
    <section className='relative bg-[#0a0a0f] dark:bg-[#0a0a0f] py-16 md:py-24 overflow-hidden'>
      <div className='container'>
        <div className='flex flex-col justify-center gap-10 md:gap-20'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mx-auto max-w-2xl flex items-center text-center'
          >
            <h2 className='text-white'>
              What our happy students are saying
              <span className='instrument-font italic font-normal text-purple-400'>
                {' '}
                about us
              </span>
            </h2>
          </motion.div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col xl:flex xl:flex-row gap-6'>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 gap-64 rounded-3xl flex flex-col relative bg-[url('/images/home/customerStories/customer_bg_img.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat border border-gray-800/50 overflow-hidden"
              >
                <div className='absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-[#1a1a2e]/50 to-transparent'></div>
                <span className='relative z-10 text-purple-400 uppercase text-sm font-bold'>
                  Student stories
                </span>
                <div className='relative z-10 flex flex-col gap-6'>
                  <h4 className='text-white'>
                    "Apna Ghar helped me excel in my board exams with amazing study materials!"
                  </h4>
                  <div className='flex flex-col gap-1'>
                    <p className='text-white font-medium'>Priya Sharma</p>
                    <p className='text-gray-400 text-sm font-medium'>
                      Class 10 Student
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className='flex flex-col justify-between gap-36 xl:max-w-25 bg-yellow-400 rounded-3xl p-8 border border-yellow-500/30'
              >
                <div>
                  <span className='uppercase text-sm font-bold text-dark_black/80'>
                    Facts & numbers
                  </span>
                </div>
                <div className='flex flex-col gap-1'>
                  <h2 className='text-8xl font-bold text-dark_black'>
                    95%
                  </h2>
                  <h4 className='text-dark_black font-medium'>
                    Students improved their grades with our platform."
                  </h4>
                </div>
              </motion.div>
            </div>
            <div className='flex flex-col xl:flex xl:flex-row gap-6'>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='flex flex-col justify-between bg-gradient-to-br from-[#1a1a2e] to-[#16213e] xl:max-w-25 rounded-3xl p-8 border border-gray-800/50'
              >
                <div className='flex flex-col gap-6'>
                  <span className='text-purple-400 uppercase text-sm font-bold'>
                    Student stories
                  </span>
                  <h4 className='text-white'>
                    The video lessons and practice tests made learning so much easier and fun!
                  </h4>
                  <div className='relative rounded-2xl overflow-hidden'>
                    <Image
                      src='/images/home/customerStories/creativity_img.jpg'
                      alt='image'
                      width={344}
                      height={220}
                      className='w-full h-52 object-cover'
                      unoptimized={true}
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className='flex flex-col gap-24 justify-between bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-3xl border border-gray-800/50'
              >
                <div className='flex flex-col gap-6'>
                  <span className='text-purple-400 uppercase text-sm font-bold'>
                    Student stories
                  </span>
                  <h2 className='text-2xl lg:text-4xl text-white font-semibold'>
                    "Apna Ghar made complex topics simple with clear explanations and excellent study materials. Highly recommend for all students!"
                  </h2>
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='font-medium text-white'>Rahul Kumar</p>
                  <p className='text-gray-400 text-sm font-medium'>
                    Class 12 Student
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
