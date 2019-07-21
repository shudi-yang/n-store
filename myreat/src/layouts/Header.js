import React,{Component} from 'react';
import {withRouter} from "react-router-dom";
import back from '../assets/img/back.png'
import logo from '../assets/img/logo.png'
import '../assets/css/header.css'

 class Header extends Component{
     
    render(){
        console.log('header',this.props)
        return(
            <div id='header' >
                <img src={back} className='header_back' onClick={()=>this.props.history.go(-1)}/>
                <img src={logo} className='header_logo'/>
            </div>
        )
    }
}
export default withRouter(Header)