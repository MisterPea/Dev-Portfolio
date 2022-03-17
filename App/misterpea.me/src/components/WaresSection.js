import * as React from 'react';
import { MdArrowForward } from 'react-icons/md';
import {SiNpm} from 'react-icons/si';
import Image from 'next/image';

export default function WaresSection() {

  function buttonClick(route) {
    window.open(route, '_blank');
  }

  return (
    <div className='section wares-sec'>
      <div className='lines top'></div>
      <div className='content-wrapper'>
        <h1 className='section-title'>wares:</h1>
        <ul>
          <li>
            <div className='text-side'>
              <h3>S3-UI</h3>
              <p>A full-stack UI for AWS&rsquo;s Simple Storage Service.</p>
              <p className='extra-text'>Features include: creation/deletion of buckets and folders.
                Upload/download/delete files through a dialog or drag and drop.
                Breadcrumb folder navigation, automatic renaming on files with the same name.
                Bucket and folder navigation is done via query string; allowing bookmarking and sharing.</p>
              <div className='wares-button-wrapper'>
                <button onClick={() => buttonClick('http://s3ui.misterpea.me')}>
                  <h4>Launch Project</h4>
                  <div className='wares-arrow-icon'><MdArrowForward /></div>
                </button>
                <button onClick={() => buttonClick('https://github.com/MisterPea/s3-ui')}>
                  <h4>View on GitHub</h4>
                  <div className='wares-arrow-icon'><MdArrowForward /></div>
                </button>
              </div>
            </div>
            <div className='image-side'></div>
          </li>
          <li>
            <div className='text-side'>
              <h3>Ny Times Aggregator & Daily email subscription</h3>
              <p>NYT api integration for Top Stories, with the ability for a daily email.</p>
              <p className='extra-text' >An implementation of The NY Times Top Stories API.
                With an email login, users can choose topics and receive a once-daily email with any
                stories related to those topics</p>
              <div className='wares-button-wrapper'>
                <button onClick={() => buttonClick('http://thetimespage.misterpea.me/us')}>
                  <h4>Launch Project</h4>
                  <div className='wares-arrow-icon'><MdArrowForward /></div>
                </button>
                <button onClick={() => buttonClick('https://github.com/MisterPea/NYTimes-Aggregator')}>
                  <h4>View on GitHub</h4>
                  <div className='wares-arrow-icon'><MdArrowForward /></div>
                </button>
              </div>
            </div>
            <div className='image-side'>
            <div className='times-page-image'>
                <Image
                  src={'/theTimesPage.png'}
                  layout="fill"
                  alt="The Times Page Image"
                />
              </div>
            </div>
          </li>
          <li>
            <div className='text-side'>
              <h3>NPM Components</h3>
              <p>A smattering lightweight, concise components.</p>
              <p>• DragAndDrop - A minimal React Component wrapper to simplify the
                drag and drop of file(s) onto DOM elements.</p>
              <div className='wares-button-wrapper'>
                <button onClick={() => buttonClick('https://www.npmjs.com/package/@misterpea/dragdrop')}>
                  <h4>Launch Project</h4>
                  <div className='wares-arrow-icon'><MdArrowForward /></div>
                </button>
                <button onClick={() => buttonClick('https://github.com/MisterPea/DragDrop')}>
                  <h4>View on GitHub</h4>
                  <div className='wares-arrow-icon'><MdArrowForward /></div>
                </button>
              </div>
            </div>
            <div className='image-side'>
              <SiNpm 
                className='npm-icon'
              />
            </div>
          </li>
          <li>
            <div className='text-side'>
              <h3>Development Portfolio</h3>
              <p>This very site, which you are looking, right now.</p>
              <p className='extra-text'>Call it meta, fluff, filler, or a pejorative of your choosing; this, here, site is something I built.</p>
              <div className='wares-button-wrapper'>
                <button onClick={() => buttonClick('https://github.com/MisterPea/Portfolio-2022')}>
                  <h4>View on GitHub</h4>
                  <div className='wares-arrow-icon'><MdArrowForward /></div>
                </button>
              </div>
            </div>
            <div className='image-side'>
              <div className='dev-folio-image'>
                <Image
                  src={'/devPortfolio.png'}
                  layout="fill"
                  alt="Development Portfolio Image"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className='lines bottom'></div>
    </div>
  );
}