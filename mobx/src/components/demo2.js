import React, { Component } from 'react'

import { observer } from 'mobx-react'

@observer
class Demo2 extends Component {
    render () {
        const { down } = this.props.store;
        return (
            <div>
                <button onClick={down}>
                    --
                </button>
            </div>
        )
    }
}

export default Demo2;