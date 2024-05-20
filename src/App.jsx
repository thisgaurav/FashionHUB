import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import { Route, Routes, useNavigate, } from 'react-router-dom'
import Signin from './components/Signin'


function App() {
  return (
    <>
       <Routes>
          {/* <Route path='/Home' element={<Home />} /> */}
        </Routes> :
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/signin' element={<Signin />} />
          {/* <Route path='*' element={<Error />} /> */}
        </Routes>
    </>
  )
}

export default App
