import {dictionaryList,languageOptions} from "../../languages/languages"

const LanguageReducer = (state,action) => {
    switch(action.type) {
        case "en":
            return { userLanguage: 'en', dictionary: dictionaryList.en, options:languageOptions}
        case "tr":
            return { userLanguage: 'tr', dictionary: dictionaryList.tr, options:languageOptions}
        default:
            return state
    }
}

export default LanguageReducer