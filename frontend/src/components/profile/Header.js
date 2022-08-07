import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import LanguageContext from '../../context/language/languageContext'
import { getSuccessRate,getFailureRate } from '../../utils/rateCalculate';

const Header = () => {
 const {dictionary} = useContext(LanguageContext)
 const userName = useSelector(state => state.tokenStore.auth.name + " " + state.tokenStore.auth.surname);
 const goalsSelector = useSelector(state => state.goalStore.goals);
 const successRate = getSuccessRate(goalsSelector);
 const failureRate = getFailureRate(goalsSelector);

  return (
    <div className="header">
        <div className="title">{userName}</div>
        <div className="description">
            <div className="target-average">
                <div className="target-average-title">{dictionary.profile_page_average}</div>
                <div className="progress-circle" data-progress={successRate}>
                    <div className="circle">
                        <div className="full progress-circle__slice">
                            <div className="progress-circle__fill"></div>
                        </div>
                        <div className="progress-circle__slice">
                            <div className="progress-circle__fill"></div>
                            <div className="progress-circle__fill progress-circle__bar"></div>
                        </div>
                    </div>
                    <div className="circle-title">%{successRate}</div>
                    <div className="progress-circle__overlay"></div>
                </div>
            </div>
            <div className="line"></div>
            <div className="total-target">
                <div className="total-target-title">{dictionary.profile_page_total}</div>
                <div className="content">{goalsSelector.length}</div>
            </div>
            <div className="line"></div>
            <div className="target-average">
                <div className="target-average-title">{dictionary.profile_page_failure_average}</div>
                <div className="progress-circle" data-progress={failureRate}>
                    <div className="circle">
                        <div className="full progress-circle__slice">
                            <div className="progress-circle__fill"></div>
                        </div>
                        <div className="progress-circle__slice">
                            <div className="progress-circle__fill"></div>
                            <div className="progress-circle__fill progress-circle__bar"></div>
                        </div>
                    </div>
                    <div className="circle-title">%{failureRate}</div>
                    <div className="progress-circle__overlay"></div>
                </div>
            </div>
        </div>                     
    </div>
  )
}

export default Header