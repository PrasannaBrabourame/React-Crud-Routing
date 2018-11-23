import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/pages/app';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './components/redux/store/configureStore';



const store = configureStore();


render((
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
