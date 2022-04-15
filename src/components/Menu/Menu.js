import './Menu.scss'
import { Link } from "react-router-dom";

const menus = [
    {
        path: '#',
        name: 'home'
    },
    {
        path: '#about',
        name: 'about'
    },
    {
        path: '#expertise',
        name: 'expertise'
    },
    {
        path: '#services',
        name: 'services'
    },
    {
        path: '#portofolio',
        name: 'portofolio'
    },
    {
        path: '#contact',
        name: 'contact'
    },
]

const Menu = () => {
  return (
    <div className='menu'>
        {
            menus.map(menu => (
                <Link key={menu.name} to={menu.path} className="menu__link">{menu.name}</Link>
            ))
        }
    </div>
  )
}

export default Menu