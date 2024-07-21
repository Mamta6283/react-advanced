import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'

function App() {
  // let myObj={
  //   name:"mamta",
  //   age:21
  // }

  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 text-3xl' >currency app</h1>
      {/* <Card channel="chai aur code" myObj={myObj} btn="click me"></Card> 
      <Card></Card> */}
      <Input></Input>

    </>
  )
}

export default App
