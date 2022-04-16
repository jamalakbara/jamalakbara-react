import { Link } from 'react-router-dom'
import './Button.scss'

const Button = ({to, label, color}) => {
  return (
    <Link to={to} className={color === 'orange' ? 'button-orange' : 'button-transparent'}>{label}</Link>
  )
}

export default Button