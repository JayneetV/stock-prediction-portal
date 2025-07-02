import React from 'react'
import { useState } from 'react'

// Create context
const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    const [isLoggedIn, setisLoggedIn] = useState(
        !!localStorage.getItem('accessToken') //!! this will give true or false
    )
  return (
    <AuthContext.Provider value={{isLoggedIn, setisLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext}