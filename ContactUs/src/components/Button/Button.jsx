
import styles from './Button.module.css'
const Button=({text,icons,isOutline})=>{
	return(
		<>
			<button className={isOutline?styles.outline_btn:styles.primary_btn}>
				{icons}
				{text}
			</button>

		</>
		)
}
export default Button;