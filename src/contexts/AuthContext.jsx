import { createContext, useState, useCallback } from 'react'
import { api } from '../services/api';

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    const userApi = JSON.parse(localStorage.getItem("user"));
    return token && userApi ? { token, user: userApi } : null;
    });
    const [loading, setLoading] = useState(false);

    const login = useCallback(async (email, password) => {
        setLoading(true);

        try{
            const res  = await api.post("/login", { email, password});

            const token = res.acessToken;
            localStorage.setItem("token", token);
            const userApi = res.user;
            localStorage.setItem('user', JSON.stringify(userApi))
        } finally {
            setLoading(false);
        } }, [])

    const register = async (username, email, password) => {
        setLoading(true);
        try{
            const res = await api.post("/register", {username, email, password})
         if (!res.ok) {throw new Error('Credenciais inválidas')}
             const token = res.acessToken;
            localStorage.setItem("token", token);
            const userApi = res.user;
            localStorage.setItem("user", JSON.stringify(userApi))

        
         setUser();
         
        } finally {
            setLoading(false);
        }
    }
        

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user, register }}>
            {children}
        </AuthContext.Provider>
    )
}