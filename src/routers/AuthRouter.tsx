import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Signup } from '../screens'


const AuthRouter = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src="" alt="" />
                </div>
                <div className="col content-center">
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Login />} />
                            <Route path='/sign-up' element={<Signup />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>

    )
}

export default AuthRouter
