import React from 'react';
import {useState} from 'react';

function Count(){
	const [count,setCount]=useState(0);

	function handleClick(){
		setCount(count+1);
	}
	return (
		<div>
			<button onClick={handleClick}>{count}</button>
		</div>
		)
}
export default Count;
