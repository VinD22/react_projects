import React, { useState, useEffect } from 'react';
import { ImageCard } from "./components /ImageCard";
import { ImageSearch } from "./components /ImageSearch";

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchterm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=16056207-d12daa02cb23ac688e4216726&q=${searchTerm}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [searchTerm])



  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setSearchterm(text)} />

      {!isLoading && images.length == 0 ? <h2 className="text-4xl text-center mx-auto text-red-600">No Images Found!</h2> : ''}

      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32 text-blue-600">Loading</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;
