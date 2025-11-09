'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useTheme } from 'next-themes'
import SocialSignIn from '../SocialSignIn'
import { useState } from 'react'
import Loader from '../../shared/loader'
import Logo from '../../layout/header/Logo'
import { ShineBorder } from '../../ui/shine-border'

interface SignupModalContentProps {
  onClose: () => void
  onSwitchToSignin: () => void
}

export default function SignupModalContent({ onClose, onSwitchToSignin }: SignupModalContentProps) {
  const router = useRouter()
  const { theme } = useTheme()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'STUDENT',
    classNumber: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    classNumber: '',
  })

  const validateForm = () => {
    let newErrors = { name: '', email: '', password: '', classNumber: '' }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
      isValid = false
    }

    if (!formData.email) {
      newErrors.email = 'Email is required.'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.'
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.'
      isValid = false
    }

    if (formData.role === 'STUDENT' && !formData.classNumber) {
      newErrors.classNumber = 'Class is required for students.'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      localStorage.setItem('user', JSON.stringify({ user: formData.email }))
      toast.success('Account created successfully!')
      onClose()
      router.push('/')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative shadow-2xl overflow-hidden rounded-2xl bg-white dark:bg-dark_black px-8 py-10 text-center max-h-[85vh] overflow-y-auto' suppressHydrationWarning>
      <ShineBorder shineColor={theme === 'dark' ? 'white' : 'black'} />
      
      <div className='mb-8 flex justify-center'>
        <Logo />
      </div>

      <SocialSignIn actionText='Sign Up' />

      <span className='z-1 relative my-6 block text-center'>
        <span className='-z-1 absolute left-0 top-1/2 block h-px w-full bg-dark_black/10 dark:bg-white/20'></span>
        <span className='text-sm text-dark_black/50 dark:text-white/40 relative z-10 inline-block bg-white dark:bg-dark_black px-3'>
          OR
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className='mb-4 text-left'>
          <input
            type='text'
            placeholder='Full Name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 dark:bg-black/40
                        ${errors.name ? 'border-red-500' : 'border-stroke'} 
                        focus:border-dark_black/50 dark:focus:border-white/50`}
          />
          {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
        </div>

        <div className='mb-4 text-left'>
          <input
            type='email'
            placeholder='Email'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 dark:bg-black/40
                        ${errors.email ? 'border-red-500' : 'border-stroke'} 
                        focus:border-dark_black/50 dark:focus:border-white/50`}
          />
          {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
        </div>

        <div className='mb-4 text-left'>
          <input
            type='password'
            placeholder='Password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className={`w-full rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 dark:bg-black/40
                        ${errors.password ? 'border-red-500' : 'border-stroke'} 
                        focus:border-dark_black/50 dark:focus:border-white/50`}
          />
          {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
        </div>

        <div className='mb-4 text-left'>
          <select
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className='w-full rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 dark:bg-black/40 border-stroke focus:border-dark_black/50 dark:focus:border-white/50'>
            <option value='STUDENT'>Student</option>
            <option value='TEACHER'>Teacher</option>
            <option value='PARENT'>Parent</option>
          </select>
        </div>

        {formData.role === 'STUDENT' && (
          <div className='mb-4 text-left'>
            <select
              value={formData.classNumber}
              onChange={(e) => setFormData({ ...formData, classNumber: e.target.value })}
              className={`w-full rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 dark:bg-black/40
                          ${errors.classNumber ? 'border-red-500' : 'border-stroke'} 
                          focus:border-dark_black/50 dark:focus:border-white/50`}>
              <option value=''>Select Class</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  Class {i + 1}
                </option>
              ))}
            </select>
            {errors.classNumber && <p className='text-red-500 text-sm mt-1'>{errors.classNumber}</p>}
          </div>
        )}

        <div className='mb-6'>
          <button
            type='submit'
            className='flex w-full px-5 py-3 font-medium cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-full border border-dark_black bg-dark_black hover:bg-white dark:hover:bg-white/20 dark:bg-white text-white dark:hover:text-white hover:text-dark_black dark:text-dark_black'>
            Sign Up {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className='text-dark_black/70 dark:text-white/50'>
        Already have an account?{' '}
        <button
          onClick={onSwitchToSignin}
          className='text-dark_black dark:text-white hover:text-dark_black/50 dark:hover:text-white/50 underline'>
          Sign In
        </button>
      </p>
    </div>
  )
}
