import {HiOutlineUserCircle} from 'react-icons/hi'
import {IoMdTrash} from 'react-icons/io'
import {RiEditCircleLine} from 'react-icons/ri'
import {db} from '../config/firebase'
import {deleteDoc,doc} from 'firebase/firestore'
import AddAndUpdateContact from './AddAndUpdataContact'
import useDisclose from '../hooks/useDisclosure'
import {toast} from 'react-toastify'


const ContactCard=({contact})=>{
	const {isOpen,onClose,onOpen}=useDisclose()
	const deleteContact= async(id)=>{
		try{
			await deleteDoc(doc(db,"contacts",id))
			toast.success("contact sucessfully deleted")
		}catch(error){
			console.log(error)
		}
	}
	return (
		<>
			<div key={contact.id} className="p-2 flex items-center justify-between rounded-lg bg-yellow">
              <div className="flex gap-1">
                <HiOutlineUserCircle className="text-orange text-3xl"/>
                <div className="">
                  <h1 className="font-medium">{contact.name}</h1>
                  <p className="text-sm">{contact.email}</p>
                </div>
              </div>
              <div className="flex text-3xl">
                <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/>
                <IoMdTrash className="text-orange cursor-pointer" onClick={()=>deleteContact(contact.id)}/>
              </div>
            </div>
            <AddAndUpdateContact isUpdate contact={contact} isOpen={isOpen} onClose={onClose}/>
		</>
		)
}
export default ContactCard;