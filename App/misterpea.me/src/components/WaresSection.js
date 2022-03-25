/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { SiNpm } from 'react-icons/si';

export default function WaresSection() {

  function buttonClick(route) {
    window.open(route, '_blank');
  }

  return (
    <div className='section wares-sec'>
      <div className='lines top'></div>
      <div className='content-wrapper'>
        <div className='wares-text-wrapper'>
          <h1 className='section-title'>wares:</h1>
          <ul>
            <li
              role="button"
              className='wares-li'
              onClick={() => buttonClick('https://s3ui.misterpea.me')}
              tabIndex={0}
            >
              <div className='text-side'>
                <h2>S3-UI</h2>
                <p>A full-stack UI for AWS&rsquo;s Simple Storage Service.</p>
                <p className='extra-text'>Features include: creation/deletion of buckets and folders.
                  Upload/download/delete files through a dialog or drag and drop.
                  Breadcrumb folder navigation, automatic renaming on files with the same name.
                  Bucket and folder navigation is done via query string; allowing bookmarking and sharing.</p>
                <div className='wares-button-wrapper'>
                  <button
                    tabIndex={0}
                    onClick={() => buttonClick('https://s3ui.misterpea.me')}>
                    <h3>Launch Project</h3>
                    <div className='wares-arrow-icon'><MdArrowForward /></div>
                  </button>
                  <button
                    tabIndex={0}
                    onClick={() => buttonClick('https://github.com/MisterPea/s3-ui')}>
                    <h3>View on GitHub</h3>
                    <div className='wares-arrow-icon'><MdArrowForward /></div>
                  </button>
                </div>
              </div>
              <div className='image-side'>
                <div className='s3-ui-image'>
                  <img src={'/s3UI.png'} alt="S3-UI" />
                </div>
              </div>
            </li>
            <li
              role="button"
              className='wares-li'
              onClick={() => buttonClick('https://thetimespage.misterpea.me/us')}
              tabIndex={0}
            >
              <div className='text-side'>
                <h2>Ny Times Aggregator & Daily email subscription</h2>
                <p>NYT api integration for Top Stories, with the ability for a daily email.</p>
                <p className='extra-text' >An implementation of The NY Times Top Stories API.
                  With an email login, users can choose topics and receive a once-daily email with any
                  stories related to those topics.</p>
                <div className='wares-button-wrapper'>
                  <button
                    tabIndex={0}
                    onClick={() => buttonClick('https://thetimespage.misterpea.me/us')}>
                    <h3>Launch Project</h3>
                    <div className='wares-arrow-icon'><MdArrowForward /></div>
                  </button>
                  <button
                    tabIndex={0}
                    onClick={() => buttonClick('https://github.com/MisterPea/NYTimes-Aggregator')}>
                    <h3>View on GitHub</h3>
                    <div className='wares-arrow-icon'><MdArrowForward /></div>
                  </button>
                </div>
              </div>
              <div className='image-side'>
                <div className='times-page-image'>
                  <img src={'/theTimesPage.png'} alt="The Times Page Image" />
                </div>
              </div>
            </li>
            <li
              role="button"
              tabIndex={0}
              className="wares-li"
              onClick={() => buttonClick('https://www.npmjs.com/package/@misterpea/dragdrop')}
            >
              <div className='text-side'>
                <h2>NPM Components</h2>
                <p>A smattering of lightweight, concise components.</p>
                <p>• DragAndDrop - A minimal React Component wrapper to simplify the
                  drag and drop of file(s) onto DOM elements.</p>
                <div className='wares-button-wrapper'>
                  <button
                    tabIndex={0}
                    onClick={() => buttonClick('https://www.npmjs.com/package/@misterpea/dragdrop')}>
                    <h3>Launch Project</h3>
                    <div className='wares-arrow-icon'><MdArrowForward /></div>
                  </button>
                  <button
                    tabIndex={0}
                    onClick={() => buttonClick('https://github.com/MisterPea/DragDrop')}>
                    <h3>View on GitHub</h3>
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
            <li
              role="button"
              tabIndex={0}
              className="wares-li"
              onClick={() => buttonClick('https://github.com/MisterPea/Portfolio-2022')}
            >
              <div className='text-side'>
                <h2>Development Portfolio</h2>
                <p>This very site, which you are looking, right now.</p>
                <p className='extra-text'>Call it meta, fluff, filler, or a pejorative of your choosing; this, here, site is something I built.</p>
                <div className='wares-button-wrapper'>
                  <button
                    tabIndex={0}
                    onClick={() => buttonClick('https://github.com/MisterPea/Portfolio-2022')}>
                    <h3>View on GitHub</h3>
                    <div className='wares-arrow-icon'><MdArrowForward /></div>
                  </button>
                </div>
              </div>
              <div className='image-side'>
                <div className='dev-folio-image'>
                  <img src={'/devPortfolio.png'} alt="Development Portfolio Image"/>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='lines bottom'></div>
    </div>
  );
}