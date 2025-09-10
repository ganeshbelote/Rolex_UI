import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedText = ({
  Size,
  Text,
  Trigger,
}: {
  Size: string
  Text: string
  Trigger: boolean
}) => {
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey(prev => prev + 1)
  }, [Trigger])

  return (
    <div className='relative inline-block'>
      <motion.span
        key={animationKey}
        initial={{ opacity: 1 }}
        animate={{ opacity: Trigger ? 0.4 : 1}}
        transition={{ delay : -0.2, duration: 0.5, ease : "easeInOut" }}
        className={`relative z-10 ${Size} ${Trigger && 'line-through md:no-underline lg:no-underline'}`}
      >
        {Text}
      </motion.span>

      <motion.div
        key={`line-${animationKey}`}
        initial={{ width: 0 }}
        animate={{ width: Trigger ? '100%' : 0 }}
        transition={{ duration: 0.6, ease : "easeInOut" }}
        className='absolute top-1/2 left-0 h-[2px] bg-[#7D7D7F] z-20 hidden md:block lg:block'
      />
    </div>
  )
}

export default AnimatedText
