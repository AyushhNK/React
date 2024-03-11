import {useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import {FiSearch} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {IoMdTrash} from 'react-icons/io'
import {RiEditCircleLine} from 'react-icons/ri'
import {collection,getDocs} from 'firebase/firestore'
import {db} from './config/firebase'

export default function App() {

  const [contacts,setContacts]=useState([])
  useEffect(()=>{
    const getContacts= async()=>{
      try{
        const contactsRef=collection(db,"contacts");
        const contactsSnapshot=await getDocs(contactsRef)
        const contactLists=contactsSnapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data()

          }
        })
        setContacts(contactLists)
      }catch(error){
        console.log(error)
      }
    }
    getContacts()
  },[])

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar/>
        <div className="flex gap-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="ml-1 text-white text-3xl absolute"/>
            <input type="text" className=" text-white pl-9 flex-grow rounded-md border bg-transparent border-white h-10"/>
          </div>
            <AiFillPlusCircle className=" cusor-pointer text-5xl text-white "/>
        </div>
        <div className="">
          {contacts.map(contact=>(
            <div key={contact.id} className="bg-yellow">
              <div className="">
                <HiOutlineUserCircle className="text-orange text-3xl"/>
                <div className="text-white">
                  <h1 className="">{contact.name}</h1>
                  <p className="">{contact.email}</p>
                </div>
              </div>
              <div className="">
                <RiEditCircleLine/>
                <IoMdTrash/>
              </div>
            </div>
            ))}
        </div>
      </div>
    </>
  )
}