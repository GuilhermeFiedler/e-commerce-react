import { createContext, useEffect } from "react";
import Button from "../components/Button/Button";

const ThemeContext = createContext(null);

export function ThemeProvider({children}){
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme')  || 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

    return (

        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);

export function BotaoTema(){
    const { theme, toggleTheme } = useTheme();
    return (
        <Button onClick={toggleTheme}>
            {theme === 'light' ? 'Dark' : 'Light'}
        </Button>

    )
}