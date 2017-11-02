// import UP from '../action/index';
// import DOWN from '../action/index';

export default (state, action) => {
    const { text } = action;
    switch (action.type) {
        case 'up':
            return Object.assign({}, state, {
                age: state.age+1,
                text
            });
        case 'down':
            return Object.assign({}, state, {
                age: state.age-1,
                text
            })
        default: 
            return state;
    }
}