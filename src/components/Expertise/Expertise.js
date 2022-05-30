import './Expertise.scss'
import HeadText from "../HeadText/HeadText"
import PercentageBar from '../PercentageBar/PercentageBar'

const Expertise = () => {
  return (
    <div className="expertise" id='expertise'>
        <HeadText subheading={'skill set'} heading={'expertise'} />
        <div className='expertise__content'>
            <PercentageBar value={80} text={'React JS'} />
            <PercentageBar value={75} text={'Node JS'} />
            <PercentageBar value={70} text={'Wordpress'} />
            <PercentageBar value={80} text={'Shopify'} />
            <PercentageBar value={80} text={'Python'} />
            <PercentageBar value={85} text={'PHP'} />
        </div>
    </div>
  )
}

export default Expertise