import type { onToggleType } from '../../types/menubtn.type'
import type { MenuOptionType } from '../../types/nav.type'
import BasicBtn from '../buttons/BasicBtn'
import MenuBtn from '../navigation/MenuBtn'
import NavigationMenu from '../navigation/NavigationMenu'

const NavBar = ({ onToggle , Menu }: { Menu: MenuOptionType[], onToggle?: onToggleType }) => {
  return (
    <div className='w-full relative flex flex-col items-center'>
      <div className='basic-navbar rounded-b-xl h-16 w-full bg-gradient-to-br from-zinc-900 to-black px-6 flex items-center justify-between'>
        <div className='logo'>
          <h1 className='text-2xl font-bold'>Logo</h1>
        </div>
        <NavigationMenu Menu={Menu} />
        <BasicBtn Border={true} Content='Contact us' className='hidden md:block lg:block'/>
        <MenuBtn Border={false} className='md:hidden lg:hidden' onToggle={onToggle}/>
      </div>
    </div>
  )
}

export default NavBar
