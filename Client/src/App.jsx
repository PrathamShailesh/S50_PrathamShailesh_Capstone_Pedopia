import LandingPage from './components/LandingPage'
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Form/SignUp';
import Login from './components/Form/Login';



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/SignUp" element={<SignUp />}/>
      <Route path="/Login" element={<Login />}/>
    {/* <LandingPage/> */}
    </Routes>
    </>
  )
}

export default App
