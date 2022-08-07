import {isSameDay,format,addDays} from "date-fns";
import { compareDays } from "./compareDays";

export function getGoalDetail(id,goalList) {
    var goalData = {};
    var goalDetailData = {};
    goalList.map((goal) => {
        if(goal.id == id){
           goalData = goal;
        }
    });
    if(goalData){
        //Get Total Date
        var createdTime = new Date(goalData.createdTime);
        var endTime = new Date(goalData.endTime);
        var diffTime = Math.abs(endTime - createdTime);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        var unSubmitDays = 0;
        var passDays = 0;
        var leftDays = 0;
        var day = createdTime;
        var formattedDate = "";
        let days = [];
        let todayAwards = [];
        for (let i = 0; i <= diffDays; i++) {
            var dayObj = {};
            formattedDate = format(day, "yyyy-MM-dd");
            var isInclude = goalData.entries.some(i => i.time.includes(formattedDate));
            var isAward = goalData.awards.some(i => i.time.includes(formattedDate));
            var compare = compareDays(day,new Date())
            dayObj.formattedDate = formattedDate;
            dayObj.isInclude = isInclude;
            dayObj.isAward = isAward;
            dayObj.compare = compare;
            days.push(dayObj);
            if(compare == 'lt' && !isInclude){
                unSubmitDays = unSubmitDays + 1; 
            }
            if(compare == 'lt'){
                passDays = passDays + 1; 
            }
            if(compare == 'gt'){
                leftDays = leftDays + 1; 
            }
            day = addDays(day, 1);
        }
        var compeleteAverage = (parseInt(passDays) * 100 / parseInt(diffDays + 1)).toFixed(0);
        var entrySubmitAverage = goalData.entries.length > 0 ? (parseInt(goalData.entries.length) * 100 / parseInt(passDays)).toFixed(0) : 0;
        var entryFailureAverage = unSubmitDays > 0 ? (parseInt(unSubmitDays) * 100 / parseInt(passDays)).toFixed(0) : 0;

        goalData.awards.map((award) => {
            var createdTime = new Date(award.time);
            var compare = compareDays(createdTime,new Date())
            if(compare == 'eq'){
                todayAwards.push(award);
            }
        })
        goalDetailData.totalDay = diffDays + 1;
        goalDetailData.todayAwards = todayAwards;
        goalDetailData.compeleteAverage = compeleteAverage;
        goalDetailData.averageFailureSubmit = entryFailureAverage;
        goalDetailData.averageEntrySubmit = entrySubmitAverage;
        goalDetailData.days = days;
        goalDetailData.leftDays = leftDays;
        goalDetailData.passDays = passDays;
        goalDetailData.unSubmitDays = unSubmitDays;
        goalDetailData.id = goalData.id;
        goalDetailData.title = goalData.name;
        goalDetailData.description = goalData.description;
        goalDetailData.awards = goalData.awards;
        console.log(goalDetailData)
    }   
    return goalDetailData;
}