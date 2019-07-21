import React from 'react'
import ReactDom from 'react-dom'
import App from "./layouts/App";

import {BrowserRouter,Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux'


ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>
  
    ,
    document.querySelector('#root')
  );