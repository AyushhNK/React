const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers=redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

//Action creator
function orderCake() {

    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        quantity: qty
    }
}

function orderIcecream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIcecream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

const initialCakeState = {
    noOfCakes: 10
}

const initialIcecreamState = {
    noOfIcecream: 20
}
//Reducer
const Cakereducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1,
            }
            case CAKE_RESTOCKED:
                return {
                    ...state,
                    noOfCakes: state.noOfCakes + action.quantity
                }
                default:
                    return state
    }

}

const Icecreamreducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                noOfIcecream: state.noOfIcecream - 1,
            }
            case ICECREAM_RESTOCKED:
                return {
                    ...state,
                    noOfIcecream: state.noOfIcecream + action.payload
                }
                default:
                    return state
    }

}

const rootReducer=combineReducers({
    cake:Cakereducer,
    icecream:Icecreamreducer
})

//Store
const store = createStore(rootReducer)
console.log('Initial State', store.getState())

//subscribe to the store
const unsubscribe = store.subscribe(() => console.log('updateState', store.getState()))


//dispatching the action
//store.dispatch(orderCake())
//store.dispatch(orderCake())
//store.dispatch(orderCake())
//store.dispatch(restockCake(8))

//binding the classes
const action = bindActionCreators({
    orderCake,
    restockCake,
    orderIcecream,
    restockIcecream
}, store.dispatch)

action.orderCake()
action.restockCake(5)
action.orderIcecream()
action.orderIcecream()
action.restockIcecream(3)

//unsubscribing the store
unsubscribe()
