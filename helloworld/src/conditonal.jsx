import React from 'react';



const Condition=()=>{
	let name;
	if(1==2){
		name='ayush';
	}	
	else{
		name='ank';
	}

	return (
		<div><p>My name is {name}</p></div>
		)
}
export default Condition;