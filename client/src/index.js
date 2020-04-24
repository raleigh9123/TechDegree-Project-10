import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS Below

// Import Provider and Application
// import { Provider } from './Context';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Context API Setup
    // ReactDOM.render(
    //   <Provider>
    //     <App />
    //   </Provider>,
    //   document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();