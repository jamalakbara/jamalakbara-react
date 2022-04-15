import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import './Header.scss'
import Socials from '../Socials/Socials'

const Header = () => {
  return (
    <nav className='nav'>
        <Logo />
        <Menu />
        <Socials />
    </nav>
  )
}

export default Header