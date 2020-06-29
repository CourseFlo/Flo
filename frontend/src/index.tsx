import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import reducers from './redux/reducers/index'; // We exported combineReducers
import './index.css';
import App from './App';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Theme from './util/style';

// eslint-disable-next-line no-underscore-dangle
const store = createStore(reducers, composeWithDevTools());


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider theme={createMuiTheme(Theme)}>
      <Provider store={store}>
        <App />
      </Provider>
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
