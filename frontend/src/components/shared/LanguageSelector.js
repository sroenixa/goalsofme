import React, { useContext } from 'react'
import LanguageContext from '../../context/language/languageContext'

const LanguageSelector = () => {

  const {userLanguage,dictionary,options,changeLanguage} = useContext(LanguageContext);
  const handleLanguageChange = (e) =>{
    changeLanguage(e.target.value);
  }
  return (
    <div className="language-selector">
       <select  onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(options).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select> 
    </div>
  )
}

export default LanguageSelector



