import React, { Component } from 'react'

//获取redux的方法
import { connect } from 'react-redux';
//获取action
import { goDown } from '../redux/action/index'

class Hello extends Component {
    render () {
        const allState = this.props;
        return (
            <div>
                <button onClick={allState.GoDown}>--</button>
            </div>
        )
    }
}
function mapState(state,ownProps){
    return state
}
//声明方法，点击的时候去获取return的方法
function mapDispatch (dispatch, ownProps) {
    // console.log(ownProps);
    return {
        GoDown:() => {
            dispatch(goDown('减'))
        }
    }
}

export default connect(mapState, mapDispatch)(Hello);