import React, { useContext } from 'react'
import LanguageContext from '../../context/language/languageContext';
const Header = () => {

  const {dictionary} = useContext(LanguageContext)
  return (
    <div className="header">
        {dictionary.update_title}
    </div>
  )
}

export default Header