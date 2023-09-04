import {createContext} from "react"

type ThemeContextType = {
    theme: string
    ChangeTheme: (theme: string) => "light" | "dark"
}


const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    ChangeTheme: () => "light"
})

export default ThemeContext