import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['i', 'y', 'u', 's', 'h']
  const jobArray = [
    'f', 'u', 'l', 'l', ' ',
    's', 't', 'a', 'c', 'k', ' ',
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

  useEffect(() => {
    (async () => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    })();
  }, []);

  const onButtonClick = () => {
    fetch('resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume.pdf';
            alink.click();
        })
    })
}

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Back End Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
            <button className="download-cv-button" onClick={onButtonClick}>Download CV</button>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home;
