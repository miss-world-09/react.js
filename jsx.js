import { useState } from 'react'

import './App.css'

function App() {
  let name="riya";
  let i=[10,20,30];
  let obj={
    'name':"Riya",
    'cName':"MERN"
  }


  return (
    <>
      <h1 style={{color:"blue",backgroundColor:"aqua"}}>welcome to the site</h1>
      <div className='main'>
        <h1>{name}</h1>
      </div>
      <div>
        {obj.cName}
      </div>
    </>
  )
}

export default App
