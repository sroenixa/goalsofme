import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import AlertContext from '../../context/alert/alertContext';
import LanguageContext from '../../context/language/languageContext';
import { useToday } from '../../utils/useToday';
import { createAward, postGoal } from '../../redux/actions/goalActions';
import backIcon from '../../assets/svg/back_button.svg';
import award from '../../assets/svg/white_award_icon.svg';
const AddAward = (props) => {

    const customerId = useSelector(state => state.tokenStore.auth.id);
    const token = useSelector(state => state.tokenStore.auth.token);
    const {setAlert} = useContext(AlertContext)
    const {dictionary} = useContext(LanguageContext)
    const today = useToday()
    const { register, handleSubmit,formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(createAward({name:data.name,time: data.startdate,goalId: props.id},setAlert,token,dictionary,props.setactive));  
      }


  return (
    <div className={`${props.active ? "active" : ""} add-award-menu`}>
        <div className="container">
            <div className="header">
                        <a className="back-button"  onClick={(e) => props.setactive(false)}>
                            <img src={backIcon} alt="back"/>
                        </a>
                        <div className="name">
                        <img src={award} alt="award"/>
                        {dictionary.goal_detail_add_award_title} 
                        </div>
            </div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        {errors.name &&  <label className="error-label">{dictionary.validate_name}</label>}
                        <input className="form-input" type="text" id="name" name="name" autoComplete="off" {...register("name", { required: true})}/>
                        <label className="form-label" htmlFor="name">{dictionary.goal_detail_add_award_name}</label>
                    </div>
                    <div className="form-group half-width">
                            {errors.startdate &&  <label className="error-label">{dictionary.validate_start}</label>}
                            <input className="form-date" type="date" id="start" name="start" min={today} autoComplete="off" {...register("startdate", { required: true})}/>
                            <label className="form-label" htmlFor="start">{dictionary.goal_detail_add_award_date}</label>
                        </div>
                    <button className="form-button" type="submit">{dictionary.goal_detail_add_award_complete}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddAward