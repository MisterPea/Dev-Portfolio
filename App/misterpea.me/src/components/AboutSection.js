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
    if (currentTheme !== null) {
      setLocalTheme(currentTheme);
    }
  }, [currentTheme]);

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

  function linkedInButtonClick() {
    window.open("https://www.linkedin.com/in/perry-angelora/", '_blank');
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
              <p>Mister Pea is me, Perry Angelora, and this website is the home-base of my programmatical
                wares. I am a serial-creator, a player of pianos, maker of images and a lover of information.
                I&rsquo;m fond of JavaScript, Node, React, Redux, NoSQL, Docker…but I&rsquo;m not dogmatic
                about any particular stack; I appreciate simplicity and deliberateness.
              </p>
              <p
                className={`more-text ${moreText ? "visible" : "hidden"}`}
                style={{ height: `${moreText ? moreTextHeight.current : "0px"}` }}
              >Other, dare I say, interesting things about me: I earned my BFA from the
                <strong> University of Central Florida</strong> and my MFA from the <strong>Pratt Institute</strong>, Brooklyn.
                I&rsquo;ve been the recipient of the New York Foundation for the Arts Fellowship
                in Printmaking/Drawing/Book Arts and a finalist for the Alexander Rutsch Award
                for Painting. Check out my work history on <span role={"button"} className='span-link' onClick={linkedInButtonClick}>LinkedIn</span>, or my recent projects, below.
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