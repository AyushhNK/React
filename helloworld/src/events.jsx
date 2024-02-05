import React from 'react';

function MyButton (){
	function handleClick(){
		console.log("hello world")
	}
	return (
		<div>
			<button onClick={handleClick}>click me</button>
		</div>
		)
}
export default MyButton;