import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Signup } from '../screens'


const AuthRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/sign-up' element={<Signup />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AuthRouter
