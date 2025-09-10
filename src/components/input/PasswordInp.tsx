import { useEffect, useState } from 'react'
import clsx from 'clsx'
import type { ColorType, cornerType } from '../../types/btn.type'

const textColors: Record<ColorType, string> = {
  transparent: 'text-black',
  white: 'text-white',
  black: 'text-black',
  pink: 'text-pink-500',
  red: 'text-red-500',
  blue: 'text-blue-500',
  green: 'text-green-500',
  yellow: 'text-yellow-500',
  gray: 'text-gray-500',
  purple: 'text-purple-500'
}

const PasswordInp = ({
  id = 'password-field',
  Border = true,
  Shadow = true,
  Color = 'white',
  Corner,
  Lable,
  Placeholder,
  className,
  ...rest
}: {
  id?: string
  Border?: boolean
  Shadow?: boolean
  Color?: ColorType
  Corner?: cornerType
  Lable?: boolean
  Placeholder?: boolean
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [cornerStyle, setCorner] = useState<string>('rounded-md')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  useEffect(() => {
    switch (Corner) {
      case 'rounded':
        break
      case 'pill':
        setCorner('rounded-3xl')
        break
      case 'square':
        setCorner('rounded-none')
        break
    }
  }, [Corner])

  return (
    <div className='relative min-w-[220px] max-w-3xs flex flex-col justify-center'>
      {Lable && <label htmlFor={id}>Password</label>}
      <input
        id={id}
        name={id}
        {...rest}
        className={clsx(
          'outline-0 px-4 py-2.5 pr-10 text-sm',
          Border && 'border-[1.5px]',
          !Shadow && 'skip-focus',
          textColors[Color],
          cornerStyle,
          className
        )}
        placeholder={Placeholder ? 'password' : ''}
        type={showPassword ? 'text' : 'password'}
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
  )
}

export default PasswordInp
