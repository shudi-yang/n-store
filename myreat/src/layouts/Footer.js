import React,{Component} from 'react';
import '../assets/css/Footer.css';
import {Link,withRouter} from "react-router-dom";
import home from '../assets/img/home_1.png'
import xzhome from '../assets/img/home_2.png'
import cart from '../assets/img/shopping-cart_1.png'
import xzcart from '../assets/img/shopping-cart_2.png'
import myn from '../assets/img/My-n_1.png'
import xzmyn from '../assets/img/My-n_2.png'
import classify from '../assets/img/classify_1.png'
import xzclassify from '../assets/img/classify_2.png'


 class Footer extends Component{
    render(){
        let path  = this.props.location.pathname;
        //console.log('footer',path)
      return (
          <ul id='footer'>
            <li >
                <Link to='/home'><img src={path == '/home'? xzhome : home}/></Link>
            </li>
            <li onClick={()=>this.props.history.push('/classify')}>
                {path == '/classify'? <img src={xzclassify} /> : <img src={classify} />} 
            </li>
            <li>
                <Link to='/cart'><img src={path == '/cart'? xzcart : cart}/></Link>
            </li>
            <li>
                <Link to='/myn'><img src={path == '/myn'? xzmyn : myn}/></Link>
            </li>
          </ul>
      )
    }
  }
  export default withRouter(Footer)