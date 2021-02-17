import React from 'react';
import ReactDOM from 'react-dom';
import PipwerksProvider from 'contexts/PipwerksProvider';
import App from './App';
import 'styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <PipwerksProvider>
      <App />
    </PipwerksProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
