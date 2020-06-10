import React from 'react';
import './App.css';

import Form from './components/Form';
import Button from './components/Button';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      Hello All!
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam atque soluta rec</p>
      <Button>Home Button</Button>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod cupiditate dolore similique vel accusantium earum voluptatem omnis veniam facere debitis praesentium accusamus, eos explicabo incidunt culpa consequuntur, pariatur minus natus.</p>
      <Form />
    </div>
  );
}

export default App;
