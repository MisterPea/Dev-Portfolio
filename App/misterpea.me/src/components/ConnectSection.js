import * as React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

export default function ConnectSection() {
  function buttonClick(route) {
    window.open(route, '_blank');
  }

  function renderEmail(){
    const decoded = []
    const sorted = ' !.:=?@Jabceghijlmnoprstuy'
    const numArray = [17, 8, 14, 16, 23, 19, 3, 13, 11, 16, 16, 19, 23, 13, 11, 21, 11, 6, 17, 14, 22, 23, 11, 21, 20, 11, 8, 2, 17, 11, 5, 22, 24, 9, 15, 11, 10, 23, 4, 7, 24, 22, 23, 0, 22, 8, 25, 14, 18, 12, 0, 13, 11, 16, 16, 19, 1]
      for (let i = 0; i < numArray.length; i += 1) {
        decoded.push(sorted[numArray[i]]);
    }
    return decoded.join('');
  }
  function emailClick(){
    return window.location.href = renderEmail();
  }
  return (
    <div className='section connect-sec'>
      <div className='lines top'></div>
      <div className='content-wrapper'>
        <h1 className='section-title'>say<br />
          hello:</h1>
        <ul>
          <li className="github-icon" onClick={() => buttonClick('https://github.com/MisterPea')}><AiOutlineGithub className='github-svg' /></li>
          <li className="linkedIn-icon" onClick={() => buttonClick('https://linkedin.com/in/perry-angelora')}><FaLinkedinIn className="linkedIn-svg" /></li>
          <li className='instagram-icon' onClick={() => buttonClick('https://www.instagram.com/_mister_pea/')}><AiOutlineInstagram className='instagram-svg' /></li>
          <li className='twitter-icon' onClick={() => buttonClick('https://twitter.com/perry_angelora')}><AiOutlineTwitter className='twitter-svg' /></li>
          <li className='email-icon'onClick={emailClick}><AiOutlineMail className='email-svg' /></li>
        </ul>
      </div>
      <div className='lines bottom'></div>
    </div>
  );
}
