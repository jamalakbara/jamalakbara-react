import './Socials.scss'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const Socials = ({socials}) => {
  
  return (
    <div className='socials'>
      {
        socials.map(social => (
          <Link className='socials__social' key={social.name} to={`/${social.name}`} target="_blank">
            {social.icon}
          </Link>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    socials: state.socials
  }
}

export default connect(mapStateToProps)(Socials)