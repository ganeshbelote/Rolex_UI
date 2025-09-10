import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { onToggleType } from '../../types/menubtn.type'

export default function Slider ({
  onToggle,
  Color = '#A2E535'
}: {
  onToggle?: onToggleType
  Color?: string
}) {
  const timeoutRef = useRef<number | null>(null)
  const [value, setValue] = useState<number>(27)
  const [isChanging, setChanging] = useState<boolean>(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
    onToggle?.(Number(e.target.value))
    setChanging(true)

    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setChanging(false)
    }, 1500)
  }

  return (
    <div className='flex flex-col items-center justify-center text-white'>
      <div className='relative w-[95vw] max-w-[320px]'>
        <AnimatePresence mode='wait'>
          {isChanging && (
            <motion.div
              layout
              key={value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: -40, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className='absolute left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-gray-800 text-lg font-semibold'
            >
              {value}%
            </motion.div>
          )}
        </AnimatePresence>

        <input
          type='range'
          min='0'
          max='100'
          value={value}
          onChange={handleChange}
          className={`w-full h-2 rounded-lg appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 
            [&::-webkit-slider-thumb]:rounded-full 
            [&::-webkit-slider-thumb]:bg-zinc-400
            [&::-webkit-slider-thumb]:border-2 
            [&::-webkit-slider-thumb]:border-gray-900
            [&::-webkit-slider-thumb]:cursor-pointer`}
          style={{
            background: `linear-gradient(to right, ${Color} ${value}%, #374151 ${value}%)`
          }}
        />
      </div>
    </div>
  )
}
