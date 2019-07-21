import React,{Component} from 'react';
import propTypes from 'prop-types'

import './assets/css3/uc-button.css';
class MyButton extends Component{
    render(){
        return(
            <input 
                className={`s2 button--`+this.props.mode}
                type='button'
                value={this.props.text}
                onClick={this.props.clickHandler}
            />
        )

    }
}
MyButton.defaultProps ={
    text:'按钮',
    mode:'primary'
};
MyButton.propTypes ={
    text:propTypes.string,
    mode:propTypes.string,
    clickHandler:propTypes.func.isRequired
};


export default MyButton