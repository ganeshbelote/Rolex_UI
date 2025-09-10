import { useState } from 'react'
import BasicBtn from '../buttons/BasicBtn'
import { Link } from 'react-router-dom'
import type { userType } from '../../types/user.type'
import LoadingBtn from '../buttons/LoadingBtn'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/
const ERROR = {
  all: 'All fields are necessary !',
  email: 'Domain required (for ex. @gmail.com)',
  password:
    'Password must contain atleast 6 characters consisting atleast one uppercase, one lowercase , special character and number !'
}

const LoginForm = ({
  setFormData,
  Navigate = '/register',
  isLoading
}: {
  setFormData: React.Dispatch<React.SetStateAction<userType>>
  Navigate?: string
  isLoading?: boolean
}) => {
  const [user, setUser] = useState<userType>({
    email: '',
    password: ''
  })
  const [error, setError] = useState<userType>({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user.email || !user.password) {
      setError({
        email: ERROR.all,
        password: ERROR.all
      })
      return
    }

    if (!user.email.toLowerCase().endsWith('@gmail.com')) {
      setError({
        email: ERROR.email,
        password: ''
      })
      return
    }

    if (!passwordRegex.test(user.password)) {
      setError({
        email: '',
        password: ERROR.password
      })
      return
    }

    setFormData(user)

    setError({
      email: '',
      password: ''
    })

    setUser({
      email: '',
      password: ''
    })
  }

  return (
    <div className='w-fit flex items-center justify-center'>
      <form
        onSubmit={handleLogin}
        className='border-[1.2px] border-white py-6 px-7 rounded-md flex flex-col gap-5 bg-gradient-to-br from-zinc-900 to-black shadow-[0_1px_6px_-4px_rgba(0,0,0,0.25)] shadow-white'
      >
        <h2 className='text-center text-xl font-medium'>Login</h2>

        <div id='email-block' className='flex flex-col'>
          <label htmlFor='login-email'>Email</label>
          <input
            id='login-email'
            name='email'
            value={user.email}
            className='text-sm min-w-[220px] max-w-3xs border-[1.2px] border-white rounded-md py-1.5 px-4 outline-0'
            type='text'
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
          {error.email && (
            <p className='mt-1 text-red-500 text-xs text-center min-w-[220px] max-w-3xs'>
              {error.email}
            </p>
          )}
        </div>

        <div id='password-block' className='flex flex-col'>
          <label htmlFor='login-password'>Password</label>
          <div
            id='password-input'
            className='relative flex items-center justify-center'
          >
            <input
              id='login-password'
              name='password'
              value={user.password}
              className='text-sm min-w-[220px] max-w-3xs border-[1.2px] border-white rounded-md py-1.5 px-4 pr-10 outline-0'
              type={showPassword ? 'text' : 'password'}
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <div
              className='show-pass h-5 w-5 cursor-pointer absolute right-4'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                // 👁️ Closed Eye SVG
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                  fill='none'
                  stroke='white'
                  strokeWidth='25'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='w-full h-full'
                  aria-label='Hide password'
                >
                  <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80z' />
                  <line x1='48' y1='48' x2='592' y2='464' />
                  <circle cx='288' cy='256' r='64' />
                </svg>
              ) : (
                // 👁️ Open Eye SVG
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                  fill='none'
                  stroke='white'
                  strokeWidth='25'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='w-full h-full'
                  aria-label='Show password'
                >
                  <path d='M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80z' />
                  <circle cx='288' cy='256' r='64' />
                </svg>
              )}
            </div>
          </div>
          {error.password && (
            <p className='mt-1 text-red-500 text-xs text-center min-w-[220px] max-w-3xs'>
              {error.password}
            </p>
          )}
        </div>

        {isLoading ? (
          <LoadingBtn className='mt-2' Border={true} />
        ) : (
          <BasicBtn
            className='mt-2'
            Type='submit'
            Content='Login'
            Shadow={false}
            Border={true}
          />
        )}

        <p className='text-center text-sm'>
          Don't have account ?{' '}
          <Link to={Navigate}>
            <span className='text-blue-500 underline cursor-pointer'>
              Register
            </span>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
