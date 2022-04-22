import * as React from 'react';
import AboutImageCanvas from './Canvas';

import { useState, useEffect, useRef } from 'react';

export default function AboutSection({ currentTheme }) {
  const [localTheme, setLocalTheme] = useState(currentTheme);
  const [moreText, setMoreText] = useState(false);
  const [hover, setHover] = useState(false);
  const moreTextHeight = useRef(0);

  useEffect(() => {
    moreTextHeight.current = `${document.querySelector('.more-text').scrollHeight}px`;
  });

  useEffect(() => {
    const aboutText = document.querySelector('.section-text');
    const sectionWrap = document.querySelector('.sections-wrapper');
    const aboutHeight = document.querySelector('.about-content-wrapper').scrollHeight

    if (aboutText && sectionWrap) {
      const checkAboutLocation = () => {
      
        const intersectTest = (aboutText.offsetTop - sectionWrap.scrollTop + (aboutHeight * 0.4)) < -0;
        if (intersectTest && moreText === true) {
          setMoreText(false);
        }
      };
      window.addEventListener('scroll', checkAboutLocation, true);
    }


    return () => {
      window.removeEventListener('scroll', checkAboutLocation, true);
    };


  }, [moreText]);

  useEffect(() => {
    if (currentTheme !== null) {
      setLocalTheme(currentTheme);
    }
  }, [currentTheme]);

  const mainText = "Mister Pea is me, Perry Angelora, and this website is the home-base of my programmatical wares. I’m a serial-creator and iterator of ideas. Stack-wise, I’m partial to JavaScript (if only for its ubiquity and versatility) as well as React, Node, Redux, NoSQL and Docker. Overall I appreciate simplicity, deliberateness, and finding the right tool for the job.";
  const moreTextContent = "Some other tidbits: I earned my BFA from the University of Central Florida and my MFA from the Pratt Institute, Brooklyn. I’ve been the recipient of the New York Foundation for the Arts Fellowship in Printmaking/Drawing/Book Arts and a finalist for the Alexander Rutsch Award for Painting.";

  function handleTextToggle() {
    setMoreText((s) => !s);
  }

  function handleMouseOver() {
    if (!hover) {
      setHover(true);
    }
  }

  function handleMouseOut() {
    if (hover) {
      setHover(false);
    }
  }

  return (
    <div className='section about-sec'>
      <div className='lines top' />
      <div className='main-content'>
        <div className='about-content-wrapper'>
          <h1 className='section-title'>about:</h1>
          <div className='section-text-wrapper'>
            <div key="profile-image" className='image'>{
              localTheme === 'dark' ?
                <AboutImageCanvas key="dark" darkMode={true} /> :
                <AboutImageCanvas key="light" darkMode={false} />
            }</div>
            <div className='section-text' role="document">
              <p>{mainText}</p>
              <p
                className={`more-text ${moreText ? "visible" : "hidden"}`}
                style={{ height: `${moreText ? moreTextHeight.current : "0px"}` }}
              >{moreTextContent}
              </p>
              <div
                onClick={handleTextToggle}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                typeof='button'
                className={`more-button ${hover ? "hover" : ""}`}>
                {moreText ? <p className={moreText ? "less" : ""}><span>←</span>less</p> : <p className={moreText ? "" : "more"}>more<span>→</span></p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lines bottom' />
    </div>
  );
}