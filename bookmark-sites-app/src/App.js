import React, { useState, useEffect } from 'react';
import logo from "./logo.svg";
import './App.css';
import LinkCard from "./components /LinkCard";

function App() {

  const [cardData, setCardData] = useState([{ linkName: "my link", linkHref: "https://google.com" }]);

  const [newCard, setNewCard] = useState({ linkName: '', linkHref: '' })



  const dispatchCardSet = (payload) => {
    let oldArray = cardData;
    let newArray = [...oldArray, payload];
    setCardData(newArray);
    setNewCard({ linkName: '', linkHref: '' })
  }

  return (
    <>
      <nav className="navigation">
        <a><img src={logo} height="50px" /></a>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
      <main>
        <div className="leftContent">
          <img src={logo} height="150px" width="150px" />
          <form onSubmit={e => e.preventDefault()}>
            <h2 className="formTitle">
              Add a bookmark
            </h2>
            <div>
              <label
                htmlFor="linkTitle"
                className="formLabel">Write Bookmark Name</label>

              <input
                value={newCard.linkName}
                onChange={e => setNewCard({ ...newCard, linkName: e.target.value })}
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
                value={newCard.linkHref}
                onChange={e => setNewCard({ ...newCard, linkHref: e.target.value })}
                type="text"
                name="linkHref"
                minLength="7"
                maxLength="25"
                placeholder="https://your-link.com"
              />


            </div>
            <button onClick={() => dispatchCardSet(newCard)}>
              Add
            </button>
          </form>
        </div>
        <div className="rightContent">
          <LinkCard cards={cardData} />
        </div>
      </main>
    </>
  );
}

export default App;
