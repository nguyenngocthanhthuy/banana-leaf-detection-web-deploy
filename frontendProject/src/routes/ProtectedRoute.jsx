import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const {user } = JSON.parse(localStorage.getItem('auth'));

    return auth.account ? <>{children}</> : <Navigate to='/login' />;
}

export default ProtectedRoute;