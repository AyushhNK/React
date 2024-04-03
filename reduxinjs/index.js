const redux=require('redux')
const createStore=redux.createStore

//const CAKE_ORDERED = 'CAKE_ORDERED'
//const CAKE_RESTOCKED='CAKE_RESTOCKED'
//
////Action creator
//function orderCake() {
//
//    return {
//        type: CAKE_ORDERED,
//        quantity: 1
//    }
//}
//
//function restockCake(qty=1){
//    return {
//        type:CAKE_RESTOCKED,
//        quantity:qty
//    }
//}
//
//const initialState={
//    noOfCakes:10,
//}
//
////Reducer
//const reducer=(state=initialState,action)=>{
//    switch(action.type){
//        case CAKE_ORDERED:
//            return {
//                ...state,
//                noOfCakes:state.noOfCakes-1,
//            }
//        case CAKE_RESTOCKED:
//            return {
//                ...state,
//                noOfCakes:state.noOfCakes+action.quantity
//            }
//        default:
//            return state
//    }
//    
//}
//
////Store
//const store=createStore(reducer)
//console.log('Initial State',store.getState())
//
////subscribe to the store
//const unsubscribe=store.subscribe(()=>console.log('updateState',store.getState()))
//
//
////dispatching the action
//store.dispatch(orderCake())
//store.dispatch(orderCake())
//store.dispatch(orderCake())
//store.dispatch(restockCake(8))
//
////unsubscribing the store
//unsubscribe()

const INCREMENT="INCREMENT"
const DECREMENT="DECREMENT"

function incrementNumber() {
    return {
        type:INCREMENT,
        payload:1
    }
}

function decrementNumber(){
    return {
        type:DECREMENT,
        payload:1
    }
}

const initialState={
    value:0
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                value:state.value+1
            }
        case DECREMENT:
            return {
                ...state,
                value:state.value-1
            }
        default:
            return state
    }
}

const store=createStore(reducer)

console.log("initial state",store.getState())

const unsubscribe=store.subscribe(()=>console.log("updatedState",store.getState()))

store.dispatch(incrementNumber())
store.dispatch(incrementNumber())
store.dispatch(incrementNumber())
store.dispatch(incrementNumber())
store.dispatch(decrementNumber())
store.dispatch(decrementNumber())
store.dispatch(decrementNumber())

unsubscribe()