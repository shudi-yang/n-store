import React,{Component} from 'react'
// import querystring from 'query-string';
import gwc from '../assets/img/gwc_1.png'
// import good_test from '../assets/img/good_test.png'
import '../assets/css/classify.css'
import {connect} from 'react-redux'
import {asyncAction} from '../store/asyncAction'
import * as types from '../store/types'


class Classify extends Component{
    
    componentDidMount(){
        // console.log('Classify componentDidMount', this.props)
        this.props.getClassify()
    }
    render(){
        //console.log(this.props)
        let {classify} = this.props;
        // console.log(classify)
        return(
                <div id='classify'>
                    <ul className='classify_list'>
                       { classify.map((item)=>(
                            <li 
                            onClick={()=>this.props.history.push({pathname:`/detail/${item.prdNo}`,search:"dataName=classify"})} 
                            key={item.prdNo}
                            >
                                <div className="imgBox" >
                                    <img className="prodImg" src={item.color_pic}/>
                                </div>
                                <div className="name">{item.prdName}</div>
                                <div className="box">
                                    <div className="price">{item.stdPrice}</div>
                                    <img className="add2cart" src={gwc}/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
        )
    }
}
const MapStateToProps = state => ({
    classify:state.classify,
  
  });
  
  const MapDispatchToProps = dispatch => ({
  
    getClassify: () => dispatch(asyncAction({
      url:'http://localhost:3000/api/classify',
      params:{_page:1,_limit:11},
      typeName: types.UPDATE_CLASSIFY
    })),
  

  });
  
  export default connect(
    MapStateToProps,
    MapDispatchToProps
  )(Classify)