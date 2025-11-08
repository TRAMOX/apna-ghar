'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ClassData, ContentItem } from '@/data/classesData'

interface Props {
  classData: ClassData
}

// Sample content data
const sampleContent: Record<string, ContentItem[]> = {
  default: [
    {
      id: 1,
      title: 'Introduction to the Subject',
      type: 'video',
      duration: '25:30',
      url: '#',
      uploadDate: '2024-01-15',
      views: 1250,
      thumbnail: '/images/home/creative/img1.png'
    },
    {
      id: 2,
      title: 'Chapter 1 - Complete Notes',
      type: 'pdf',
      pages: 15,
      url: '#',
      uploadDate: '2024-01-16',
      views: 980
    },
    {
      id: 3,
      title: 'Key Concepts Summary',
      type: 'notes',
      pages: 8,
      url: '#',
      uploadDate: '2024-01-17',
      views: 1100
    },
    {
      id: 4,
      title: 'Chapter 1 Practice Test',
      type: 'test',
      questions: 25,
      url: '#',
      uploadDate: '2024-01-18',
      views: 850
    },
  ]
}

export default function ClassDetailContent({ classData }: Props) {
  const [selectedSubject, setSelectedSubject] = useState(classData.subjects[0])
  const [contentFilter, setContentFilter] = useState<'all' | 'video' | 'pdf' | 'notes' | 'test'>('all')

  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  }

  const content = sampleContent.default
  const filteredContent = contentFilter === 'all' 
    ? content 
    : content.filter(item => item.type === contentFilter)

  const getContentIcon = (type: string) => {
    switch(type) {
      case 'video': return '🎥'
      case 'pdf': return '📄'
      case 'notes': return '📝'
      case 'test': return '✅'
      default: return '📚'
    }
  }

  return (
    <main className="pt-32 pb-16">
      {/* Header Section */}
      <section className="py-8 bg-gradient-to-r from-purple_blue/10 to-indigo-600/10">
        <div className="container">
          <motion.div {...bottomAnimation} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-dark_black/60 dark:text-white/60 hover:text-purple_blue">
                Home
              </Link>
              <span className="text-dark_black/60 dark:text-white/60">/</span>
              <span className="text-purple_blue font-medium">{classData.className}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-dark_black dark:text-white">
              {classData.className} <span className="text-purple_blue">Study Material</span>
            </h1>
            
            <p className="text-lg text-dark_black/60 dark:text-white/60 max-w-3xl">
              Comprehensive learning resources for {classData.className} students. Access {classData.totalContent}+ videos, notes, PDFs, and practice tests across {classData.subjects.length} subjects.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-purple_blue/10 flex items-center justify-center">
                  <span className="text-xl">📚</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark_black dark:text-white">{classData.subjects.length}</p>
                  <p className="text-sm text-dark_black/60 dark:text-white/60">Subjects</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <span className="text-xl">📹</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark_black dark:text-white">{classData.totalContent}+</p>
                  <p className="text-sm text-dark_black/60 dark:text-white/60">Resources</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <span className="text-xl">👥</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-dark_black dark:text-white">{classData.enrolledStudents.toLocaleString()}</p>
                  <p className="text-sm text-dark_black/60 dark:text-white/60">Students</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-12">
        <div className="container">
          <motion.div {...bottomAnimation}>
            <h2 className="text-3xl font-bold mb-8 text-dark_black dark:text-white">
              Choose Your <span className="text-purple_blue">Subject</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classData.subjects.map((subject) => (
                <motion.div
                  key={subject.id}
                  whileHover={{ scale: 1.02 }}
                  className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                    selectedSubject.id === subject.id
                      ? 'border-purple_blue bg-purple_blue/5'
                      : 'border-gray-200 dark:border-gray-800 hover:border-purple_blue/50'
                  }`}
                  onClick={() => setSelectedSubject(subject)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{subject.icon}</div>
                    <span className="text-sm font-medium text-purple_blue bg-purple_blue/10 px-3 py-1 rounded-full">
                      {subject.topics} Topics
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-dark_black dark:text-white">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-dark_black/60 dark:text-white/60">
                    {subject.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <motion.div {...bottomAnimation}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-dark_black dark:text-white mb-2">
                  {selectedSubject.name} <span className="text-purple_blue">Content</span>
                </h2>
                <p className="text-dark_black/60 dark:text-white/60">
                  {selectedSubject.description}
                </p>
              </div>
              
              {/* Content Filter */}
              <div className="flex gap-2 flex-wrap">
                {['all', 'video', 'pdf', 'notes', 'test'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setContentFilter(filter as any)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      contentFilter === filter
                        ? 'bg-purple_blue text-white'
                        : 'bg-white dark:bg-dark_black text-dark_black dark:text-white border border-gray-200 dark:border-gray-800 hover:border-purple_blue'
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item) => (
                <Link href={item.url} key={item.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-dark_black rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-purple_blue/50 hover:shadow-xl transition-all duration-300"
                  >
                    {item.type === 'video' && item.thumbnail && (
                      <div className="relative h-48 bg-gradient-to-br from-purple_blue/20 to-indigo-600/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-dark_black/90 flex items-center justify-center">
                            <svg className="w-8 h-8 text-purple_blue" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{getContentIcon(item.type)}</span>
                        <span className={`text-xs font-semibold uppercase px-2 py-1 rounded ${
                          item.type === 'video' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                          item.type === 'pdf' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                          item.type === 'notes' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                          'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2 text-dark_black dark:text-white line-clamp-2">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-dark_black/60 dark:text-white/60">
                        {item.duration && <span>⏱️ {item.duration}</span>}
                        {item.pages && <span>📄 {item.pages} pages</span>}
                        {item.questions && <span>❓ {item.questions} questions</span>}
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                        <span className="text-xs text-dark_black/60 dark:text-white/60">
                          👁️ {item.views.toLocaleString()} views
                        </span>
                        <span className="text-xs text-purple_blue font-medium">
                          View →
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
