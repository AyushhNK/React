const redux=require('redux')
const createStore=redux.createStore
const bindActionCreators=redux.bindActionCreators

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

//store.dispatch(incrementNumber())
//store.dispatch(incrementNumber())
//store.dispatch(incrementNumber())
//store.dispatch(incrementNumber())
//store.dispatch(decrementNumber())
//store.dispatch(decrementNumber())
//store.dispatch(decrementNumber())

const action=bindActionCreators({incrementNumber,decrementNumber},store.dispatch)
action.incrementNumber()
action.incrementNumber()
action.decrementNumber()



unsubscribe()