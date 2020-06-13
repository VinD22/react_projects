import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PracticeRef from './components/PracticeRef';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider } from './theme-context';

ReactDOM.render(
  <ThemeProvider value="dark">
    <PracticeRef />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
