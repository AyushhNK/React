const redux=require('redux')
const createStore=redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'

//Action creator
function orderCake() {

    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

const initialState={
    noOfCakes:10,
}

//Reducer
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                noOfCakes:state.noOfCakes-1,
            }
        default:
            return state
    }
    
}

//Store
const store=createStore(reducer)
console.log('Initial State',store.getState())

//subscribe to the store
const unsubscribe=store.subscribe(()=>console.log('updateState',store.getState()))


//dispatching the action
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

//unsubscribing the store
unsubscribe()

