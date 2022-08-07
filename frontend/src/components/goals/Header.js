import React, { useContext } from 'react'
import LanguageContext from '../../context/language/languageContext'

const Header = () => {
  const {dictionary} = useContext(LanguageContext)

  return (
    <div className="header">
      <div className="title">{dictionary.goals_page_title}</div>                     
    </div>
  )
}

export default Header