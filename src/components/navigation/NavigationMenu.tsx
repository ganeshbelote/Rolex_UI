import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import InfoTab from '../tabs/InfoTab'
import { v4 as uuidv4 } from 'uuid'
import type { MenuOptionType } from '../../types/nav.type'

const NavigationMenu = ({
  Menu,
  Hidden = true,
  className
}: {
  Menu: MenuOptionType[]
  Hidden?: boolean
  className?: string
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <ul
      className={`options ${
        Hidden ? 'hidden' : 'flex'
      } md:flex lg:flex px-4 py-1.5 items-center justify-center gap-4 ${className}`}
    >
      {Menu.map((el, index) => (
        <div
          key={index}
          className='relative flex items-center justify-center'
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <li
            style={{
              backgroundColor: activeIndex === index ? '#27272a' : ''
            }}
            className='px-4 py-1.5 cursor-pointer hover:bg-zinc-900 rounded-md'
          >
            {el.Option}
          </li>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='option-menu p-4 flex flex-wrap gap-3 rounded-xl absolute top-12 left-0 bg-gradient-to-br from-zinc-900 to-black z-50'
                style={{ width: el.Content.length < 3 ? 'min(65vw, 320px)':'min(65vw, 640px)' }}
              >
                {el.Content.map(item => (
                  <InfoTab
                    key={uuidv4()}
                    Href={`${item.Href ? item.Href : ''}`}
                    Heading={`${item.Heading}`}
                    Description={`${item.Description}`}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </ul>
  )
}

export default NavigationMenu
