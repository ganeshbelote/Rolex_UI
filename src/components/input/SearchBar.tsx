import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import type { ColorType, cornerType } from '../../types/btn.type'
import { motion } from 'framer-motion'

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

const SearchBar = ({
  id = 'search',
  Border = true,
  Shadow = true,
  Color = 'white',
  Corner,
  className,
  ...rest
}: {
  id?: string
  Border?: boolean
  Shadow?: boolean
  Color?: ColorType
  Corner?: cornerType
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [cornerStyle, setCorner] = useState<string>('rounded-md')
  const [isOpen, setOpen] = useState<boolean>(false)

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

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = ''
      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

  return (
    <div
      className={clsx(
        'overflow-hidden p-0.5 flex items-center justify-between transition-all',
        Shadow && 'hover:shadow-[0_0_4px_#ffffff] focus:shadow-[0_0_4px_#ffffff]',
        Border && 'border-[1.5px]',
        cornerStyle
      )}
    >
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isOpen ? 220 : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isOpen && (
          <div className='relative flex items-center'>
            <input
              ref={inputRef}
              id={id}
              name={id}
              placeholder='Search...'
              {...rest}
              type='text'
              className={clsx(
                'skip-focus outline-0 px-4 py-2.5 text-sm',
                textColors[Color],
                cornerStyle,
                className
              )}
            />
            <button
              className='absolute right-0.5 border-[1px] px-1.5 h-fit rounded-full text-sm font-medium text-red-500'
              onClick={clearInput}
            >
              x
            </button>
          </div>
        )}
      </motion.div>
      <button
        className='cursor-pointer active:scale-95 transition-all'
        type='button'
        onClick={() => setOpen(prev => !prev)}
      >
        <svg
          className={`p-2 h-10 w-10 bg-white ${cornerStyle}`}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 640 640'
        >
          <path d='M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z' />
        </svg>
      </button>
    </div>
  )
}

export default SearchBar
