import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grid2, List } from '@mui/material'
import { Group, ListAlt } from '@mui/icons-material'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage/HomePage'
import Authentication from './Components/Authentication/Authentication'


function App() {

  return (
  <div>
  <Routes>
    <Route path='/*'
          element={true?<HomePage/> :<Authentication/>}
    ></Route>
  </Routes>
    </div>
  )
}

export default App
