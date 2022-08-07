import { useReducer } from "react"
import LanguageReducer from "./languageReducer"
import LanguageContext from "./languageContext"
import {languageOptions,dictionaryList} from "../../languages/languages"

const LanguageState = ({children}) => {
    var lang = localStorage.getItem("lang")
    if(lang === null){
        lang = "tr"
    }
    const initialState = { userLanguage: lang, dictionary: dictionaryList[lang], options:languageOptions}
    const [state,dispatch] = useReducer(LanguageReducer,initialState)
    
    const changeLanguage = (selected) => {
        localStorage.setItem("lang",selected)
        dispatch({
            type: selected
        })
    }

    const values = {userLanguage: state.userLanguage,dictionary: state.dictionary,options: state.options,changeLanguage}
    return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>
}

export default LanguageState