import './Paragraph.scss'

const Parahraph = ({children}) => {
  return (
    <div className='paragraph'>
        <p>{children}</p>
    </div>
  )
}

export default Parahraph