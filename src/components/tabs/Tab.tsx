import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Tab ({ Tabs , onClick }: { Tabs: string[], onClick?: (e: React.MouseEvent<HTMLButtonElement>, index?: number) => void }) {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [hoverTab, setHoverTab] = useState<number | null>(null)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([])

  const [indicator, setIndicator] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    visible: false
  })

  const measureAndSet = (index: number | null) => {
    const idx = index ?? activeTab
    const btn = buttonRefs.current[idx]
    const container = containerRef.current
    if (!btn || !container) return
    const b = btn.getBoundingClientRect()
    const c = container.getBoundingClientRect()
    setIndicator({
      left: b.left - c.left,
      top: b.top - c.top,
      width: b.width,
      height: b.height,
      visible: true
    })
  }

  useLayoutEffect(() => {
    measureAndSet(activeTab)
  }, [activeTab])

  useEffect(() => {
    const onResize = () => measureAndSet(hoverTab ?? activeTab)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeTab, hoverTab])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>,index : number) => {
    setActiveTab(index)
    setHoverTab(null)
    measureAndSet(index)
    if (onClick) onClick(e, index);
  }

  return (
    <div
      ref={containerRef}
      className='overflow-hidden h-fit w-fit p-1 rounded-xl bg-zinc-800 flex flex-wrap gap-1 relative'
      onMouseLeave={() => {
        setHoverTab(null)
        measureAndSet(activeTab)
      }}
    >
      {Tabs.map((tab, index) => (
        <div key={tab} className='flex items-center justify-center'>
          <button
            ref={el => {
              buttonRefs.current[index] = el
            }}
            className={clsx(
              'relative text-nowrap rounded-lg px-3 py-1.5 transition-all',
              'cursor-pointer font-medium'
            )}
            type='button'
            value={tab}
            onClick={(e) => handleClick(e,index)}
            onMouseEnter={() => {
              setHoverTab(index)
              measureAndSet(index)
            }}
          >
            {tab}
          </button>
          <span className='pointer-events-none absolute z-[1] font-medium text-nowrap'>
            {tab}
          </span>
        </div>
      ))}

      <motion.div
        className='absolute rounded-lg bg-zinc-700 pointer-events-none z-0'
        initial={false}
        animate={{
          left: indicator.left,
          top: indicator.top,
          width: indicator.width,
          height: indicator.height,
          opacity: indicator.visible ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{ willChange: 'left, top, width, height, opacity' }}
      />
    </div>
  )
}
