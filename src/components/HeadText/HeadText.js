import './HeadText.scss'

const HeadText = ({heading, subheading}) => {
  return (
    <div className='head'>
        <h2 className='subheading'>{subheading ? subheading : 'Subheading'}</h2>
        <h1 className='heading'>{heading ? heading : 'Heading'}</h1>
    </div>
  )
}

export default HeadText