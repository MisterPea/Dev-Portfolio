import * as React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

export default function ConnectSection() {
  function buttonClick(route) {
    window.open(route, '_blank');
  }

  function renderEmail() {
    const decoded = [];
    const sorted = ' _:!?.@=abceghijJlmnoprstuy';
    const numArray = [
      18,  8, 14, 17, 24, 20,  2, 13, 11, 17, 17, 20,
       1, 24, 13, 11, 22, 11,  6, 18, 14, 23, 24, 11,
      22, 21, 11,  8,  5, 18, 11,  4, 23, 25,  9, 15,
      11, 10, 24,  7, 16, 25, 23, 24,  0, 23,  8, 26,
      14, 19, 12,  0, 13, 11, 17, 17, 20,  3
    ];
    for (let i = 0; i < numArray.length; i += 1) {
      decoded.push(sorted[numArray[i]]);
    }0
    return decoded.join('');
  }
  function emailClick() {
    return window.location.href = renderEmail();
  }
  
  return (
    <div className='section connect-sec'>
      <div className='lines top'></div>
      <div className='content-wrapper'>
        <h1 className='section-title'>say<br />
          hello:</h1>
        <ul>
          <li className="github-icon" onClick={() => buttonClick('https://github.com/MisterPea')}>
            <AiOutlineGithub className='github-svg' />
          </li>
          <li className="linkedIn-icon" onClick={() => buttonClick('https://linkedin.com/in/perry-angelora')}>
            <FaLinkedinIn className="linkedIn-svg" />
          </li>
          <li className='instagram-icon' onClick={() => buttonClick('https://www.instagram.com/_mister_pea/')}>
            <AiOutlineInstagram className='instagram-svg' />
          </li>
          <li className='twitter-icon' onClick={() => buttonClick('https://twitter.com/perry_angelora')}>
            <AiOutlineTwitter className='twitter-svg' />
          </li>
          <li className='email-icon' onClick={emailClick}>
            <AiOutlineMail className='email-svg' />
          </li>
        </ul>
      </div>
      <div className='lines bottom'></div>
    </div>
  );
}
