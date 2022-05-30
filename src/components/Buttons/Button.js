import './Button.scss'

const Button = ({to, label, color}) => {
  return (
    <a href={to} className={color === 'orange' ? 'button-orange' : 'button-transparent'}>{label}</a>
  )
}

export default Button