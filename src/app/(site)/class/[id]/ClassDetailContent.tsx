'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ClassData, ContentItem } from '@/data/classesData'
import AnimatedBackground from '@/app/components/shared/AnimatedBackground'

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
    <main className="pt-24 pb-16">
      {/* Hero Header Section with Animated Background */}
      <section className="relative py-16 overflow-hidden">
        <AnimatedBackground variant="hero" />
        
        <div className="container relative z-10">
          <motion.div {...bottomAnimation} className="flex flex-col gap-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-dark_black/60 dark:text-white/60 hover:text-purple_blue transition-colors">
                Home
              </Link>
              <span className="text-dark_black/40 dark:text-white/40">→</span>
              <span className="font-medium bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {classData.className}
              </span>
            </nav>
            
            {/* Title with Gradient */}
            <h1 className="text-4xl md:text-6xl font-bold text-dark_black dark:text-white leading-tight">
              {classData.className}{' '}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Study Material
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-dark_black/70 dark:text-white/70 max-w-3xl leading-relaxed">
              Comprehensive learning resources for {classData.className} students. Access <span className="font-semibold text-purple_blue">{classData.totalContent}+</span> videos, notes, PDFs, and practice tests across <span className="font-semibold text-purple_blue">{classData.subjects.length}</span> subjects.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 bg-white dark:bg-dark_black/50 backdrop-blur-sm rounded-2xl p-5 border border-purple_blue/20 shadow-lg shadow-purple-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {classData.subjects.length}
                  </p>
                  <p className="text-sm text-dark_black/60 dark:text-white/60 font-medium">Subjects</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 bg-white dark:bg-dark_black/50 backdrop-blur-sm rounded-2xl p-5 border border-blue-500/20 shadow-lg shadow-blue-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">📹</span>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {classData.totalContent}+
                  </p>
                  <p className="text-sm text-dark_black/60 dark:text-white/60 font-medium">Resources</p>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 bg-white dark:bg-dark_black/50 backdrop-blur-sm rounded-2xl p-5 border border-orange-500/20 shadow-lg shadow-orange-500/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 flex items-center justify-center shadow-lg">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {classData.enrolledStudents.toLocaleString()}
                  </p>
                  <p className="text-sm text-dark_black/60 dark:text-white/60 font-medium">Students</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects Grid Section */}
      <section className="relative py-16 overflow-hidden">
        <AnimatedBackground variant="section" />
        <div className="container relative z-10">
          <motion.div {...bottomAnimation}>
              <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark_black dark:text-white">
                Choose Your{' '}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Subject
                </span>
              </h2>
              <p className="text-dark_black/60 dark:text-white/60 text-lg max-w-2xl mx-auto">
                Select from our comprehensive subject library to access tailored study materials
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classData.subjects.map((subject, index) => (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group cursor-pointer rounded-3xl p-6 transition-all duration-300 border-2 relative overflow-hidden ${
                    selectedSubject.id === subject.id
                      ? 'border-purple_blue bg-gradient-to-br from-purple_blue/10 to-blue-600/10 shadow-xl shadow-purple-500/20'
                      : 'border-gray-200/50 dark:border-gray-800/50 bg-white dark:bg-dark_black/30 hover:border-purple_blue/50 hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedSubject(subject)}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500 ${
                    selectedSubject.id === subject.id ? 'from-purple-600/5 to-blue-600/5' : ''
                  }`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                        {subject.icon}
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-full shadow-lg"
                      >
                        {subject.topics} Topics
                      </motion.span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-dark_black dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-dark_black/60 dark:text-white/60 leading-relaxed">
                      {subject.description}
                    </p>
                    
                    {/* Selection Indicator */}
                    {selectedSubject.id === subject.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 left-4 w-6 h-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Enhanced Design */}
      <section className="relative py-16 overflow-hidden">
        <AnimatedBackground variant="minimal" />
        <div className="container relative z-10">
          <motion.div {...bottomAnimation}>
            {/* Header with Filters */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-dark_black dark:text-white mb-3">
                  {selectedSubject.name}{' '}
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Content
                  </span>
                </h2>
                <p className="text-dark_black/60 dark:text-white/60 text-lg">
                  {selectedSubject.description}
                </p>
              </div>
              
              {/* Enhanced Content Filter Buttons */}
              <div className="flex gap-2 flex-wrap">
                {[
                  { value: 'all', label: 'All', icon: '📚' },
                  { value: 'video', label: 'Video', icon: '🎥' },
                  { value: 'pdf', label: 'PDF', icon: '📄' },
                  { value: 'notes', label: 'Notes', icon: '📝' },
                  { value: 'test', label: 'Test', icon: '✅' }
                ].map((filter) => (
                  <motion.button
                    key={filter.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setContentFilter(filter.value as any)}
                    className={`group relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden ${
                      contentFilter === filter.value
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/30'
                        : 'bg-gray-100 dark:bg-gray-900 text-dark_black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>{filter.icon}</span>
                      <span>{filter.label}</span>
                    </span>
                    {contentFilter === filter.value && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Enhanced Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item, index) => (
                <Link href={item.url} key={item.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-white dark:bg-dark_black/50 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-purple_blue hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 backdrop-blur-sm"
                  >
                    {/* Video Thumbnail or Gradient Background */}
                    {item.type === 'video' ? (
                      <div className="relative h-52 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20 overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3),transparent_70%)]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-20 h-20 rounded-full bg-white/95 dark:bg-dark_black/95 flex items-center justify-center shadow-2xl backdrop-blur-sm"
                          >
                            <svg className="w-10 h-10 text-purple_blue ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </motion.div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                            VIDEO
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className={`relative h-52 ${
                        item.type === 'pdf' ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20' :
                        item.type === 'notes' ? 'bg-gradient-to-br from-green-600/20 to-emerald-600/20' :
                        'bg-gradient-to-br from-purple-600/20 to-pink-600/20'
                      }`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-7xl opacity-50">{getContentIcon(item.type)}</span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 text-white text-xs font-bold rounded-full shadow-lg uppercase ${
                            item.type === 'pdf' ? 'bg-blue-600' :
                            item.type === 'notes' ? 'bg-green-600' :
                            'bg-purple-600'
                          }`}>
                            {item.type}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {/* Content Card Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{getContentIcon(item.type)}</span>
                        <h3 className="text-lg font-bold text-dark_black dark:text-white line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300 flex-1">
                          {item.title}
                        </h3>
                      </div>
                      
                      {/* Metadata */}
                      <div className="flex flex-wrap gap-3 text-sm text-dark_black/60 dark:text-white/60 mb-4">
                        {item.duration && (
                          <span className="flex items-center gap-1 px-3 py-1 bg-purple_blue/10 rounded-full">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {item.duration}
                          </span>
                        )}
                        {item.pages && (
                          <span className="flex items-center gap-1 px-3 py-1 bg-blue-600/10 rounded-full">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {item.pages} pages
                          </span>
                        )}
                        {item.questions && (
                          <span className="flex items-center gap-1 px-3 py-1 bg-green-600/10 rounded-full">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {item.questions} Q's
                          </span>
                        )}
                      </div>
                      
                      {/* Footer with Views and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                        <span className="flex items-center gap-2 text-sm text-dark_black/60 dark:text-white/60">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {item.views.toLocaleString()}
                        </span>
                        <motion.span
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-sm font-bold text-purple_blue"
                        >
                          View
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredContent.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="text-8xl mb-6">📚</div>
                <h3 className="text-2xl font-bold text-dark_black dark:text-white mb-3">
                  No Content Found
                </h3>
                <p className="text-dark_black/60 dark:text-white/60">
                  Content for this filter is coming soon!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
