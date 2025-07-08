import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login, Signup } from '../screens'
import { Typography } from 'antd'
import logo from '../assets/img/logo_app.png'

const { Title } = Typography

const AuthRouter = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col d-none d-lg-block text-center"
                style={{marginTop: '15%'}}
                >
                    <div className="mb-4">
                        <img style={{
                            width: 256,
                            height: 256,
                            objectFit: 'cover'
                        }}
                            src={logo} alt=""
                        />
                    </div>
                    <div>
                        <Title>KANBAN</Title>
                    </div>
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
