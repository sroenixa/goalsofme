import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import AlertContext from '../../context/alert/alertContext';
import LanguageContext from '../../context/language/languageContext';
import { useToday } from '../../utils/useToday';
import { editGoal, getGoalByGoalId } from '../../redux/actions/goalActions';
const EditGoal = (props) => {

    const customerId = useSelector(state => state.tokenStore.auth.id);
    const token = useSelector(state => state.tokenStore.auth.token);
    const {setAlert} = useContext(AlertContext)
    const {dictionary} = useContext(LanguageContext)
    const today = useToday()
    const { register, handleSubmit,formState: { errors,isDirty },reset} = useForm();
    const dispatch = useDispatch();
    const [goalDetails,setGoalDetails] = useState();
    useEffect(() => {
        dispatch(getGoalByGoalId(token,props.id,setGoalDetails));   
    },[]);

    useEffect(() => {
        reset(goalDetails)
    },[goalDetails]);

    const onSubmit = (data) => {
        if(Date.parse(data.createdTime) > Date.parse(data.endTime)){
            setAlert(dictionary.validate_start_end,"error")
        }
        else{
            if(isDirty)
            dispatch(editGoal(props.id,{id:props.id,name:data.name,description: data.description,createdTime: data.createdTime,endTime:data.endTime,userId: customerId},props.history,setAlert,token,dictionary));  
        }
    }

  return (
    <div className="edit-menu">
        <div className="container">
        <div className="title">{dictionary.edit_goal_title}</div>
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    {errors.name &&  <label className="error-label">{dictionary.validate_name}</label>}
                    <input className="form-input" type="text" id="name" name="name" autoComplete="off" {...register("name", { required: true})}/>
                    <label className="form-label" htmlFor="name">{dictionary.add_goal_name}</label>
                </div>
                <div className="form-group">
                    {errors.desc &&  <label className="error-label">{dictionary.validate_desc}</label>}
                    <textarea className="form-input" type="text" id="desc" name="desc" autoComplete="off" {...register("description", { required: true})}></textarea>
                    <label className="form-label" htmlFor="desc">{dictionary.add_goal_desc}</label>
                </div>
                <div className="two-column">
                    <div className="form-group half-width">
                        {errors.startdate &&  <label className="error-label">{dictionary.validate_start}</label>}
                        <input className="form-date" type="date" id="start" name="start" autoComplete="off" {...register("createdTime", { required: true})}/>
                        <label className="form-label" htmlFor="start">{dictionary.add_goal_startdate}</label>
                    </div>
                    <div className="form-group half-width">
                        {errors.enddate &&  <label className="error-label">{dictionary.validate_end}</label>}
                        <input className="form-date" type="date" id="end" name="end" autoComplete="off" {...register("endTime", { required: true})}/>
                        <label className="form-label" htmlFor="end">{dictionary.add_goal_enddate}</label>
                    </div>
                </div>
                <button className="form-button" type="submit">{dictionary.edit_goal_complete}</button>
            </form>
        </div>
        </div>
</div>
  )
}

export default EditGoal