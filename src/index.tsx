import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/store';

ReactDOM.render((
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
), document.getElementById('root'));
