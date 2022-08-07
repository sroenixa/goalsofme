import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LanguageContext from '../../context/language/languageContext'

const Bottom = () => {
  const {dictionary} = useContext(LanguageContext)
  return (
    <div className="bottom-text">{dictionary.register_bottom_text}<Link className='bottom-link' to="/login">{dictionary.register_bottom_link}</Link></div>
  )
}

export default Bottom