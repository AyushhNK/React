import React from 'react';

const user={
	name:"ayush",
	age:21,
	imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
};

const Display=()=>{
	return (
		<>
		<h1>{user.name}</h1>
		<h2>{user.age}</h2>
		<img src={user.imageUrl} alt={'Photo of ' + user.name}/>
		</>
		);
};

export default Display;