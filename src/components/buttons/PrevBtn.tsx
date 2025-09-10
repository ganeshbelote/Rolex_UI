import clsx from 'clsx'
import { useState } from 'react'

const PrevBtn = ({
  className,
  Shadow,
  Border,
  ...rest
}: {
  className?: string
  Shadow?: boolean
  Border?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <div>
      <button
        {...rest}
        className={clsx(
          'h-12 w-12 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-950 cursor-pointer active:scale-95 text-2xl',
          Border || 'border-[1.2px] border-white',
          Shadow && 'shadow-[0_1px_8px_-4px_rgba(0,0,0,0.25)] shadow-white',
          hover && 'scale-102' ,
          className
        )}
        type='button'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {'<'}
      </button>
    </div>
  )
}

export default PrevBtn
