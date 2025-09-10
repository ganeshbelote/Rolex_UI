import type { ReactNode } from 'react'
import type { BgColorType, ColorType } from '../../types/btn.type'
import BasicBtn from '../buttons/BasicBtn'

const bgColors: Partial<Record<BgColorType, string>> = {
  transparent : 'bg-black',
  white: 'bg-white',
  black: 'bg-black',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  green: 'bg-green-500',
  pink: 'bg-pink-500',
  yellow: 'bg-yellow-500',
  gray: 'bg-gray-500',
  purple: 'bg-purple-500'
}

const textColors: Partial<Record<ColorType, string>> = {
  transparent : 'text-white',
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

const Tooltip = ({
  Color = 'white',
  BackgroundColor = 'black',
  Content = 'Content',
  children = <BasicBtn Content='Button'/>
}: {
  Content: string
  Color?: ColorType
  BackgroundColor?: BgColorType
  children? : ReactNode
}) => {
  return (
    <div className='w-fit flex items-center justify-center'>
      <div className='link text-nowrap px-3 py-1.5 transition-all'>
        {children}
        <div className={`tooltip ${textColors[Color]} ${bgColors[BackgroundColor]}`}>{Content}</div>
      </div>
    </div>
  )
}

export default Tooltip
