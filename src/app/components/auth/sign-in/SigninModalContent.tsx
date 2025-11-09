'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useTheme } from 'next-themes'
import SocialSignIn from '../SocialSignIn'
import Loader from '../../shared/loader'
import Logo from '../../layout/header/Logo'
import { ShineBorder } from '../../ui/shine-border'

interface SigninModalContentProps {
  onClose: () => void
  onSwitchToSignup: () => void
}

export default function SigninModalContent({ onClose, onSwitchToSignup }: SigninModalContentProps) {
  const router = useRouter()
  const { theme } = useTheme()
  const [loading, setLoading] = useState(false)
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const [validationErrors, setValidationErrors] = useState({
    email: '',
    password: '',
  })

  const validateForm = () => {
    let errors = { email: '', password: '' }
    let isValid = true

    if (!loginData.email) {
      errors.email = 'Email is required.'
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      errors.email = 'Please enter a valid email address.'
      isValid = false
    }

    if (!loginData.password) {
      errors.password = 'Password is required.'
      isValid = false
    } else if (loginData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.'
      isValid = false
    }
    setValidationErrors(errors)
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
      localStorage.setItem('user', JSON.stringify({ user: loginData.email }))
      onClose()
      router.push('/')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative shadow-2xl overflow-hidden rounded-2xl bg-white dark:bg-dark_black px-8 py-10 text-center' suppressHydrationWarning>
      <ShineBorder shineColor={theme === 'dark' ? 'white' : 'black'} />
      
      <div className='mb-8 flex justify-center'>
        <Logo />
      </div>

      <SocialSignIn actionText='Sign In' />

      <span className='z-1 relative my-6 block text-center'>
        <span className='-z-1 absolute left-0 top-1/2 block h-px w-full bg-dark_black/10 dark:bg-white/20'></span>
        <span className='text-sm text-dark_black/50 dark:text-white/40 relative z-10 inline-block bg-white dark:bg-dark_black px-3'>
          OR
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className='mb-4 text-left'>
          <input
            type='email'
            placeholder='Email'
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className={`w-full rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 dark:bg-black/40
                        ${
                          validationErrors.email
                            ? 'border-red-500'
                            : 'border-stroke'
                        } 
                        focus:border-dark_black/50 dark:focus:border-white/50`}
          />
          {validationErrors.email && (
            <p className='text-red-500 text-sm mt-1'>
              {validationErrors.email}
            </p>
          )}
        </div>
        <div className='mb-4 text-left'>
          <input
            type='password'
            placeholder='Password'
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className={`w-full rounded-full border px-5 py-3 outline-hidden transition dark:border-white/20 dark:bg-black/40 
                        ${
                          validationErrors.password
                            ? 'border-red-500'
                            : 'border-stroke'
                        } 
                        focus:border-dark_black/50 dark:focus:border-white/50`}
          />
          {validationErrors.password && (
            <p className='text-red-500 text-sm mt-1'>
              {validationErrors.password}
            </p>
          )}
        </div>
        <div className='mb-6'>
          <button
            type='submit'
            className='flex w-full px-5 py-3 font-medium cursor-pointer items-center justify-center transition duration-300 ease-in-out rounded-full border border-dark_black bg-dark_black hover:bg-white dark:hover:bg-white/20 dark:bg-white text-white dark:hover:text-white hover:text-dark_black dark:text-dark_black'>
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href='/forgot-password'
        onClick={onClose}
        className='mb-2 inline-block text-dark_black/50 dark:text-white/50 dark:hover:text-white/70 hover:text-dark_black'>
        Forget Password?
      </Link>
      <p className='text-dark_black/70 dark:text-white/50'>
        Not a member yet?{' '}
        <button
          onClick={onSwitchToSignup}
          className='text-dark_black dark:text-white hover:text-dark_black/50 dark:hover:text-white/50 underline'>
          Sign Up
        </button>
      </p>
    </div>
  )
}
