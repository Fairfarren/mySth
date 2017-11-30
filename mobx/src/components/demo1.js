import React, { Component } from 'react'

import { observer } from 'mobx-react'

@observer
class Dome1 extends Component {
    render () {
        const { up } = this.props.store;
        return (
            <div>
                <button onClick={up}>
                    ++
                </button>
            </div>
        )
    }
}

export default Dome1;