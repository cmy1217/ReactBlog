import React,{Component,Fragment}from 'react';

import Containner from './containner'
import Phont from './Phont'


class Nav extends Component{
    constructor(props){
        super(props)
        this.state={
            isBig:false
        }
         this.SetBigOrSmall = this.SetBigOrSmall.bind(this)
        
    }
    
         SetBigOrSmall(){
             
            this.setState({
                isBig:!this.state.isBig
            })
         }

         isBig(){
          return  this.state.isBig?'ui info inverted attached segment m-padded-tb-mini m-shadow-small nav':'ui info inverted attached segment m-padded-tb-mini m-shadow-small nav-down'
         }


    render(){

        return(
            <Fragment>
                 <nav  className={this.isBig()}>
                
                    <Containner isBig={this.state.isBig}></Containner>
                    <div onClick={this.SetBigOrSmall}>
                     <Phont></Phont>
                    </div>
                    
                </nav>
              
            </Fragment>
           
        )
    }
}

export default Nav