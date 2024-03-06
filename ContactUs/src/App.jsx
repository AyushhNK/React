import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation';
import Contactheader from './components/Contactheader/Contactheader'
import ContactForm from './components/ContactForm/ContactForm'
function App() {

  return (
    <>
      <Navigation/>
      <main className="main_container">
      	<Contactheader/>
      	<ContactForm/>
      </main>
    </>
  )
}

export default App
