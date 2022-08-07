import { useReducer } from "react"
import ThemeContext from "./themeContext"
import ThemeReducer from "./themeReducer"

const ThemeState = ({children}) => {
    const localValue = localStorage.getItem('dark-mode')
    const initialState = {darkMode:localValue == "true" ? true : false}
    const [state,dispatch] = useReducer(ThemeReducer,initialState)
    return <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>{children}</ThemeContext.Provider>;

}

export default ThemeState