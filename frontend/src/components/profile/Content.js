import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import goalListSvg from '../../assets/svg/goal_list.svg'
import logoutSvg from '../../assets/svg/logout.svg'
import profileEditSvg from '../../assets/svg/profile_edit.svg'
import LanguageContext from '../../context/language/languageContext'
const Content = (props) => {
    const {dictionary} = useContext(LanguageContext)

    const toggleModal = () => {
     props.setactive(!props.active);
   }

  return (
    <div className="buttons">
    <Link to="/goals" className="button">
         <img src={goalListSvg} alt='goal_list_svg'/>
        {dictionary.profile_page_edit_goals}  
     </Link>
     <Link to="/profile-edit" className="button">
         <img src={profileEditSvg} alt='profile_edit_svg'/>
         {dictionary.profile_page_edit_profile}    
     </Link>
     <div onClick={toggleModal} className="button">
         <img src={logoutSvg} alt='logout_svg'/>
         {dictionary.profile_page_logout}    
     </div>
 </div>
  )
}

export default Content