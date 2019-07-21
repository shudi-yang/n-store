import React,{Component} from 'react'
import Swiper from 'swiper'
import '../assets/css/home.css'

import {connect} from 'react-redux'
import {asyncAction} from "../store/asyncAction";
import * as types from '../store/types'

import more from '../assets/img/more.png'
import good_test from '../assets/img/good_test.png'
import design from '../assets/img/design.jpg'
import banner01 from '../assets/img/banner01.jpg'
import banner02 from '../assets/img/banner02.jpg'
import banner03 from '../assets/img/banner03.jpg'

class Home extends Component{
    componentDidMount () {
        this.props.getHome()

        var mySwiper = new Swiper('.swiper-container', {
          autoplay: true,
          loop: true,
          pagination : {
              el: '.swiper-pagination',
          }
        });
    }
    render(){
        let {home} = this.props;
        console.log(home)

        return(
            <div id='home_content'>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src={banner01}/></div>
                                <div className="swiper-slide"><img src={banner02}/></div>
                                <div className="swiper-slide"><img src={banner03}/></div>
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                <div className='home_top'>
                    <div className='top_title'>
                        <div className='title_l'>人气推荐 | Top-selling</div>
                        <img className='more' src={more}/>
                    </div>
                    <ul className='home_list'>
                        {home.map((item) => (
                            <li
                              key={item.prdNo}
                              onClick={()=>this.props.history.push({pathname:`/detail/${item.prdNo}`,search:"dataName=home"})}
                            >
                                <img src={item.color_pic}/>
                                <h3>{item.prdName}</h3>
                                <h4>{item.stdPrice}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className='home_sort'>
                    <li className='sort_li'>
                        <div className='imgbox'>
                            <img src={design}/>
                        </div>
                        <div className='title'>                 
                            <img className='more' src={more}/>
                        </div>
                        <ul className='home_list'>
                            {home.map((item) => (
                                <li
                                key={item.prdNo}
                                onClick={()=>this.props.history.push({pathname:`/detail/${item.prdNo}`,search:"dataName=home"})}
                                >
                                    <img src={item.color_pic}/>
                                    <h3>{item.prdName}</h3>
                                    <h4>{item.stdPrice}</h4>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }

}
const MapStateToProps = state => ({
    home:state.home
  
  });
  
  const MapDispatchToProps = dispatch => ({
  
    getHome: () => dispatch(asyncAction({
      url:'http://localhost:3000/api/home',
      params:{_page:1,_limit:11},
      typeName: types.UPDATE_HOME
    })),
  

  });
  
  export default connect(
    MapStateToProps,
    MapDispatchToProps
  )(Home)