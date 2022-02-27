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

  const [toggleTheme, currentTheme] = useTheme();
  useEffect(() => {
    const sectionClasses = document.querySelectorAll('.section');
    const navArray = Object.keys(navElement.current);
    for (let i = 0; i < navArray.length; i += 1) {
      navElement.current[navArray[i]] = sectionClasses[i].className.split(' ')[1];
    }
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
        role="button"
        onClick={handleLandingClick}
        className='site-title'>mister<span>pea</span>.me</div>
      <nav>
        <ul
          onClick={(e) => harvestClick(e)}
          className='nav-ul'>
          <li role="button" tabIndex={0}>
            <p>about</p>
          </li>
          <li role="button" tabIndex={0}>
            <p>wares</p>
          </li>
          <li role="button" tabIndex={0}>
            <p>connect</p>
          </li>
          <li role="button" tabIndex={0} onClick={toggleTheme}>{
            currentTheme === "light" ?
              <BsFillMoonFill className='theme-icon' /> :
              <BsSun className='theme-icon' />
          }</li>
        </ul>
      </nav>
    </div>
  );
}