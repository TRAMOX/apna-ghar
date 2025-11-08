'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { classesData } from '@/data/classesData'

interface SearchResult {
  type: 'class' | 'subject'
  title: string
  description: string
  url: string
  icon: string
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  // Listen for Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Search logic
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setResults([])
      return
    }

    const query = searchQuery.toLowerCase()
    const searchResults: SearchResult[] = []

    classesData.forEach((classItem) => {
      // Search in class names
      if (classItem.className.toLowerCase().includes(query)) {
        searchResults.push({
          type: 'class',
          title: classItem.className,
          description: `${classItem.subjects.length} Subjects • ${classItem.totalContent}+ Resources`,
          url: `/class/${classItem.classNumber}`,
          icon: '🎓'
        })
      }

      // Search in subjects
      classItem.subjects.forEach((subject) => {
        if (
          subject.name.toLowerCase().includes(query) ||
          subject.description.toLowerCase().includes(query)
        ) {
          searchResults.push({
            type: 'subject',
            title: `${subject.name} - ${classItem.className}`,
            description: subject.description,
            url: `/class/${classItem.classNumber}#${subject.name.toLowerCase()}`,
            icon: subject.icon
          })
        }
      })
    })

    setResults(searchResults.slice(0, 8)) // Limit to 8 results
  }, [searchQuery])

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-purple_blue dark:hover:border-purple_blue transition-all duration-300 bg-white dark:bg-dark_black"
      >
        <svg className="w-5 h-5 text-dark_black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-sm text-dark_black/60 dark:text-white/60">Search...</span>
        <kbd className="hidden lg:inline-block px-2 py-1 text-xs font-semibold text-dark_black/60 dark:text-white/60 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded">
          Ctrl K
        </kbd>
      </button>

      {/* Mobile Search Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
      >
        <svg className="w-6 h-6 text-dark_black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Search Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl mx-auto z-50 px-4"
            >
              <div className="bg-white dark:bg-dark_black rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-800">
                  <svg className="w-6 h-6 text-purple_blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search classes, subjects, topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-lg text-dark_black dark:text-white placeholder:text-dark_black/40 dark:placeholder:text-white/40"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  >
                    <svg className="w-5 h-5 text-dark_black/60 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto">
                  {results.length > 0 ? (
                    <div className="p-2">
                      {results.map((result, index) => (
                        <Link
                          key={index}
                          href={result.url}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer group"
                          >
                            <div className="text-3xl">{result.icon}</div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-dark_black dark:text-white group-hover:text-purple_blue transition-colors">
                                  {result.title}
                                </h3>
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  result.type === 'class' 
                                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                                    : 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                                }`}>
                                  {result.type}
                                </span>
                              </div>
                              <p className="text-sm text-dark_black/60 dark:text-white/60 mt-1">
                                {result.description}
                              </p>
                            </div>
                            <svg className="w-5 h-5 text-dark_black/40 dark:text-white/40 group-hover:text-purple_blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  ) : searchQuery.trim() !== '' ? (
                    <div className="p-8 text-center">
                      <div className="text-6xl mb-4">🔍</div>
                      <p className="text-dark_black/60 dark:text-white/60">
                        No results found for "{searchQuery}"
                      </p>
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <div className="text-6xl mb-4">💡</div>
                      <p className="text-dark_black dark:text-white font-medium mb-2">
                        Quick Search
                      </p>
                      <p className="text-sm text-dark_black/60 dark:text-white/60">
                        Try searching for classes, subjects, or topics
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
