import BufferLayout from 'layouts'
import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import ForgotPassword from 'views/auth/ForgotPassword'
import Signin from 'views/auth/Signin'

const routes = [
  {
    path: "forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "signin",
    element: <Signin />
  },
  {
    path: "set-password",
    element: <div>setting password</div>
  }
]

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<BufferLayout />}>
        <Route path='/' element={<Navigate to='/signin' />} />
        {routes.map(field => (
          <Route key={field.path} path={field.path} element={field.element} />
        ))}
        <Route path='*' element={<>Not Found</>} />
      </Route>
    </Routes>

  )
}

export default AuthRoutes
