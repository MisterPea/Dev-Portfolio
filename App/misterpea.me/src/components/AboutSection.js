import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [moreText, setMoreText] = useState(false);
  const [hover, setHover] = useState(false);
  const moreTextHeight = useRef(0);

  useEffect(() => {
    moreTextHeight.current = `${document.querySelector('.more-text').scrollHeight}px`
  });
  
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
        <h1 className='section-title'>about:</h1>
        <div className='section-text-wrapper'>
        <div className='image'></div>
          <div className='section-text'>
            <p>Mister Pea is me, Perry Angelora, and this website is the home-base
              of my programmatical wares. I am a serial-creator, a player of pianos,
              maker of images and a lover of information.
            </p>
            <p
              className={`more-text ${moreText ? "visible" : "hidden"}`}
              style={{height: `${moreText ? moreTextHeight.current : "0px"}`}}
            >I earned my BFA from the University of Central Florida and my
              MFA from the Pratt Institute, Brooklyn. I&rsquo;ve been the recipient of the New York
              Foundation for the Arts Fellowship in Printmaking/Drawing/Book Arts and a finalist for
              the Alexander Rutsch Award for Painting. I&rsquo;ve held various positions in a variety
              of venues, from consulting, to publishing, to freelance.
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
      <div className='lines bottom' />
    </div>
  );
}