import React from 'react';

import './App.css';

function App() {
  return (
    <div className="main_grid">
      <header>
        <img className="logo" src="" alt="logo" />
        <nav className="nav">
          <a href="#" className="nav_link"></a>
          <a href="#" className="nav_link"></a>
          <a href="#" className="nav_link"></a>
          <a href="#" className="nav_link"></a>
        </nav>
      </header>

      <main>
        <h1 className="title"></h1>
        <p className="location"></p>
        <img className="primary_image" src="" alt="" />
        <div className="secondary_images">
          <img src="" alt="" className="secondary_image" />
          <img src="" alt="" className="secondary_image" />
        </div>
        <button className="btn"></button>
      </main>
      <footer>
        <div className="social_links">
          <a href="" className="social_link">
            <img src="" alt="" aria-label="" className="social_image" />
          </a>
          <a href="" className="social_link">
            <img src="" alt="" aria-label="" className="social_image" />
          </a>
          <a href="" className="social_link">
            <img src="" alt="" aria-label="" className="social_image" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
