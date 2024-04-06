import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ordered,restocked} from './cakeSlice'

export const CakeView=()=>{
    const noOfCake=useSelector((state)=>state.cake.noOfCakes)
    const dispatch =useDispatch()
    return (
        <>
            <h1>No of Cakes-{noOfCake}</h1>
            <button onClick={()=>dispatch(ordered())}>order cake</button>
            <button onClick={()=>dispatch(restocked(2))}>restock cake</button>
        </>
    )
}
