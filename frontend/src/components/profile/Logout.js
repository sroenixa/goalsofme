import React, { Fragment, useContext } from 'react'
import { useDispatch } from 'react-redux';
import LanguageContext from '../../context/language/languageContext';
import { logout } from '../../redux/actions/authActions';

const Logout = (props) => {
const {dictionary} = useContext(LanguageContext)
const dispatch = useDispatch();
const toggleModalLogout = () => {
    props.setactive(!props.active);
  }
const logoutHandle = () => {
    dispatch(logout(props.history))
}
  return (
    <Fragment>
         <div className={`${props.active ? "active" : ""} logout-modal`}>
                <div className="title">{dictionary.logout_modal_title}</div>
                <div className="buttons">
                    <button className="back" type='button'  onClick={toggleModalLogout}>{dictionary.logout_modal_back}</button>
                    <button className="quit" type='button' onClick={logoutHandle}>{dictionary.logout_modal_logout}</button>
                </div>
            </div>
            <div className={`${props.active ? "active" : ""} overlay`}>
            </div>
    </Fragment>
  )
}

export default Logout