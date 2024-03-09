import styled from 'styled-components'

export const Button=styled.button`
	color:white;
	padding:10px 18px;
	background:#000000;
	border-radius:5px;
	min-width: 220px;
	border:none;
	font-size:16px;
	border-color:1px solid transparent;
	cursor:pointer;

	&:hover{
		background-color:white;
		border:1px solid black;
		color:black;
		transition:0.3s background ease-in;
	}
`;

export const OutlineButton=styled(Button)`
	background:white;
	color:black;
	border:1px solid black;
	&:hover{
		background-color:black;
		border:1px solid transparent;
		color:white;
		transition:0.3s background ease-in;
	}
`;