import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import ExternalLink from '../components/ExternalLink/ExternalLink'
import { BASE_ROUTE } from '../routes'

const Navigation = ({socials}) => {
  return (
    <Router>
        <Routes>
            {
                BASE_ROUTE.map((route,i) => (
                    <Route path={route.path} key={i} element={route.element} />    
                ))
            }
            {socials.length && socials.map(social => (
                <Route path={social.name} key={social.name} element={<ExternalLink url={social.url} />} />
            ))}
        </Routes>
    </Router>
  )
}

const mapStateToProps = (state) => {
    return {
        socials: state.socials
    }
}

export default connect(mapStateToProps)(Navigation)