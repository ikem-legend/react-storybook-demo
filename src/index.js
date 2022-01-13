import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';

import './styles/main.css';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

// Enable Webpack hot module replacement
if (module.hot) {
  module.hot.accept('./app', () => {
    render();
  });

  window.addEventListener('message', (e) => {
    if (process.env.NODE_ENV !== 'production' && e.data && e.data.type === 'webpackInvalid') {
      // eslint-disable-next-line
      console.clear();
    }
  });
}

render();
