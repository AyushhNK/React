import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {ordered,restocked} from './icecreamSlice'

export const IcecreamView=()=>{
    const noOfIcecream=useSelector((state)=>state.icecream.noOfIcecream)
    const dispatch = useDispatch()
    return (
        <>
            <h1>No of icecream- {noOfIcecream}</h1>
            <button onClick={()=>dispatch(ordered())}>order icecream</button>
            <button onClick={()=>dispatch(restocked(3))}>restock icecream</button>
        </>
    )
}
