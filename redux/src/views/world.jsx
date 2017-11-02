import React, { Component } from 'react'

import { goUp } from '../redux/action/index'
import { connect } from 'react-redux'

class World extends Component {
    render () {
        const allState = this.props;
        return (
            <div>
                <button onClick={allState.GoUp}>++</button>
            </div>
        )
    }
}

function mapState (state, ownProps) {
    return state;
}

function mapDispatch (dispatch, ownProps) {
    return {
        GoUp: () => {
            dispatch(goUp('加'))
        }
    }
}

export default connect(mapState, mapDispatch)(World);