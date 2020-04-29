import React from 'react';
import logo from "./logo.svg";
import './App.css';

function App() {

  const linkImageStyle = {
    backgroundImage: logo
  }

  return (
    <>
      <nav className="navigation">
        <a><img src={logo} height="50px" width="50px" /></a>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <main>
        <div className="leftContent">
          <img src={logo} height="150px" width="150px" />
          <form>
            <h2 className="formTitle">
              Add a bookmark
            </h2>
            <div>
              <label
                htmlFor="linkTitle"
                className="formLabel">Write Bookmark Name</label>

              <input
                type="text"
                name="linkTitle"
                minLength="1"
                maxLength="25"
                placeholder="25 Characters max"
              />

            </div>
            <div>
              <label
                htmlFor="linkHref"
                className="formLabel">Enter Website Address</label>

              <input
                type="text"
                name="linkHref"
                minLength="7"
                maxLength="25"
                placeholder="https://your-link.com"
              />


            </div>
            <button>
              Add
            </button>
          </form>
        </div>
        <div className="rightContent">
          <div stlye={linkImageStyle} />
          <div>
            <h2><a href="#">My Link</a></h2>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
