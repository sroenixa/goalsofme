import React from 'react'
import menuSvg from '../../assets/svg/menu.svg'
import addSvg from '../../assets/svg/add_button.svg'
import profileSvg from '../../assets/svg/profile.svg'
import { Link } from 'react-router-dom'
const BottomMenu = (props) => {
  const toggleMenu = (e) => {
    e.preventDefault()
    props.setactive(!props.active)
  };

  return (
    <div className="bottom-menu">
      <Link to="/">
          <img src={menuSvg} alt="menu_svg" />                           
      </Link>
      {!props.addactive &&
        <div onClick={toggleMenu} className={`${props.active ? "active" : ""} add-button`}>
          <img src={addSvg} alt="menu_svg" />  
       </div> 
      } 
      <Link to="/profile">
          <img src={profileSvg} alt="menu_svg" />  
      </Link>      
    </div>
  )
}

export default BottomMenu