import React from 'react'
import {Navigate} from "react-router-dom"

function ProtectRoutes({children}) {
  const isAuthenticated = true;

  // Si no está autenticado
  if (!isAuthenticated) {
    return <Navigate to='/login' replace/>
  }
  
  return children
}

export default ProtectRoutes