import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import headerLogo from '../../assets/svg/small-logo.svg';
import LanguageContext from '../../context/language/languageContext';
import Dates from './Dates';

const Header = () => {
  
  const {dictionary} = useContext(LanguageContext)
  const name = useSelector(state => state.tokenStore.auth.name);

  return (
    <div className="header">
    <img src={headerLogo} alt="logo_svg"/>
    <div className="info">
        {dictionary.goal_welcome}{name}{dictionary.goal_welcome_remember}
    </div>
    <Dates/>
</div>
  )
}

export default Header