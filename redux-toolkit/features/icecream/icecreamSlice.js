const createSlice=require('@reduxjs/toolkit').createSlice
const cakeAction=require('../cake/cakeSlice').cakeAction

const initialState={
    noOfIcecream:20
}
const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.noOfIcecream--
        },
        restocked:(state,action)=>{
            state.noOfIcecream+=action.payload
        }
    },
    //extra reducers
    extraReducers:(builder)=>{
        builder.addCase(cakeAction.ordered(),(state)=>{
            state.noOfIcecream--
        })
    }
})

module.exports=icecreamSlice.reducer
module.exports.icecreamAction=icecreamSlice.actions