import * as React from 'react';
import {AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail, AiOutlineGithub} from 'react-icons/ai';

export default function ConnectSection() {
  return (
    <div className='section connect-sec'>
      <div className='lines top'></div>
      <h1 className='section-title'>say hello:</h1>
      <ul>
        <li><AiOutlineGithub /></li>
        <li><AiOutlineInstagram /></li>
        <li><AiOutlineTwitter /></li>
        <li><AiOutlineMail /></li>
      </ul>
      <div className='lines bottom'></div>
    </div>
  );
}