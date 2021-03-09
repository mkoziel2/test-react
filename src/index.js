import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducer'
import { Provider } from 'react-redux'

const Redux = require('redux')

const store = Redux.createStore(reducer)
const render = () => {
  ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
};
render()
store.subscribe(() => render())
serviceWorker.unregister();
