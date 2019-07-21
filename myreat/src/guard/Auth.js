import React,{Component} from 'react';
import {Route, Redirect} from 'react-router-dom'

// import axios from 'axios';
import Myn from "../pages/Myn";

class Auth extends Component{
    constructor(){
        super()
        this.state={
            hasAuth:false,
            auth:false
        }
        // axios({
        //     url:'/data/user.json'
        // }   
        // ).then(
        //     res=>this.setState({hasAuth:true,auth:res.data.auth})
        // )

    }
    render(){
        if (!this.state.hasAuth) return null;
        return <Route render={(props)=>{
            return this.state.auth ? <Myn {...this.props}/> :<Redirect to='/login'/>
        }
        }
        />
    }
}
export default Auth;