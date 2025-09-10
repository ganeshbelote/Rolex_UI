import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Card = ({
  Src ,
  Heading = 'Heading',
  Description = 'Description',
  Date = 'dd-mm-yyyy'
}: {
  Src : string
  Heading: string
  Description: string
  Date : string
}) => {
  const [isShrink, setIsShrink] = useState<boolean>(false)
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
    <div
      className='Card shadow-[0_1px_6px_-4px_rgba(0,0,0,0.25)] shadow-white hover:scale-101 transition-transform duration-300 overflow-hidden max-h-96 min-w-[220px] max-w-3xs rounded-xl'
      onClick={() => setIsShrink(prev => !prev)}
      {...(supportsHover && {
        onMouseEnter: () => setIsShrink(true),
        onMouseLeave: () => setIsShrink(false)
      })}
    >
      <motion.div
        animate={{ height: isShrink ? '20px' : '216px' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className='img-container overflow-hidden bg-zinc-600 h-[216px] w-full flex items-center justify-center'
      >
        <img
          className='object-cover object-center '
          src={Src}
          alt='Card-Img'
        />
      </motion.div>
      <div className='content-container relative shadow-[0_-2px_3px_-2px_rgba(0,0,0,0.25)] shadow-white rounded-t-md bg-gradient-to-br from-zinc-900 to-black py-2 px-4 w-full flex flex-col gap-3'>
        <h2 className='font-semibold text-xl'>{Heading}</h2>
        <AnimatePresence mode='wait'>
          <motion.p
            key={String(isShrink)}
            initial={{ height: 80 }}
            animate={{ height: isShrink ? 276 : 80 }}
            exit={{ height: 80 }}
            transition={{
              delay: isShrink ? 0 : -0.2,
              duration: 0.4,
              ease: 'easeInOut'
            }}
            className={`${
              isShrink ? 'line-clamp-17' : 'line-clamp-5'
            } overflow-hidden opacity-70 text-xs`}
          >
            {Description}
          </motion.p>
        </AnimatePresence>
        <p className='line-clamp-1 font-medium text-sm'>{Date}</p>
      </div>
    </div>
  )
}

export default Card
