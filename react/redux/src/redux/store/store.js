import { createStore } from 'redux'
import reducer from '../reducer/index'
let allState = {
    name: 'lyk',
    age: 10,
    class: '1.1.1',
    list: []
}

const store = createStore(reducer, allState)

export default store;