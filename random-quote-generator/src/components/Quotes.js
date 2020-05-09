import React, { useState, useEffect } from 'react'

import twitterIcon from "../twitter.svg";
import tumblrIcon from '../tumblr.svg';

const Quotes = () => {

    const [quote, setQuote] = useState('Loading...');
    const [author, setAuthor] = useState('...');

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let quotes = data.quotes;
                let randomNumber = Math.floor(Math.random() * quotes.length)
                setQuote(quotes[randomNumber].quote)
                setAuthor(quotes[randomNumber].author)
            })
    }

    return (
        <div id="quote-box">
            <div id="text">
                <p>{quote}</p>
                <div id="author">{author}</div>
            </div>
            <div id="buttons">
                <div className="social-media">
                    <a href="#" id="tweet-quote">
                        <span><img id="twitter-icon" src={twitterIcon} alt="Twitter Image" /></span>
                    </a>
                    <a href="#" id="tumblr-quote">
                        <span><img id="tumblr-icon" src={tumblrIcon} alt="Twitter Image" /></span>
                    </a>
                </div>
                <button id="new-quote" onClick={getQuote}>
                    Generate New Quote
                </button>
            </div>
        </div>
    )
}

export default Quotes
