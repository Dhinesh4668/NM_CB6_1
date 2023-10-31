import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeScreen from './app/Screen/Home/HomeScreen'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App