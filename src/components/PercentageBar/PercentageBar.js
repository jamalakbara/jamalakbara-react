import './PercentageBar.scss'
import ProgressBar from 'react-animated-progress-bar';
import HeadText from '../HeadText/HeadText';

const PercentageBar = ({value, text}) => {

    return (
        <div className='percentage'>
            <HeadText heading={text}/>
            <ProgressBar
                width="100%"
                height="10px"
                rect
                fontColor="gray"
                percentage={value - 1}
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="rgba(255,255,255,.3)"
                trackBorderColor="transparent"
                defColor={{
                    fair: '#e1a34c',
                    good: '#e1a34c',
                    excellent: '#e1a34c',
                    poor: '#e1a34c',
                  }}
            />
        </div>
    )
}

export default PercentageBar