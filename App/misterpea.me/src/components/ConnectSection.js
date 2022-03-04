import * as React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

export default function ConnectSection() {
  return (
    <div className='section connect-sec'>
      <div className='lines top'></div>
      <div className='content-wrapper'>
        <h1 className='section-title'>say<br />
          hello:</h1>
        <ul>
          <li className="github-icon"><AiOutlineGithub className="github-svg" /></li>
          <li className="linkedIn-icon"><FaLinkedinIn className="linkedIn-svg" /></li>
          <li className='instagram-icon'><AiOutlineInstagram className='instagram-svg' /></li>
          <li className='twitter-icon'><AiOutlineTwitter className='twitter-svg' /></li>
          <li className='email-icon'><AiOutlineMail className='email-svg' /></li>
        </ul>
      </div>
      <div className='lines bottom'></div>
    </div>
  );
}