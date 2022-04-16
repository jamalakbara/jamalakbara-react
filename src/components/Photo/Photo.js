import './Photo.scss'
import PhotoPict from '../../assets/img/photo.jpg'

const Photo = () => {
  return (
    <figure className='photo'>
        <img src={PhotoPict} alt='pict of me' />
    </figure>
  )
}

export default Photo