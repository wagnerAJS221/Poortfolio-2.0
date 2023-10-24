import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitSquare,
  faHtml5,
  faJsSquare,
  faReact,
  faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

function About() {
  const [letterClass] = useState('text-animate')

  return (
    <>
      <div className="contianer about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              StrArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            As you may have seen on the home page, my name is Alex Wagner and I
            am a graduate from Boolean UK. I have training as a Fullstack
            Developer, although I am focused primarily on the Frontend.
          </p>
          <p>
            I am a aspiring Software developer/Wed designer who is passionate
            about tech and continuously amazed by what we can achieve with tech
            and how it can be used to improve the lives of thousands. That is
            certainly something I want to be apart of!
          </p>
          <p>
            My Current Tech Stack is React.Js, JavaScript,Vue.Js, HTML, CSS,
            Node.js and I experience working with expressSQL, AWS, OOP as well
            as Agile development techniques.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitSquare} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faVuejs} color="#5ED4F4" />
            </div>
          </div>
          <div className="techstack-icons">
            <div className="techStack1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="3x" />
            </div>
            <div className="techStack1">
              <FontAwesomeIcon icon={faVuejs} color="#5ED4F4" size="3x" />
            </div>
            <div className="ftechStack2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" size="3x" />
            </div>
            <div className="techStack3">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" size="3x" />
            </div>
            <div className="techStack4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size="3x" />
            </div>
            <div className="techStack5">
              <FontAwesomeIcon icon={faGitSquare} color="#EC4D28" size="3x" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
