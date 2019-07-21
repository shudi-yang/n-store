import React,{Component} from 'react'
import {Link,NavLink,Route,Redirect,Switch} from 'react-router-dom'
import '../library/myFlexible'
import '../assets/css/main.css'
import Header from "./Header";
import Footer from "./Footer";
import Loading from "../components/Loading/Loading";
import Home from '../pages/Home';
import Classify from '../pages/Classify';
import Login from '../pages/Login';
import Reg from '../pages/Reg';
import Myn from '../pages/Myn';
import Cart from '../pages/Cart';
import ErrorPage from '../pages/ErrorPage';
import Auth from "../guard/Auth";
import GlobalAuth from '../guard/GlobalAuth';

import {asyncAction} from "../store/asyncAction";
import * as types from "../store/types";
import {connect} from 'react-redux'
import Detail from '../pages/Detail';
class App extends Component{
    constructor(props){
        super(props)
        //console.log('appprops_',props)
    }
    checkPath(path){
        if(/home|classify|cart|user/.test(path)){
            this.props.viewNav(true)
            this.props.viewFoot(true)
        }
        if (/detail/.test(path)){
            this.props.viewNav(true)
            this.props.viewFoot(false)
        }
    }

    componentWillReceiveProps(nextProps){
        let path = nextProps.location.pathname;
        console.log('app',path)
        this.checkPath(path)
    }
    componentDidMount(){
        //console.log(this.props.location.pathname)
        let path  = this.props.location.pathname;
        this.checkPath(path)
    }
    render(){
        let {bLoading, bNav, bFoot} = this.props
        //console.log('this.props',this.props);
        // console.log('app',this.props)
        return(            
            <div>
                
                {bLoading && <Loading />}
                {bNav && <Header/>}
                
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/classify' component={Classify}/>
                    {/* <Route path='/classify' render={()=>(
                       <Switch>
                           <Route path='/classify/:id' component={Detail}/>
                           <Route path='/classify' component={Classify}/>
                       </Switch>
                    )}/> */}
                    <Route path='/detail/:id' component={Detail}/>
                    <GlobalAuth path='/cart' component={Cart}/>
                    <Auth path='/myn' component={Myn}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/reg' render={(props)=>{
                        console.log("接入部分代码",props);
                        return <Reg {...props}/>
                    }}/>
                    <Redirect exact from='/' to='/home'/>
                    <Route component={ErrorPage}/>
                </Switch>
                {bFoot && <Footer />}

            </div>

        )
    }
}

const mapStateToProps = state =>({
    bNav:state.bNav,
    bFoot:state.bFoot,
    bLoading:state.bLoading,
});
const mapDispatchToProps = dispatch =>({
    viewNav: (bl)=>dispatch({type:types.VIEW_NAV,payload:bl}),
    viewFoot: (bl) => dispatch({type:types.VIEW_FOOT,payload:bl}),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)