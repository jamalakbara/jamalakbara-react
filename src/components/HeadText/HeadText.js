import './HeadText.scss'

const HeadText = ({heading, subheading}) => {
  return (
    <div className='head'>
        <h2 className='subheading'>{subheading}</h2>
        <h1 className='heading'>{heading}</h1>
    </div>
  )
}

export default HeadText