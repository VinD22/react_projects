import React, { useState, useEffect } from 'react';
import './App.css';

import { Heading } from "./components/Heading";
import { Loader } from "./components/Loader";
import { UnsplashImage } from "./components/UnsplashImage"

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component"

import axios from "axios";

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    font-family: sans-serif; 
  }

`;

const WrapperImage = styled.section`
  max-width: 70rem; 
  margin: 4rem auto; 
  display: grid; 
  grid-gap: 1em; 
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  grid-auto-rows: 300px; 
`;

function App() {



  const [images, setImages] = useState([])

  useEffect(() => {
    getMoreImages();
  }, [])

  const getMoreImages = () => {
    const apiRoot = "https://api.unsplash.com"
    const accessKey = process.env.REACT_APP_ACCESS_KEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=15`)
      .then(res => (
        setImages([...images, ...res.data])
      ));

  }

  return (
    <div className="App">
      <Heading />
      <GlobalStyle />

      <InfiniteScroll
        dataLength={images.length}
        next={getMoreImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
          {images.map(image => {
            return <UnsplashImage url={image.urls.thumb} key={image.id} />
          })}
        </WrapperImage>

      </InfiniteScroll>

    </div>
  );
}

export default App;
