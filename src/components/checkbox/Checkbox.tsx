import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from '../text/AnimatedText'
import type { onToggleType } from '../../types/menubtn.type'

type sizeType = 'small' | 'medium' | 'large'

const SizeObject = {
  small: {
    boxSize: 'h-4 w-4',
    text: 'text-sm'
  },
  medium: {
    boxSize: 'h-5 w-5',
    text: 'text-[18px]'
  },
  large: {
    boxSize: 'h-6 w-6',
    text: 'text-xl'
  }
}

const Checkbox = ({
  Type = 'checkbox',
  onToggle,
  For = 'Description !',
  Size = 'medium'
}: {
  Type?: 'checkbox' | 'todo'
  onToggle?:onToggleType
  For: string
  Size?: sizeType
}) => {
  const [active, setActive] = useState<boolean>(false)

  const handleClick = () => {
    onToggle?.(!active)
    setActive(prev => !prev)
  }

  return (
    <div
      className='px-2 py-1.5 cursor-pointer w-fit flex items-center hover:bg-zinc-800 rounded-sm'
      onClick={handleClick}
    >
      <div
        className={`flex-shrink-0 ${SizeObject[Size].boxSize} relative rounded-md flex items-center justify-center mr-3`}
      >
        <motion.div
          className={`${SizeObject[Size].boxSize} absolute inset-0 rounded-md border-[2px]`}
          animate={{
            borderColor: active ? 'rgb(29 78 216)' : 'rgb(113 113 122)'
          }}
          transition={{ duration: 0.3 }}
        />

        <AnimatePresence>
          {active && (
            <motion.div
              className='absolute inset-0 rounded-md bg-blue-700'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {active && (
            <motion.svg
              key='tick'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-5 w-5 relative z-10'
            >
              <motion.path
                d='M5 13l4 4L19 7'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
      {Type == 'checkbox' ? <span className={`${SizeObject[Size].text}`}>{For}</span> :
      <AnimatedText Size={SizeObject[Size].text} Trigger={active} Text={For} />}
    </div>
  )
}

export default Checkbox
