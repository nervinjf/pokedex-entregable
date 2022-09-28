import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserInput from './Components/UserInput';
import Characters from './Components/Characters';
import ProtectedRoutes from './Components/ProtectedRoutes';
import CharactersDetails from './Components/CharactersDetails';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import Settings from './Components/Settings';
import { useSelector } from 'react-redux';

function App() {

  const theme = useSelector(state => state.change)

  useEffect(() =>{
    document.body.setAttribute('data-theme', theme);
  }, [theme])

  return (
    <div className='body' >
    <HashRouter>
      <Routes>
        <Route path="/" element={<UserInput/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/charactersdetails/:id" element={<CharactersDetails/>}/>
        </Route>
      </Routes>
    </HashRouter>
    </div>
    
  )
}

export default App
