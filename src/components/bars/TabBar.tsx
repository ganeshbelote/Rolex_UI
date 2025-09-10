import type { ReactNode } from 'react'
import React from 'react'
import { matchPath, useLocation } from 'react-router-dom'

interface ChildProps {
  Content: string
  Active?: boolean
  to?: string
}

const TabBar = ({ children }: { children: ReactNode }) => {
  const location = useLocation()

  return (
    <div className='rounded-4xl h-16 w-fit bg-gradient-to-br from-zinc-900 to-black px-6 flex gap-3 items-center justify-between'>
      {React.Children.map(children, child => {
        if (React.isValidElement<ChildProps>(child)) {
          const childPath = child.props.to
          let isActive = false
          if (childPath) {
            if (childPath === '/') {
              isActive = location.pathname === '/'
            } else {
              isActive = !!matchPath(
                { path: childPath as string, end: false },
                location.pathname
              )
            }
          }
          return React.cloneElement(child, {
            Active: isActive
          })
        }
        return child
      })}
    </div>
  )
}

export default TabBar
