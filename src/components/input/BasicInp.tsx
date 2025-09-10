import { useEffect, useState } from 'react'
import clsx from 'clsx'
import type { ColorType, cornerType } from '../../types/btn.type'

const textColors: Record<ColorType, string> = {
  transparent : 'text-black',
  white: 'text-white',
  black: 'text-black',
  pink: 'text-pink-500',
  red: 'text-red-500',
  blue: 'text-blue-500',
  green: 'text-green-500',
  yellow: 'text-yellow-500',
  gray: 'text-gray-500',
  purple: 'text-purple-500'
}

const BasicInp = ({
  id = 'input',
  Border = true,
  Shadow = true,
  Color = 'white',
  Corner,
  Lable,
  className,
  ...rest
}: {
  id?: string
  Border?: boolean
  Shadow?: boolean
  Color?: ColorType
  Corner?: cornerType
  Lable?: string
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [cornerStyle, setCorner] = useState<string>('rounded-md')

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
    <div className='flex flex-col'>
      {Lable && <label htmlFor={id}>{Lable}</label>}
      <input
        id={id}
        name={id}
        type='text'
        {...rest}
        className={clsx(
          'min-w-[220px] max-w-3xs outline-0 px-4 py-2.5 text-sm',
          Border && 'border-[1.5px]',
          !Shadow && 'skip-focus',
          textColors[Color],
          cornerStyle,
          className
        )}
      />
    </div>
  )
}

export default BasicInp
