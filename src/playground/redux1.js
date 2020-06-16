import { createStore } from 'redux'

const increment = ( payload = {}) => ({
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
})
 
const store = createStore((state = { count: 2 }, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' :
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1 ;
            return {
                count: state.count - decrementBy
            };
        case 'RESET' :
            return {
                count: action.count
            };
        default:
            return state;
    }
})


store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(increment({ incrementBy: 5 }))


store.dispatch({
    type: 'DECREMENT',
    decrementBy: 5
})

store.dispatch({
    type: 'RESET',
    count: 0

})


