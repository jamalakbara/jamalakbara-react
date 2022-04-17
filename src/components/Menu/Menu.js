import './Menu.scss'

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
                <a key={menu.name} href={menu.path} className="menu__link">{menu.name}</a>
            ))
        }
    </div>
  )
}

export default Menu