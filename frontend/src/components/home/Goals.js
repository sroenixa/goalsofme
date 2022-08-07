import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo_white.svg';
import { createEntry, deleteEntry, getGoalById } from '../../redux/actions/goalActions';
import { compareDays } from '../../utils/compareDays';
import { isDayExist } from '../../utils/isDayExist';
import { useToday } from '../../utils/useToday';
import AlertContext from '../../context/alert/alertContext';
import LanguageContext from '../../context/language/languageContext';
const Goals = () => {
  
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenStore.auth.token);
  const customerId = useSelector(state => state.tokenStore.auth.id);
  const goalsSelector = useSelector(state => state.goalStore.goals);
  const {setAlert} = useContext(AlertContext)
  const {dictionary} = useContext(LanguageContext)
  const [goals, setGoals] = useState(goalsSelector);

  const todayData = useToday()

  useEffect(() => {
    if(goals.length == 0)
       dispatch(getGoalById(token,customerId));   
  },[]);

  useEffect(() => {
    setGoals(goalsSelector)  
  },[goalsSelector]);

  const changeEntryStatus= (checked,goalId,entryId) =>{
    if(checked){
      dispatch(createEntry({status:checked,goalId:goalId,time:todayData},setAlert,token,dictionary,getGoalById(token,customerId)))
    }
    else{
      dispatch(deleteEntry({id:entryId},setAlert,token,dictionary,getGoalById(token,customerId)))
    }
  } 
  const render = (data) => {
    var endDate = new Date(data.endTime);
    var startDate = new Date(data.createdTime);
    var today = new Date();
    var isExist = isDayExist(today,data.entries).control
    var isExistId = isDayExist(today,data.entries).id
    var todayEndDateCompare = compareDays(endDate,today)
    var todayStartDateCompare = compareDays(startDate,today)
    return(
      (todayEndDateCompare === "lt" || todayStartDateCompare === "gt") !== true  ? 
      <div className={`${isExist ? "active" : ""} goal`} key={data.id}>
      <Link className='edit-goal' to={`/goal/${data.id}`}>
        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="white"/>
        </svg> 
      </Link>
      <div className="icon">
        <img src={logo} alt="logo_svg"/>
      </div>
    <div className="title">{data.name}</div>
    <div className="time">{startDate.getDate() + "." + (startDate.getMonth()+1) + "." + startDate.getFullYear()} / {endDate.getDate() + "." + (endDate.getMonth()+1) + "." + endDate.getFullYear()}</div>
    <label className={`${isExist ? "active" : ""} switch`}>
          <input type="checkbox" defaultChecked={isExist}  onChange={(e) => changeEntryStatus(e.target.checked,data.id,isExistId)}/>
          <span className="slider round"></span>
    </label>
    </div> 
    : null
    );
}

  return (
    <div className="goals">
       {goals?.map((item,key)=> render(item,key))}
    </div>
  )
}

export default Goals