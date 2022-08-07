export function compareDays(firstDate,secondDate) {
    var yearFirst = firstDate.getFullYear();
    var monthFirst = firstDate.getMonth()+1;
    if (monthFirst < 10) monthFirst = "0" + monthFirst;
    var dayFirst = firstDate.getDate();
    if (dayFirst < 10) dayFirst = "0" + dayFirst;
    var newFirstDate = new Date(yearFirst + "-" + monthFirst + "-" + dayFirst);


    var yearSecond = secondDate.getFullYear();
    var monthSecond = secondDate.getMonth()+1;
    if (monthSecond < 10) monthSecond = "0" + monthSecond;
    var daySecond = secondDate.getDate();
    if (daySecond < 10) daySecond = "0" + daySecond;
    var newSecondDate = new Date(yearSecond + "-" + monthSecond + "-" + daySecond);

    var result = "";
    if(newFirstDate - newSecondDate === 0){
        result = "eq";
    }else if(newFirstDate - newSecondDate > 0){
        result = "gt"
    }else{
        result = "lt"
    }

    return result;
}