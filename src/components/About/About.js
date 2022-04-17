import './About.scss'
import HeadText from '../HeadText/HeadText'
import Paragraph from '../Paragraph/Paragraph'
import AboutContent from '../AboutContent/AboutContent'

const About = () => {
  return (
    <div className='about' id='about'>
        <AboutContent>
            <HeadText subheading={'Myself'} />
            <Paragraph>
                Hello! I’m <b>Akbar</b> a <b>Web Developer</b> with almost <b>two years</b> work experience. Love the programming world especially web programming. I work closely with my clients to deliver the best possible solutions for their needs
            </Paragraph>
        </AboutContent>
        <AboutContent>
            <HeadText subheading={'Skills'} />
            <Paragraph>
                To support my work, I master some element that needed in programming, such as
                <ul>
                    <li>React JS</li>
                    <li>Node JS</li>
                    <li>Wordpress</li>
                    <li>Shopify</li>
                    <li>Python</li>
                    <li>PHP</li>
                </ul>
            </Paragraph>
        </AboutContent>
    </div>
  )
}

export default About