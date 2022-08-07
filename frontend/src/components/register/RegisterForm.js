import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import LanguageContext from '../../context/language/languageContext';
import {postUser} from '../../redux/actions/userActions'
import { useForm } from "react-hook-form";
import AlertContext from '../../context/alert/alertContext';

const RegisterForm = (props) => {

    const {setAlert} = useContext(AlertContext)

    const dispatch = useDispatch();

    const {dictionary} = useContext(LanguageContext)

    const onSubmit = (data) => {
          dispatch(postUser({name:data.name,surname: data.surname,mail: data.email,password:data.password},props.history,setAlert));  
      }

    const { register, handleSubmit, watch,formState: { errors } } = useForm();
   
  return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                {errors.name &&  <label className="error-label">{dictionary.validate_name}</label>}
                <input className="form-input" type="text" id="name" name="name" autoComplete="off" {...register("name", { required: true})}/>
                <label className="form-label" htmlFor="name">{dictionary.register_name}</label>
            </div>
            <div className="form-group">
                {errors.surname &&  <label className="error-label">{dictionary.validate_surname}</label>}
                <input className="form-input" type="text" id="surname" name="surname"  autoComplete="off" {...register("surname", { required: true })}/>
                <label className="form-label" htmlFor="surname">{dictionary.register_surname}</label>
            </div>
            <div className="form-group">
                {errors.email &&  <label className="error-label">{dictionary.validate_mail}</label>}
                <input className="form-input" type="email" id="mail" name="mail" autoComplete="off" 
                {...register("email", 
                { 
                    required: true,  
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                })}
                />
                <label className="form-label" htmlFor="mail">{dictionary.register_mail}</label>
            </div>
            <div className="form-group">
                {errors.password &&  <label className="error-label">{dictionary.validate_password}</label>}
                <input className="form-input" type="password" id="password" name="password"  autoComplete="off"
                {...register("password", { 
                    required: true, 
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                })}
                />
                <label className="form-label" htmlFor="password">{dictionary.register_password}</label>
            </div>
            <div className="form-group">
                {errors.confirm_password &&  <label className="error-label">{dictionary.validate_password_again}</label>}
                <input className="form-input" type="password" id="passwordagain" name="passwordagain" autoComplete="off"
                {...register("confirm_password", {
                    required: true,
                    validate: (val) => {
                      if (watch('password') != val) {
                        return "Your passwords do no match";
                      }
                    },
                   })}
                />
                <label className="form-label" htmlFor="passwordagain">{dictionary.register_password_again}</label>
            </div>
            <button className="form-button" type="submit">{dictionary.register_button}</button>
        </form>
    </div>
  )
}

export default RegisterForm