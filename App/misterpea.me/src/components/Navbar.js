import * as React from 'react';
import useTheme from '@hooks/useTheme';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';

export default function Navbar() {

  const [toggleTheme, currentTheme] = useTheme();

  return (
    <div className='nav-bar'>
      <div className='site-title'>mister<span>pea</span>.me</div>
      <nav>
        <ul className='nav-ul'>
          <li role="button" tabIndex={0}>about</li>
          <li role="button" tabIndex={0}>wares</li>
          <li role="button" tabIndex={0}>connect</li>
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