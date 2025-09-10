import clsx from 'clsx'
import { useState } from 'react'
import type { OptionProps } from '../../types/selectOption.type'

const Option = ({ value, children, Active = false, onClick }: OptionProps) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className={clsx(
        'overflow-hidden relative flex flex-col items-center justify-center cursor-pointer w-full px-6 py-1.5 rounded-md bg-gradient-to-r from-zinc-800 to-zinc-950 font-medium text-center'
      )}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role='option'
      aria-selected={Active}
      data-value={value}
    >
      <span
        className={clsx(
          'z-[1] relative max-w-[360px] transition-all duration-200 ease-in-out',
          hover || Active ? 'text-black' : 'text-white'
        )}
      >
        {children}
      </span>
      <div
        className={clsx(
          'absolute w-full h-full rounded-md bg-white transition-all duration-200 ease-in-out',
          hover || Active ? 'top-0 opacity-100' : '-top-[105%] opacity-0'
        )}
      ></div>
    </div>
  )
}

export default Option
