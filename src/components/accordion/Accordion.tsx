import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { BgColorType, ColorType } from '../../types/btn.type'

const bgColors: Record<BgColorType, string> = {
  transparent: 'bg-transparent',
  white: 'bg-white',
  black: 'bg-black',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
  pink: 'bg-pink-500',
  yellow: 'bg-yellow-500',
  gray: 'bg-gray-500',
  purple: 'bg-purple-500'
}

const bgColorsHover: Record<BgColorType, string> = {
  transparent: 'bg-transparent',
  white: 'bg-white/60',
  black: 'bg-black/60',
  blue: 'bg-blue-500/60',
  red: 'bg-red-500/60',
  green: 'bg-green-500/60',
  pink: 'bg-pink-500/60',
  yellow: 'bg-yellow-500/60',
  gray: 'bg-gray-500/60',
  purple: 'bg-purple-500/60'
}

const textColors: Partial<Record<ColorType, string>> = {
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

const Accordion = ({
  Heading = 'Heading',
  Description = 'Description',
  Color = 'white',
  BackgroundColor = 'transparent',
  Shadow,
  Border
}: {
  Heading: string
  Description: string
  Color?: ColorType
  BackgroundColor?: BgColorType
  Shadow?: boolean
  Border?: boolean
}) => {
  const [active, setActive] = useState<boolean>(false)
  const [lock, setLock] = useState<boolean>(false)
  const [supportsHover, setSupportsHover] = useState<boolean>(true)

  useEffect(() => {
    // Check if the device has a real hover capability
    const mediaQuery = window.matchMedia('(hover: hover)')
    setSupportsHover(mediaQuery.matches)

    // Update state on change (e.g. resizing window or connecting external mouse)
    const handler = (e: MediaQueryListEvent) => setSupportsHover(e.matches)
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <motion.div
      className={`relative overflow-hidden ${textColors[Color]} ${
        Border && 'border-[1.5px]'
      } max-w-[30rem] px-2 py-1.5 pr-8 cursor-pointer flex flex-col items-center rounded-sm ${
        active || lock
          ? bgColorsHover[BackgroundColor]
          : bgColors[BackgroundColor]
      }`}
      style={{
        boxShadow: Shadow
          ? `0 1px 8px -4px ${Color}`
          : '0 1px 8px -4px rgba(0,0,0,0.25)'
      }}
      {...(supportsHover && {
        onMouseEnter: () => setActive(true),
        onMouseLeave: () => setActive(false)
      })}
      onDoubleClick={() => setLock(prev => !prev)}
      onClick={() => setActive(prev => !prev)}
    >
      <div className='w-full relative text-lg font-semibold flex items-center justify-center gap-2'>
        <span className={`w-full text-center`}>
          {Heading.length <= 27
            ? Heading
            : Heading.slice(0, 27).padEnd(30, '.')}
        </span>
        <AnimatePresence mode='wait'>
          {(active || lock) && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '90%', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`absolute -bottom-2 h-[1px] ${bgColors[Color]}`}
            ></motion.span>
          )}
        </AnimatePresence>
      </div>
      <span
        className={`absolute ${lock ? 'top-3 right-4.5' : 'top-4 right-5'}`}
      >
        {lock ? (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, -10, 10, -6, 6, -3, 3, 0] }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='h-4 cursor-pointer'
            onClick={() => setLock(prev => !prev)}
          >
            {/* Lock SVG */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 640 640'
              className='w-full h-full'
            >
              <path
                fill='white'
                d='M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z'
              />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={`h-1.5 transition-transform duration-300 ${
              (active || lock) && 'rotate-180'
            }`}
          >
            {/* UpArrow SVG */}
            <svg
              width='313'
              height='193'
              viewBox='0 0 313 193'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-full h-full'
            >
              <line
                x1='18.176'
                y1='19.8206'
                x2='163.179'
                y2='164.824'
                stroke='white'
                strokeWidth='50'
              />
              <line
                x1='294.681'
                y1='17.6777'
                x2='149.678'
                y2='162.681'
                stroke='white'
                strokeWidth='50'
              />
              <rect
                x='141.707'
                y='178.142'
                width='19'
                height='19'
                transform='rotate(-45 141.707 178.142)'
                fill='white'
                stroke='white'
              />
            </svg>
          </motion.div>
        )}
      </span>
      <AnimatePresence mode='wait'>
        {(active || lock) && (
          <motion.div
            layout
            layoutRoot
            id='accordion-description'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ delay: -0.3, duration: 0.8, ease: 'easeInOut' }}
            className='overflow-hidden w-full pt-2'
          >
            <p className='p-2'>{Description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Accordion
