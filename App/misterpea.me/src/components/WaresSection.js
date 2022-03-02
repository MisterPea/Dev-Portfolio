import * as React from 'react';

export default function WaresSection() {
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
              <button>Launch</button>
              <button>View on GitHub</button>
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
              <button>Launch</button>
              <button>View on GitHub</button>
            </div>
            <div className='image-side'></div>
          </li>
          <li>
            <div className='text-side'>
              <h3>NPM Components</h3>
              <p>A smattering lightweight, concise components.</p>
              <p>• DragAndDrop - A minimal React Component wrapper to simplify the
                drag and drop of file(s) onto DOM elements.</p>
              <button>Launch</button>
              <button>View on GitHub</button>
            </div>
            <div className='image-side'></div>
          </li>
          <li>
            <div className='text-side'>
              <h3>NPM Components</h3>
              <p>A smattering lightweight, concise components.</p>
              <p>• DragAndDrop - A minimal React Component wrapper to simplify the
                drag and drop of file(s) onto DOM elements.</p>
              <button>Launch</button>
              <button>View on GitHub</button>
            </div>
            <div className='image-side'></div>
          </li>
        </ul>
      </div>
      <div className='lines bottom'></div>
    </div>
  );
}