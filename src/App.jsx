import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserInput from './Components/UserInput';
import Characters from './Components/Characters';
import ProtectedRoutes from './Components/ProtectedRoutes';
import CharactersDetails from './Components/CharactersDetails';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';

function App() {

  useEffect(() =>{

  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<UserInput/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/charactersdetails/:id" element={<CharactersDetails/>}/>
        </Route>
        
      </Routes>
    </HashRouter>
    
  )
}

export default App
