import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import {MdMessage} from 'react-icons/md'
import { FaPhoneAlt } from "react-icons/fa";
import {HiMail} from "react-icons/hi"
const ContactForm=()=>{
	return (
		<>
			<section className={styles.container}>
				
				<div className={styles.contact_form}>
					<div className={styles.top_btn}>
						<Button text="VIA CHAT SUPPORT" icons={<MdMessage fontSize="24px"/>}/>
						<Button text="VIA CALL" icons={<FaPhoneAlt fontSize="24px"/>}/>
					</div>
					<Button isOutline={true} text="VIA EMAIL FORM" icons={<HiMail fontSize="24px"/>} className={styles.outline_btn}/>
					<form action="">
						<div className={styles.form_control}>
							<label htmlFor="name">Name</label>
							<input type="text" name="name"/>
						</div>
						<div className={styles.form_control}>
							<label htmlFor="email">Email</label>
							<input type="email" name="email"/>
						</div>
						<div className={styles.form_control}>
							<label htmlFor="text">Text</label>
							<textarea name="text" rows="8"/>
						</div>
						<div style={{display:"flex",justifyContent:"end"}}>
							<Button text="SUBMIT"/>

						</div>
						
					</form>
				</div>
				<div className={styles.contact_image}>
					<img src="/images/contact.svg" alt="cotact"/>>
				</div>
			</section>

		</>
		)
}
export default ContactForm;