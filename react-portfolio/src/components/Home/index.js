import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          {' '}
          Hi,
          <br /> I'm
          <img src={LogoTitle} alt="developer" />
          Alex
          <br />a Web developer
        </h1>
        <h2>
          I am a Fullstack developer who focus mainly on the Front end and I am
          also a passioante sportsman
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}
export default Home
