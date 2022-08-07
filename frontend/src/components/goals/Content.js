import React, { useContext, useEffect, useState } from 'react'
import orangeLogo from '../../assets/svg/logo_orange.svg'
import editIcon from '../../assets/svg/edit_icon.svg'
import deleteIcon from '../../assets/svg/delete_icon.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGoalById, getGoalById } from '../../redux/actions/goalActions'
import AlertContext from '../../context/alert/alertContext'
import LanguageContext from '../../context/language/languageContext'
const Content = () => {
  const dispatch = useDispatch();
  const goalsSelector = useSelector(state => state.goalStore.goals);
  const token = useSelector(state => state.tokenStore.auth.token);
  const customerId = useSelector(state => state.tokenStore.auth.id);
  const {setAlert} = useContext(AlertContext)
  const {dictionary} = useContext(LanguageContext)
  const [goals, setGoals] = useState(goalsSelector);

  useEffect(() => {
    if(goals.length == 0)
       dispatch(getGoalById(token,customerId));   
  },[]);

  useEffect(() => {
    setGoals(goalsSelector)  
  },[goalsSelector]);

  const deleteGoal = (goalId) => {
    dispatch(deleteGoalById({id:goalId},setAlert,token,dictionary))
  }
  const render = (data) => {
    return(
      <div className="goal" key={data.id}>
          <div className="content">
              <img src={orangeLogo} alt="orange_logo"/>
              {data.name}  
          </div>
          <div className="buttons">
              <Link to={`/goal-edit/${data.id}`} className="edit">
                  <img src={editIcon} alt="edit_icon"/>
              </Link>
              <div onClick={(e) => deleteGoal(data.id)} className="delete">
                  <img src={deleteIcon} alt="delete_icon"/>
              </div>
          </div>
      </div>
    );
  }

  return (
    <div className="goals">
        {goals?.map((item,key)=> render(item,key))}
    </div>
  )
}

export default Content