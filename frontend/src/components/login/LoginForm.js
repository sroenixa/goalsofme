import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import LanguageContext from '../../context/language/languageContext';
import { login } from '../../redux/actions/authActions';
import { useForm } from "react-hook-form";
import AlertContext from '../../context/alert/alertContext';

const LoginForm = (props) => {

    const {setAlert} = useContext(AlertContext)

    const dispatch = useDispatch();

    const {dictionary} = useContext(LanguageContext)

    const onSubmit = (data) => {
        dispatch(login({mail:data.email,password: data.password},props.history,setAlert));  
    }

    const { register, handleSubmit, watch,formState: { errors } } = useForm();


   
  return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                {errors.email &&  <label className="error-label">{dictionary.validate_mail}</label>}
                <input className="form-input" type="email" id="mail" name="mail" 
                {...register("email", 
                { 
                    required: true,  
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                })}
                autoComplete="off"/>
                <label className="form-label" htmlFor="mail">{dictionary.login_mail}</label>
            </div>
            <div className="form-group">
                {errors.password &&  <label className="error-label">{dictionary.validate_password}</label>}
                <input className="form-input" type="password" id="password" name="password"  
                {...register("password", { 
                    required: true, 
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                })}
                autoComplete="off"/>
                <label className="form-label" htmlFor="password">{dictionary.login_password}</label>
            </div>
            <button className="form-button" type="submit">{dictionary.login_connect}</button>
        </form>
    </div>
  )
}

export default LoginForm