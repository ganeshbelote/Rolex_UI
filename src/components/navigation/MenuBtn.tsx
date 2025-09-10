import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { MenuBtnProps } from '../../types/menubtn.type'

const colorObj = {
  white: 'bg-white',
  black: 'bg-black'
}

const SizeObject = {
  small: { boxSize: 'h-8 w-8' }, 
  medium: { boxSize: 'h-10 w-10' }, 
  large: { boxSize: 'h-12 w-12' } 
}

const MenuBtn = ({
  onToggle,
  Color = 'white',
  className,
  Border = true,
  Size = 'medium',
  ...rest
}: MenuBtnProps) => {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => {
    setActive(prev => {
      const newState = !prev
      onToggle?.(newState)
      return newState
    })
  }

  return (
    <div
      {...rest}
      className={`flex-shrink-0 ${SizeObject[Size].boxSize} relative rounded-md flex items-center justify-center mr-3 cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <motion.div
        className={`${SizeObject[Size].boxSize} absolute inset-0 rounded-md ${
          Border && 'border-[2px]'
        }`}
        animate={{
          borderColor: 'rgb(113 113 122)'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Background Highlight */}
      <AnimatePresence>
        {active && (
          <motion.div
            className='absolute inset-0 rounded-md '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Hamburger → Cross */}
      <motion.div
        className='relative z-10 flex flex-col items-end justify-center space-y-1.5'
        initial={false}
        animate={active ? 'open' : 'closed'}
      >
        {/* Top Line */}
        <motion.span
          className={`block h-[2.5px] rounded ${colorObj[Color]}`}
          variants={{
            closed: { rotate: 0, y: 0, width: '24px' },
            open: { rotate: 45, y: 6, width: '24px' }
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
        {/* Middle Line */}
        <motion.span
          className={`block h-[3px] rounded ${colorObj[Color]}`}
          variants={{
            closed: { opacity: 1, width: '18px' },
            open: { opacity: 0, width: 0 }
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        {/* Bottom Line */}
        <motion.span
          className={`block h-[2.5px] rounded ${colorObj[Color]}`}
          variants={{
            closed: { rotate: 0, y: 0, width: '10px' },
            open: { rotate: -45, y: -6, width: '24px' }
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}

export default MenuBtn
