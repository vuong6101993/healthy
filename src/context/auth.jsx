import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({
    isLogin: false,
    login: () => {},
    logout: () => {},
})

const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false)

    const login = () => {
        setIsLogin(true)
    }
    const logout = () => {
        setIsLogin(false)
    }
    const value = {
        isLogin,
        login,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider')
    }

    return context
}

export { AuthProvider, useAuth }
