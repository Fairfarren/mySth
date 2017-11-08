export const helloReverse = (state)=> {
    return state.hello.split('').reverse().join('')
}
export const nameReverse = state => state.name.split('').reverse().join('Å')