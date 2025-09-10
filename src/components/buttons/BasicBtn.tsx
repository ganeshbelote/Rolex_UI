import { useEffect, useState } from 'react'
import type { btnType, cornerType } from '../../types/btn.type'
import clsx from 'clsx'

const BasicBtn = ({
  Content = 'Button',
  Type,
  Shadow,
  Border,
  Corner,
  className,
  ...rest
}: {
  Content: string
  Type?: btnType
  Shadow?: boolean
  Border?: boolean
  Corner?: cornerType
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [cornerStyle, setCorner] = useState<string>('rounded-md')
  const [hover, setHover] = useState<boolean>(false)

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

  return (
    <div>
      <button
        {...rest}
        className={clsx(
          'text-nowrap px-3 py-1.5 transition-all',
          cornerStyle,
          Shadow && 'shadow-[0_1px_8px_-4px_rgba(0,0,0,0.25)] shadow-white',
          Border && 'border-[1.2px]',
          'cursor-pointer active:scale-95 font-medium',
          hover ? 'hover-effect' : 'bg-gradient-to-r from-zinc-900 to-zinc-950',
          className
        )}
        type={Type ? Type : 'button'}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {Content}
      </button>
    </div>
  )
}

export default BasicBtn
