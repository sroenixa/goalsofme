export function getSuccessRate(goals) {
    var totalAverage = 0;
    var totalRate = 0;
    goals.map((goal) => {
        var totalEntries = 0;
        var totalDays = 0;
        var average = 0;
        var createdTime = new Date(goal.createdTime);
        var endTime = new Date(goal.endTime);
        var diffTime = Math.abs(endTime - createdTime);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if(diffDays == 0) diffDays = 1;
        totalEntries = totalEntries + goal.entries.length;
        totalDays = totalDays + diffDays; 
        average = (parseInt(totalEntries) * 100 / parseInt(totalDays)).toFixed(0);
        totalAverage = totalAverage + parseInt(average);        
    })
    totalRate = (parseInt(totalAverage) / parseInt(goals.length)).toFixed(0);
    return totalRate;
}

export function getFailureRate(goals) {
    var totalAverage = 0;
    var totalRate = 0;
    goals.map((goal) => {
        var totalEntries = 0;
        var totalFailure = 0;
        var totalDays = 0;
        var average = 0;
        var createdTime = new Date(goal.createdTime);
        var endTime = new Date(goal.endTime);
        var diffTime = Math.abs(endTime - createdTime);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if(diffDays == 0) diffDays = 1;
        totalEntries = totalEntries + goal.entries.length;
        totalDays = totalDays + diffDays; 
        totalFailure = totalDays - totalEntries;
        average = (parseInt(totalFailure) * 100 / parseInt(totalDays)).toFixed(0);
        totalAverage = totalAverage + parseInt(average);        
    })
    totalRate = (parseInt(totalAverage) / parseInt(goals.length)).toFixed(0);
    return totalRate;
}