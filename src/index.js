import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ToastContainer } from 'react-toastify';

import App from './App';
import createStore from './store';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
        <ToastContainer />
      </MuiPickersUtilsProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
