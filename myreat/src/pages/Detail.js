import React,{Component,Fragment} from 'react'
import querystring from 'query-string';
import '../assets/css/detail.css'
import gwc from '../assets/img/prod/gwc.png'
import kf from '../assets/img/prod/kf.png'
// import good_test from '../assets/img/good_test.png'
// import state from '../store/state';
import * as types from "../store/types";
import {connect} from "react-redux";
import {asyncAction} from '../store/asyncAction';

class Detail extends Component{
    // constructor(props){
    //     super(props)
    //     console.log(props)
    // }
    componentDidMount(){
        let {history,match,location} = this.props;
    
        let id = match.params.id;
        //console.log(match.params.id)
        let dataName = querystring.parse(location.search).dataName;
    
        this.props.getDetail(id, dataName)
    
      }

    render(){
         //console.log(this.props)
         let {detail} = this.props;
         //console.log(detail)
        return(
            <div id='detail'>
                <div className='detail_container'>
                    <img src={detail.color_pic} className='goodimg'/>
                    <h3>{detail.prdName}</h3>
                    <h4>￥{detail.stdPrice}</h4>
                    <p>包邮 江浙沪满￥228包邮</p>
                </div>

                <div id="detail_btns">
                    <div id="serve">
                        <img src={kf}/>
                    </div>
                    <div id="cart">
                        <img src={gwc}/>
                        <div className="cartNum" >0</div>
                    </div>
                    <div id="buy" >立即购买</div>
                    <div id="add2cart" className="able">加入购物车</div>
                </div> 
            </div>
        )
    }
}
const initMapStateToProps = state => ({
  detail:state.detail
});

const initMapDispatchToProps = dispatch => ({

  getDetail: (id,dataName) => dispatch(asyncAction({
    url:`http://localhost:3000/api/${dataName}/${id}`,
    typeName: types.UPDATE_DETAIL
  })),

});

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(Detail)