export function isDayExist(firstDate,dateList) {
    var params = {control:false,id:0}
    var yearFirst = firstDate.getFullYear();
    var monthFirst = firstDate.getMonth()+1;
    if (monthFirst < 10) monthFirst = "0" + monthFirst;
    var dayFirst = firstDate.getDate();
    if (dayFirst < 10) dayFirst = "0" + dayFirst;
    var newFirstDate = new Date(yearFirst + "-" + monthFirst + "-" + dayFirst);

    dateList.map((item) => {
        var date = new Date(item.time);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if(month < 10) month = "0" + month;
        var day = date.getDate();
        if(day < 10) day = "0" + day;
        var newDate = new Date(year + "-" + month + "-" + day);
        if(newFirstDate - newDate === 0){
            params.control = true
            params.id = item.id
        }
    })
   
    return params;
}