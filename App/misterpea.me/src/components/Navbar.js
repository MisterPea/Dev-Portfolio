import * as React from 'react';
import { useEffect, useRef } from 'react';
import useTheme from '@hooks/useTheme';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';

export default function Navbar() {
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

  function handleHighlight(activeClass) {
    const rootStyle = document.documentElement.style;

    if (activeClass === 'landing-sec') {
      rootStyle.setProperty('--nav-line-width', '0px');
      rootStyle.setProperty('--nav-line-left', '0px');
      rootStyle.setProperty('--nav-line-opacity', 0);

    } else {
      const menuElement = document.getElementById(menuHash[activeClass]);
      const elementWidth = menuElement.offsetWidth;
      const elementLeft = menuElement.offsetLeft;

      rootStyle.setProperty('--nav-line-width', `${elementWidth}px`);
      rootStyle.setProperty('--nav-line-left', `${elementLeft}px`);
      rootStyle.setProperty('--nav-line-opacity', 1);
    }
  }

  const intersectCallback = (entries, observer) => {
    entries.forEach((entry) => (
      entry.isIntersecting && handleHighlight(entry.target.className.split(' ')[1])
    ));
  };

  const [toggleTheme, currentTheme] = useTheme();

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
    <div className='nav-bar'>
      <div
        id="landing-btn"
        role="button"
        onClick={handleLandingClick}
        className='site-title'>mister<span>pea</span>.me</div>
      <nav>
        <ul
          onClick={(e) => harvestClick(e)}
          className='nav-ul'>
          <li id="about-btn" role="button" tabIndex={0}>
            <p>about</p>
          </li>
          <li id="wares-btn" role="button" tabIndex={0}>
            <p>wares</p>
          </li>
          <li id="connect-btn" role="button" tabIndex={0}>
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