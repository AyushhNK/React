const store=require('./app/store')
const cakeAction=require('./features/cake/cakeSlice').cakeAction
const icecreamAction=require('./features/icecream/icecreamSlice').icecreamAction

console.log('inital state',store.getState())

const unsubscribe=store.subscribe(()=>{
    console.log('updated state',store.getState())
})

store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.restocked(3))
store.dispatch(icecreamAction.ordered())
store.dispatch(icecreamAction.ordered())
store.dispatch(icecreamAction.ordered())
store.dispatch(icecreamAction.restocked(3))

unsubscribe()