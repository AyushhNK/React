import {useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import Rules from './Rules'
import styled from 'styled-components'
import {Button,OutlineButton} from './styled/Button'
const GamePlay=()=>{
	const [score,setScore]=useState(0)
	const [selectedNumber,setSelectedNumber]=useState();
	const [currentDice,setCurrentDice]=useState(1);
	const [error,setError]=useState()
	const [showRules,setShowRules]=useState(false)

	const generateRandomNumber=(min,max)=>{
		return Math.floor(Math.random()*(max-min)+min);
		
	}

	const rollDice=()=>{
		if(!selectedNumber){
			setError("You have no selected a number.")
			return
		}
		setError(null)
		const randomNumber=generateRandomNumber(1,7)
		console.log(randomNumber)
		setCurrentDice((prev)=>randomNumber)
		if(randomNumber==selectedNumber){
			setScore((prev)=>prev+selectedNumber)
			setSelectedNumber(null)
		}
		else{
			setScore((prev)=>prev-2)
			setSelectedNumber(null)
		}
	}

	const resetScore=()=>{
		setScore(0)
		setShowRules(false)
	}

	return (
		<>
			<MainContainer>
				<div className="top_section">
					<TotalScore score={score}/>
					<NumberSelector error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
				</div>
				<RollDice currentDice={currentDice} rollDice={rollDice}/>
				<div className="btns">
					<OutlineButton onClick={resetScore}>Reset</OutlineButton>
					<Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
				</div>
				{showRules&&<Rules/>}
			</MainContainer>
		</>
		)
}
export default GamePlay

const MainContainer=styled.div`
	/*padding-top:70px;*/
	.top_section{
		display:flex;
		justify-content:space-around;
		align-items:end;
	}

	.btns{
		display: flex;
		flex-direction:column;
		justify-cotent:center;
		align-items:center;
		gap:10px;
	}
`