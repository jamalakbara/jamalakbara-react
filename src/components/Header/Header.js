import Menu from '../Menu/Menu'
import Logo from '../Logo/Logo'
import './Header.scss'
import Socials from '../Socials/Socials'
import { useEffect, useState } from 'react'

const Header = () => {
  const [transparent, setTransparent] = useState(true)

  const handleNavigation = () => {
    if (window.scrollY > 25) {
      setTransparent(false)
    }
    else{
      setTransparent(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation)
  }, [])
  
  
  return (
    <nav className={`nav ${!transparent && 'nav--scrolled'}`}>
        <Logo />
        <Menu />
        <Socials />
    </nav>
  )
}

export default Header