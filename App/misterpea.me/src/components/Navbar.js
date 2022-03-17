import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';

export default function Navbar({ currentTheme, toggleTheme }) {
  let highlight = null;

  const navElement = useRef({
    landing: null,
    about: null,
    wares: null,
    connect: null,
  });

  const intersect = useRef({
    landing: null,
    about: null,
    wares: null,
    connect: null,
  });

  const menuHash = {
    'landing-sec': 'landing-btn',
    'about-sec': 'about-btn',
    'wares-sec': 'wares-btn',
    'connect-sec': 'connect-btn',
  };

  const intersectOptions = {
    root: null,
    threshold: 0.4,
  };

  // This method handles the movement of the box around the menu items
  function handleHighlight(activeId) {
    const rootStyle = document.documentElement.style;

    if (activeId === 'landing-sec') {
      rootStyle.setProperty('--nav-line-width', '0px');
      rootStyle.setProperty('--nav-line-left', '0px');
      rootStyle.setProperty('--nav-line-opacity', 0);
      if (highlight) {
        const previous = document.getElementById(highlight);
        previous.classList.remove('active');
      }

    } else {
      const menuElement = document.getElementById(menuHash[activeId]);
      const elementWidth = menuElement.offsetWidth;
      const elementLeft = menuElement.offsetLeft;

      rootStyle.setProperty('--nav-line-width', `${elementWidth}px`);
      rootStyle.setProperty('--nav-line-left', `${elementLeft}px`);
      rootStyle.setProperty('--nav-line-opacity', 1);

      // Deal with highlighting menu text
      const active = document.getElementById(menuHash[activeId]);
      if (highlight) {
        const previous = document.getElementById(highlight);
        previous.classList.remove('active');
      }

      active.classList.add('active');
      highlight = active.id;
    }
  }

  const intersectCallback = (entries, observer) => {
    entries.forEach((entry) => (
      entry.isIntersecting && handleHighlight(entry.target.className.split(' ')[1])
    ));
  };

  useEffect(() => {
    const sectionClasses = document.querySelectorAll('.section');
    const navArray = Object.keys(navElement.current);
    for (let i = 0; i < navArray.length; i += 1) {
      navElement.current[navArray[i]] = sectionClasses[i].className.split(' ')[1];
    }

    intersect.current['landing'] = document.querySelector('.landing-sec');
    intersect.current['about'] = document.querySelector('.about-sec');
    intersect.current['wares'] = document.querySelector('.wares-sec');
    intersect.current['connect'] = document.querySelector('.connect-sec');

    const observer = new IntersectionObserver(intersectCallback, intersectOptions);
    observer.observe(intersect.current.landing);
    observer.observe(intersect.current.about);
    observer.observe(intersect.current.wares);
    observer.observe(intersect.current.connect);
  }, []);


  function handleLandingClick() {
    document.querySelector('.sections-wrapper').scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function harvestClick(e) {
    const scrollBody = document.querySelector('.sections-wrapper');
    const position = e.target?.firstChild?.data ?? undefined;
    if (position) {
      const yPosition = document.querySelector(`.${navElement.current[position]}`).offsetTop;
      scrollBody.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div
      className='nav-bar'>
      <div
        id="landing-btn"
        role="button"
        onClick={handleLandingClick}
        className='site-title'>mister<span>pea</span>.me</div>
      <nav>
        <ul
          onClick={(e) => harvestClick(e)}
          className='nav-ul'
        >
          <li className='nav-button' id="about-btn" role="button" tabIndex={0}>
            <p>about</p>
          </li>
          <li className='nav-button' id="wares-btn" role="button" tabIndex={0}>
            <p>wares</p>
          </li>
          <li className='nav-button' id="connect-btn" role="button" tabIndex={0}>
            <p>connect</p>
          </li>
          <li role="button" tabIndex={0} onClick={toggleTheme}>{
            currentTheme === "light" ?
              <BsFillMoonFill className='theme-icon moon' /> :
              <BsSun className='theme-icon' />
          }</li>
        </ul>
      </nav>
    </div>
  );
}