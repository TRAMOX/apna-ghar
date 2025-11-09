'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';

function Faq() {
  const [faqList, setfaqList] = useState<any>(null);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/page-data')
          if (!res.ok) throw new Error('Failed to fetch')
  
          const data = await res.json()
          setfaqList(data?.faqList)
        } catch (error) {
          console.error('Error fetching services:', error)
        }
      }
  
      fetchData()
    }, [])

  return (
    <section id="faq" className='bg-[#0a0a0f] dark:bg-[#0a0a0f] py-16 md:py-24'>
      <div className='container'>
        <div className='flex flex-col gap-10 md:gap-20'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='max-w-2xl text-center mx-auto'
          >
            <h2 className='text-white'>
              Got questions? We've got{' '}
              <span className='instrument-font italic font-normal text-purple-400'>
                answers
              </span>
            </h2>
          </motion.div>
          <div className='flex flex-col'>
            <Accordion
              type='single'
              collapsible
              className='flex flex-col gap-4'>
              {faqList?.map((item:any, index:any) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className='p-6 border border-gray-800/50 hover:border-purple-500/50 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#16213e] group transition-all duration-300'
                  >
                    <AccordionTrigger className='group-hover:cursor-pointer'>
                      <h4 className='text-white text-left'>
                        {item.faq_que}
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className='text-base font-normal text-gray-400'>
                        {item.faq_ans}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
