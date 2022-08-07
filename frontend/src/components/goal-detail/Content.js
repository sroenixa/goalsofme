import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getGoalDetail } from '../../utils/getGoalDetail'
import { Link } from 'react-router-dom';
import back from '../../assets/svg/back_button.svg';
import edit from '../../assets/svg/edit_icon.svg';
import clock from '../../assets/svg/clock_icon.svg';
import award from '../../assets/svg/award_icon.svg';
import deleteIcon from '../../assets/svg/orange_delete_icon.svg';
import plusIcon from '../../assets/svg/plus.svg';
import infoIcon from '../../assets/svg/info.svg';
import notesIcon from '../../assets/svg/notes.svg';
import historyIcon from '../../assets/svg/history.svg';
import LanguageContext from '../../context/language/languageContext';
import { deleteAwardById } from '../../redux/actions/goalActions';
import AlertContext from '../../context/alert/alertContext';


const Content = (params) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenStore.auth.token);
  
  const {dictionary} = useContext(LanguageContext)
  const {setAlert} = useContext(AlertContext)

  const goalsSelector = useSelector(state => state.goalStore.goals);
  const goalDetail = getGoalDetail(params.id,goalsSelector);

  const deleteAward = (awardId) => {
    dispatch(deleteAwardById({id:awardId},setAlert,token,dictionary))
  }

  const openAddAwardMenu = () => {
    params.setactive(true);
  }

  return (
    <div className="wrapper">
    <div className="header">
        <Link className="back-button" to="/">
            <img src={back} alt="back"/>
        </Link>
        <div className="name">
          {goalDetail.title}
        </div>
        <Link className="edit-button" to={`/goal-edit/${goalDetail.id}`}>
            <img src={edit} alt="edit"/>
        </Link>
    </div>
    <div className="time-zone">
        <div className="time">
            <img src={clock} alt="clock_icon"/>
            <span className="title">{dictionary.goal_detail_goal_time}</span>
            <span className="data">{goalDetail.days.length}{dictionary.goal_detail_day}</span>
        </div>
        <div className="left">
            <span className="title">{dictionary.goal_detail_goal_time_left}</span>
            <span className="data">{goalDetail.leftDays}{dictionary.goal_detail_day}</span>
        </div>
    </div>
    <div className="reports">
        <div className="block">
            <div className="top">
                <div className="progress-circle" data-progress={goalDetail.compeleteAverage}>
                    <div className="circle">
                        <div className="full progress-circle__slice">
                            <div className="progress-circle__fill"></div>
                        </div>
                        <div className="progress-circle__slice">
                            <div className="progress-circle__fill"></div>
                            <div className="progress-circle__fill progress-circle__bar"></div>
                        </div>
                    </div>
                    <div className="circle-title">%{goalDetail.compeleteAverage}</div>
                    <div className="progress-circle__overlay"></div>
                </div>
            </div>
            <div className="bottom">{dictionary.goal_detail_completed}</div>
        </div>
        <div className="block">
            <div className="top">
                <div className="title">{goalDetail.passDays}</div>
            </div>
            <div className="bottom">{dictionary.goal_detail_total_day}</div>
        </div>
        <div className="block">
            <div className="top">
                <div className="title">{goalDetail.unSubmitDays}</div>
            </div>
            <div className="bottom">{dictionary.goal_detail_total_day_lost}</div>
        </div>
        <div className="block">
            <div className="top">
                <div className="progress-circle" data-progress={goalDetail.averageFailureSubmit}>
                    <div className="circle">
                        <div className="full progress-circle__slice">
                            <div className="progress-circle__fill"></div>
                        </div>
                        <div className="progress-circle__slice">
                            <div className="progress-circle__fill"></div>
                            <div className="progress-circle__fill progress-circle__bar"></div>
                        </div>
                    </div>
                    <div className="circle-title">%{goalDetail.averageFailureSubmit}</div>
                    <div className="progress-circle__overlay"></div>
                </div>
            </div>
            <div className="bottom">{dictionary.goal_detail_total_lost}</div>
        </div>
    </div>
    <div className="awards">
        <div className="title">
            <img src={award} alt="edit"/>
            {dictionary.goal_detail_awards}
        </div>
        <div className="list">
            {goalDetail.awards?.map(function(object, i){
            return (
                <div className="award" key={object.id}>
                    {object.name} -  {object.time}
                <img src={deleteIcon} onClick={(e) => deleteAward(object.id)} alt="delete"/>
                </div>
            )
            })}
            <a className="add-award-button" onClick={(e) => openAddAwardMenu()}><img src={plusIcon} alt="plus"/>{dictionary.goal_detail_add_award}</a>
        </div>
        <div className="info">
            <img src={infoIcon} alt="info"/>
            {dictionary.goal_detail_award_description}
        </div>
        {goalDetail.todayAwards?.map(function(object, i){
            return (
                <div className="award-info" key={object.id}>
                {dictionary.goal_detail_today}{object.name}
                </div>
            )
            })}
    </div>
    <div className="description">
        <div className="title">
            <img src={notesIcon} alt="notes"/>
            {dictionary.goal_detail_desc} 
        </div>
        <div className="content">
            {goalDetail.description}
        </div>
    </div>
    <div className="history">
        <div className="title">
            <img src={historyIcon} alt="notes"/>
            {dictionary.goal_detail_history}
        </div>
        <div className="days">
        {goalDetail.days?.map(function(object, i){
            if(object.isAward){
                return (
                    <span className="award" key={i}>{i + 1}</span>
                )
            }
            else if(object.compare == 'lt' && object.isInclude){
                return (
                    <span className="submit" key={i}>{i + 1}</span>
                )
            }
            else if(object.compare == 'eq' && object.isInclude){
                return (
                    <span className="submit" key={i}>{i + 1}</span>
                )
            }
            else if(object.compare == 'lt' && !object.isInclude){
                return (
                    <span className="unsubmit" key={i}>{i + 1}</span>
                )
            }
            else{
                return (
                    <span key={i}>{i + 1}</span>
                )
            }
        })}
        </div>
    </div>
</div>
  )
}

export default Content