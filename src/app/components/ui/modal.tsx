'use client'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className='fixed inset-0 z-[9999] flex items-center justify-center p-4'
      onClick={onClose}>
      {/* Backdrop with blur */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-md' />
      
      {/* Modal Content */}
      <div
        className='relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto'
        onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors'
          aria-label='Close modal'>
          <svg
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}
