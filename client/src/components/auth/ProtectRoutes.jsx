import React from 'react'
import {Navigate} from "react-router-dom"

function ProtectRoutes({Children}) {
  const isAuthenticated = false;

  // Si no está autenticado
  if (!isAuthenticated) {
    return <Navigate to='/login' replace/>
  }
  
  return Children
}

export default ProtectRoutes