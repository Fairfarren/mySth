import React, { Component } from 'react'
import { connect } from 'react-redux';
class Show extends Component {
    render () {
        const allState = this.props;
        console.log(allState);
        return (
            <div>
                <p>number:{allState.age} </p>
            </div>
        )
    }
}
// function Show (allState) {
//     console.log(allState);
//     return (
//         <div>
//             <p>
//                 number: {allState.name}
//             </p>
//         </div>
//     )
// }

function mapState(state){
    return state
}

export default connect(mapState)(Show);