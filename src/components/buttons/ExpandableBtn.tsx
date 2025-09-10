import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  User,
  Search,
  ShoppingCart,
  Info,
  Phone,
  Settings,
  LogIn,
  LogOut,
  HelpCircle,
  ChevronRight
} from 'lucide-react'
import type { BgColorType, ColorType } from '../../types/btn.type'
import { useNavigate } from 'react-router-dom'
import type { onToggleType } from '../../types/menubtn.type'

const NavIcons = {
  Home: <Home className='w-5 h-5' />,
  Profile: <User className='w-5 h-5' />,
  Search: <Search className='w-5 h-5' />,
  Cart: <ShoppingCart className='w-5 h-5' />,
  About: <Info className='w-5 h-5' />,
  Contact: <Phone className='w-5 h-5' />,
  Settings: <Settings className='w-5 h-5' />,
  Login: <LogIn className='w-5 h-5' />,
  Logout: <LogOut className='w-5 h-5' />,
  Help: <HelpCircle className='w-5 h-5' />,
  ChevronRight: <ChevronRight className='w-5 h-5' />
} as const

const bgColors: Record<BgColorType, string> = {
  transparent: 'bg-transparent',
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

type NavIconType = keyof typeof NavIcons

const ExpandableBtn = ({
  Active = false,
  onToggle,
  to,
  NavIcon = 'ChevronRight',
  Content = 'Content',
  Color = 'white',
  BackgroundColor = 'transparent',
  Shadow,
  Border
}: {
  Active?: boolean
  onToggle?: onToggleType
  to?: string
  NavIcon?: NavIconType
  Content?: string
  Color?: ColorType
  BackgroundColor?: BgColorType
  Shadow?: boolean
  Border?: boolean
}) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    setExpanded(Active)
  }, [Active])

  const determineWidth = () => {
    if (!Content?.length) {
      setExpanded(false)
      return 50
    }
    const base = 70
    const perChar = 10.4
    return base + (Content?.length ?? 0) * perChar
  }

  return (
    <motion.button
      onClick={() => {
        onToggle?.(!expanded)
        setExpanded(!expanded)
        if (to && location.pathname !== to) {
          navigate(to)
        }
      }}
      className={`cursor-pointer h-[50px] flex gap-2 items-center justify-center ${
        bgColors[BackgroundColor]
      } ${textColors[Color]} ${
        Border && 'border-[1.5px]'
      } rounded-full px-4 py-2 overflow-hidden shadow-md`}
      style={{
        boxShadow: Shadow
          ? `0 1px 8px -4px ${Color}`
          : '0 1px 8px -4px rgba(0,0,0,0.25)'
      }}
      type='button'
      animate={{ width: expanded || Active ? (determineWidth() as number) : 50 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <motion.span
        className='w-5 h-5 flex items-center justify-center flex-shrink-0'
        animate={{ x: expanded || Active ? [0, -10, 10, -6, 6, -3, 3, 0] : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        {NavIcons[NavIcon]}
      </motion.span>
      { (to ? Active : expanded) && (
        <motion.span
          className='whitespace-nowrap font-medium'
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
        >
          {Content}
        </motion.span>
      )}
    </motion.button>
  )
}

export default ExpandableBtn
