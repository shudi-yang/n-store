import React,{Component} from 'react';
import propTypes from 'prop-types'

import './assets/css3/uc-button.css';
class MyInput extends Component{
     
    render(){
        return(
            <input 
                type='text'
                value={this.props.value}
                name={this.props.name}
                onChange={this.props.clickHandler}
            />
        )

    }
}
MyInput.defaultProps ={
    name:'按name',
};
// MyInput.propTypes ={
//     text:propTypes.string,
//     mode:propTypes.string,
//     clickHandler:propTypes.func.isRequired
// };


export default MyInput