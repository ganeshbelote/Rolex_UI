import clsx from 'clsx'
import type { sizeBtnType } from '../../types/btn.type'
import { useEffect, useState } from 'react'

const RoundedBtn = ({
  Src,
  className,
  Size = 'normal',
  Shadow,
  Border,
  ...rest
}: {
  Src: string
  className?: string
  Size?: sizeBtnType
  Shadow?: boolean
  Border?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [btnSize, setBtnSize] = useState<string>('h-12 w-12')
  const [hover, setHover] = useState<boolean>(false)

  useEffect(() => {
    switch (Size) {
      case 'normal':
        break
      case 'small':
        setBtnSize('h-8 w-8')
        break
      case 'large':
        setBtnSize('h-16 w-16')
        break
    }
  }, [Size])

  return (
    <div>
      <button
        {...rest}
        className={clsx(
          btnSize,
          'rounded-full bg-gradient-to-r from-zinc-900 to-zinc-950 cursor-pointer active:scale-95 text-2xl flex items-center justify-center',
          Border || 'border-[1.2px] border-white',
          Shadow && 'shadow-[0_1px_8px_-4px_rgba(0,0,0,0.25)] shadow-white',
          hover && 'scale-102',
          className
        )}
        type='button'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          className='h-1/2'
          src={Src}
          alt='Image Src provided by user'
          draggable={false}
        />
      </button>
    </div>
  )
}

export default RoundedBtn
