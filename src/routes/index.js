import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom"
import AuthRoutes from './auth'

const BaseRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Suspense
            fallback={
              <div
                style={{
                  height: "100vh",
                  width: "100%",
                  background: "#e3e3e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>Loading...</h1>
              </div>
            }
          >
            <AuthRoutes />
          </Suspense>
        }
      />
    </Routes>
  )
}

export default BaseRoutes
