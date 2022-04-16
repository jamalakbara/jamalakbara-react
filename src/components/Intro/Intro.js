import './Intro.scss'
import Photo from '../Photo/Photo'
import HeadText from '../HeadText/HeadText'
import Paragraph from '../Paragraph/Paragraph'
import Button from '../Buttons/Button'

const Intro = () => {
  return (
    <div className='intro'>
        <Photo />

        <div className='intro__main'>
            <HeadText subheading={'- Web Developer'} heading={'Jamal Akbar Alam'} />

            <Paragraph text= {'Successful Web Developer offering a year of experience in demanding environments focused on producing cutting-edge systems. Skilled in directing development with creative and performance-oriented approach. Well-organized and customer-focused'} />
            
            <Button to={'#about'} label={'About Me'} color={'transparent'} />
        </div>
    </div>
  )
}

export default Intro