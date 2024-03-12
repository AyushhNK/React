import {useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import ContactCard from './components/ContactCard'
import AddAndUpdateContact from './components/AddAndUpdataContact'
import useDisclose from './hooks/useDisclosure'
import {FiSearch} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'
import {collection,getDocs,onSnapshot} from 'firebase/firestore'
import {db} from './config/firebase'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {

  const [contacts,setContacts]=useState([])
  const {isOpen,onClose,onOpen}=useDisclose()

  useEffect(()=>{
    const getContacts= async()=>{
      try{
        const contactsRef=collection(db,"contacts");
        
        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists=snapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data()

          }
        })
        setContacts(contactLists)
        return contactLists
        })
      }catch(error){
        console.error(error)
      }
    }
    getContacts()
  },[])

const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  }

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar/>
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="ml-1 text-white text-3xl absolute"/>
            <input onChange={filterContacts} type="text" className=" text-white pl-9 flex-grow rounded-md border bg-transparent border-white h-10"/>
          </div>
            <AiFillPlusCircle onClick={onOpen} className=" cusor-pointer text-5xl text-white "/>
        </div>
        <div className="mt-4 gap-3 flex flex-col">
          {contacts.map(contact=>(
            <ContactCard contact={contact}/>
            ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
      <ToastContainer position="bottom-center" />
    </>
  )
}