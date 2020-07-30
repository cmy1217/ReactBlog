import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import {IconFont} from './assets/iconfont/iconfont'
import { GlobalStyle }  from './style.js';

ReactDOM.render(
  <Fragment>
     <GlobalStyle></GlobalStyle>
     <IconFont></IconFont>
     <App />
  </Fragment>
   
  ,
  document.getElementById('root')
);


