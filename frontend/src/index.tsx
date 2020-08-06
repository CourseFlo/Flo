import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import reducers from './redux/reducers/index'; // We exported combineReducers
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Theme from './util/style';

const enhancers = process.env.NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(thunk))
  : applyMiddleware(thunk);

const store = createStore(
  reducers,
  enhancers,
);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createMuiTheme(Theme)}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
