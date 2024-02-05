import { useState } from 'react'
import './App.css'
import Hello from './hello.jsx'
import Display from './user.jsx'
import Condition from './conditonal.jsx'
import List from './list.jsx'

// function App() {
//   return (
//     <h1>hello world</h1>
//     )
// }

const App=()=> {
  let cond=false;
  return (
    <div>
      <h1>hello i am a react component</h1>
      <Hello />
      <Display />
      {cond && <Condition />}
      <List />
    </div>);
};

export default App;


