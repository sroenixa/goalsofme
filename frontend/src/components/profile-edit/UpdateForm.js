import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import AlertContext from '../../context/alert/alertContext';
import LanguageContext from '../../context/language/languageContext';
import { getUserById, updateUser } from '../../redux/actions/userActions';

const UpdateForm = (props) => {

  const {dictionary} = useContext(LanguageContext)
  const {setAlert} = useContext(AlertContext)
  const [customerState,setCustomerState] = useState();

  const customerId = useSelector(state => state.tokenStore.auth.id);
  const token = useSelector(state => state.tokenStore.auth.token);

  const customer = useSelector(state => state.userStore.user);

  const { register, handleSubmit,formState: { errors,isDirty }, reset } = useForm({
    defaultValues: customerState,
  });
  
  const dispatch = useDispatch();
  const onSubmit = (data) => {
      if(isDirty){
        dispatch(updateUser(token,customerId,{name:data.name,surname: data.surname,mail: data.mail},props.history,setAlert,dictionary));
      }
    }

  useEffect(() => {
    if(customer.length == undefined)
        dispatch(getUserById(token,customerId));   
  },[]);

  useEffect(() => {
    setCustomerState(customer)
  },[customer]);

  useEffect(() => {
    reset(customerState)
  },[customerState]);

  return (
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                {errors.name &&  <label className="error-label">{dictionary.validate_name}</label>}
                <input className="form-input" type="text" id="name" name="name" autoComplete="off" {...register("name", { required: true})}/>
                <label className="form-label" htmlFor="name">{dictionary.update_name}</label>
            </div>
            <div className="form-group">
                {errors.surname &&  <label className="error-label">{dictionary.validate_surname}</label>}
                <input className="form-input" type="text" id="surname" name="surname"  autoComplete="off" {...register("surname", { required: true})}/>
                <label className="form-label" htmlFor="surname">{dictionary.update_surname}</label>
            </div>
            <div className="form-group">
                {errors.mail &&  <label className="error-label">{dictionary.update_email}</label>}
                <input className="form-input" type="email" id="mail" name="mail" autoComplete="off" 
                {...register("mail", 
                { 
                    required: true,  
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                })}
                />
                <label className="form-label" htmlFor="mail">{dictionary.register_mail}</label>
            </div>
            <button className="form-button" type="submit">{dictionary.update_button}</button>
        </form>
    </div>
  )
}

export default UpdateForm