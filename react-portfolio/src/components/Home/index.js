import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['A', 'l', 'e', 'x']
  const jobArray = [
    'w',
    'e',
    'b',
    '',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          {' '}
          Hi I'm <br />
          <AnimatedLetters
            letterClass={letterClass}
            StrArray={nameArray}
            idx={15}
          />
          ,
          <br />a Web developer
        </h1>
        <h2>
          I am a Fullstack developer who focus mainly on the Frontend and
          React.js is the name of my game
        </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}
export default Home
