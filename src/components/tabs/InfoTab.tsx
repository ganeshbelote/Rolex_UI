import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const InfoTab = ({
  Href,
  Heading = 'Heading',
  Description = 'Description',
  Border,
  Shadow,
  className,
  ...rest
}: {
  Href?: string
  Heading: string
  Description: string
  Border?: boolean
  className?: string
  Shadow?: boolean
} & React.HTMLAttributes<HTMLDivElement>) => {
  const [hover, setHover] = useState<boolean>(false)
  const navigate = useNavigate()

  return (
    <div
      {...rest}
      className={`cursor-pointer relative flex-shrink-0 p-4 w-[288px]  rounded-xl active:scale-99 transition-all ${
        hover
          ? 'bg-zinc-900 scale-101'
          : 'bg-gradient-to-br from-zinc-900 to-black'
      } ${Border && 'border-[1px] border-zinc-600'} ${
        Shadow && 'shadow-[0_1px_8px_-4px_rgba(0,0,0,0.25)] shadow-white'
      } ${className}`}
      onClick={() => {
        if (Href && location.pathname !== Href) {
          navigate(Href)
        }
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 className='font-medium'>
        {Heading.split('').length <= 28
          ? Heading
          : Heading.slice(0, 25).padEnd(27, '.')}
      </h2>
      <p className='mt-0.5 text-xs text-zinc-400'>
        {Description.split('').length <= 38
          ? Description
          : Description.slice(0, 35).padEnd(38, '.')}
      </p>
      <div className='h-4 w-4 border-[1.2px] border-white rounded-full absolute right-4 bottom-3 flex items-center justify-center'>
        <span className='text-[0.5rem] text-center'>{'>'}</span>
      </div>
    </div>
  )
}

export default InfoTab
