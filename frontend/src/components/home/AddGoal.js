import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import AlertContext from '../../context/alert/alertContext';
import LanguageContext from '../../context/language/languageContext';
import { useToday } from '../../utils/useToday';
import { postGoal } from '../../redux/actions/goalActions';

const AddGoal = (props) => {

    const customerId = useSelector(state => state.tokenStore.auth.id);
    const token = useSelector(state => state.tokenStore.auth.token);
    const {setAlert} = useContext(AlertContext)
    const {dictionary} = useContext(LanguageContext)
    const today = useToday()
    const { register, handleSubmit,formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        if(Date.parse(data.startdate) > Date.parse(data.enddate)){
            setAlert(dictionary.validate_start_end,"error")
        }
        else{
            dispatch(postGoal({name:data.name,description: data.desc,createdTime: data.startdate,endTime:data.enddate,userId: customerId},props.history,setAlert,token,dictionary));  
        }
      }


  return (
    <div className={`${props.active ? "active" : ""} add-menu`}>
        <div className="container">
            <div className="title">{dictionary.add_goal_title}</div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        {errors.name &&  <label className="error-label">{dictionary.validate_name}</label>}
                        <input className="form-input" type="text" id="name" name="name" autoComplete="off" {...register("name", { required: true})}/>
                        <label className="form-label" htmlFor="name">{dictionary.add_goal_name}</label>
                    </div>
                    <div className="form-group">
                        {errors.desc &&  <label className="error-label">{dictionary.validate_desc}</label>}
                        <textarea className="form-input" type="text" id="desc" name="desc" autoComplete="off" {...register("desc", { required: true})}></textarea>
                        <label className="form-label" htmlFor="desc">{dictionary.add_goal_desc}</label>
                    </div>
                    <div className="two-column">
                        <div className="form-group half-width">
                            {errors.startdate &&  <label className="error-label">{dictionary.validate_start}</label>}
                            <input className="form-date" type="date" id="start" name="start" min={today} autoComplete="off" {...register("startdate", { required: true})}/>
                            <label className="form-label" htmlFor="start">{dictionary.add_goal_startdate}</label>
                        </div>
                        <div className="form-group half-width">
                            {errors.enddate &&  <label className="error-label">{dictionary.validate_end}</label>}
                            <input className="form-date" type="date" id="end" name="end" min={today} autoComplete="off" {...register("enddate", { required: true})}/>
                            <label className="form-label" htmlFor="end">{dictionary.add_goal_enddate}</label>
                        </div>
                    </div>
                    <button className="form-button" type="submit">{dictionary.add_goal_complete}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddGoal