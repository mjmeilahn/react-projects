
import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {}, // EMPTY FOR DEMO PURPOSES
    onLogin: (email, password) => {} // EMPTY FOR DEMO PURPOSES
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        // We should of course check email and password
        // But it's just a dummy demo
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')

    if (storedUserLoggedInInformation === '1') {
        setIsLoggedIn(true)
    }
    }, [])

    return (
        // MUST HAVE "value" ON CONTEXT API PROVIDERS
        // WHAT IS PASSED CAN BE ANYTHING
        // THIS EXAMPLE IS AN OBJECT WITH KEY-VALUE PAIRS
        <AuthContext.Provider 
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}
        >{props.children}</AuthContext.Provider>
    )
}

export default AuthContext