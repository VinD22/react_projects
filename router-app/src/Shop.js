import React, { useState, useEffect } from 'react';
import './App.css';

function Shop() {

    // API Currently not working. 
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     fetchItems();
    // }, []);

    // const fetchItems = async () => {
    //     // const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod07/upcoming/get');
    //     const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');

    //     const items = await data.json();
    //     setItems(items.items);
    //     console.log(items);
    // }

    return (
        <div className="App">
            <h1>Shop Page</h1>
            {/* {items.map(item => (
                <h1>{item.name}</h1>
            ))} */}
        </div>
    );
}

export default Shop;
