import { Formik, Form, Field } from 'formik';
import Model from './Model';
import {addDoc,collection,updateDoc,doc} from "firebase/firestore"
import {db} from '../config/firebase'
import { toast } from "react-toastify";
const AddAndUpdateContact = ({ isOpen, onClose,isUpdate,contact }) => {
  const addContact= async (contact)=>{
  	try{
  		const contactRef=collection(db,"contacts");
  		await addDoc(contactRef,contact)
  		toast.success("contact added sucessfully")
  	}catch(error){
  		console.log(error)
  	}
  }

  const updateContact= async (contact,id)=>{
  	try{
  		const contactRef=doc(db,"contacts",id);
  		await updateDoc(contactRef,contact)
  		toast.success("contact updated sucessfully")
  	}catch(error){
  		console.log(error)
  	}
  }

  return (
    <>
      <div>
        <Model isOpen={isOpen} onClose={onClose}>
          <Formik
            initialValues={isUpdate?{
            	name: contact.name,
              email:contact.email
            }:{
              name: '',
              email:''
            }}
            onSubmit={(values) => {
              
            	isUpdate?updateContact(values,contact.id):addContact(values)
              console.log(values);
              onClose()
            }}
          >
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" className="h-10 border"/>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" className="h-10 border"/>
              </div>
              <button className=" border bg-orange px-3 py-1.5">{isUpdate?"Update":"Add"} Contact</button>
            </Form>
          </Formik>
        </Model>
      </div>
    </>
  );
};

export default AddAndUpdateContact;
