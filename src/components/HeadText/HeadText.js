import './HeadText.scss'

const HeadText = ({heading, subheading}) => {
  return (
    <div className='head'>
        {subheading && <h2 className='subheading'>{subheading}</h2>}
        {heading && <h1 className='heading'>{heading}</h1>}
    </div>
  )
}

export default HeadText