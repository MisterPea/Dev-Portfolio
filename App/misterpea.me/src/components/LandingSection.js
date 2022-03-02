import * as React from 'react';

export default function LandingSection() {
  return (
    <div className='section landing-sec'>
      <div className='lines top'></div>
      <div className='text-wrapper'>
        <div className='logo-large'>
          <h1>Perry</h1>
          <h1>Angelora</h1>
        </div>
        <div className='tagline'>
          <div className='tagline-wrapper'>
            <p>Developer; polymath; autodidact;</p>
            <p> user of ostentatious words.</p>
          </div>
        </div>
      </div>
      <div className='lines bottom'></div>
    </div>
  );
}