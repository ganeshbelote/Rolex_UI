import { NavLink, useLocation } from 'react-router-dom'
import type { Crumb } from '../../types/breadcrum.type'

const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(Boolean)

  const Items: Crumb[] = pathnames.map((value, index) => {
    const path = '/' + pathnames.slice(0, index + 1).join('/')
    return {
      label: value.charAt(0).toUpperCase() + value.slice(1),
      path,
    }
  })

  const crumbs = [{ label: 'Home', path: '/' }, ...Items]
  
  return (
    <nav className='flex flex-wrap text-sm text-gray-600'>
      {crumbs.map((item, index) => (
        <span key={index} className='flex items-center'>
          <NavLink
            to={item.path}
            end  
            className={({ isActive }) =>
              `${(isActive || index == crumbs.length - 1) && 'underline font-medium'} 
     hover:underline hover:font-medium transition-all text-zinc-400`
            }
          >
            {item.label}
          </NavLink>
          {index < crumbs.length - 1 && <span className='mx-2'>{'>'}</span>}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
