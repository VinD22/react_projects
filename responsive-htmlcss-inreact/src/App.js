import React from 'react';

import './App.css';

function App() {
  return (
    <div className="main_grid">
      <header>
        <img className="logo" src="https://images.unsplash.com/photo-1561408564-99cd1624ccac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=75&q=80" alt="logo" />
        <nav className="nav">
          <a href="#" className="nav_link">Contact</a>
          <a href="#" className="nav_link">Book Now</a>
          <a href="#" className="nav_link">Become Host</a>
          <a href="#" className="nav_link">About</a>
        </nav>
      </header>

      <main>
        <h1 className="title">The Box</h1>
        <p className="location">Florida</p>
        <img className="primary_image" src="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
        <div className="secondary_images">
          <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=167&q=80" alt="" className="secondary_image" />
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80" alt="" className="secondary_image" />
        </div>
        <button className="btn">
          Book Now
        </button>
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
