import React, { useContext, useEffect } from 'react'
import AlertContext from '../context/alert/alertContext'
import LanguageContext from '../context/language/languageContext'



const Search = () => {

  const {setAlert} = useContext(AlertContext)
  const {userLanguage,dictionary,options,changeLanguage} = useContext(LanguageContext)
  useEffect(()=> {
    const obj = {message: 'lütfen bir anahtar kelime giriniz.', msgtpye: 'danger'};
    setAlert(obj.message,obj.msgtpye);
  }, [])

  const handleLanguageChange = (e) =>{
    changeLanguage(e.target.value);
  }
  return (
    <div>
      {dictionary.hello}
      <select
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(options).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </select> 
    </div>
  )
}

export default Search