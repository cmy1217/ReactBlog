import React,{Component} from 'react';
import Header from './common/header/header'
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";
import Home from './views/home'
import Detail from './views/detail/Loadable'
import Login from './views/login'
import Mon from './common/moon/index'
import Cation from './views/cation/index'
import Foot from './common/foot/Foot'
import Tag from './views/tag/index'
import Achiver from './views/achiver/index'
import TimeLine from './views/timeline'
import './assets/css/home.css'
import 'semantic-ui-css/semantic.min.css';
class  App extends Component {
  render(){
    return (
      <Provider store={store}>
      
         
          <BrowserRouter>
            <div className="light">
              <Header></Header>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/cation/:id' exact component={Cation}></Route>
              <Route path='/tag/:id' exact component={Tag}></Route>
              <Route path='/achiver' exact component={Achiver}></Route>
              <Route path='/about' exact component={TimeLine}></Route>
              <Foot></Foot>
              <Mon></Mon>
              
             
            </div>
          </BrowserRouter>
       
       
      </Provider>
      
    )
  }
}


export default App;
