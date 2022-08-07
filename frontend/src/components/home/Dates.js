import React, { useContext, useState } from 'react'
import {
    getWeek,startOfWeek,lastDayOfWeek,format,isSameDay,addDays
  } from "date-fns";
import LanguageContext from '../../context/language/languageContext';

const Dates = () => {
    const {dictionary} = useContext(LanguageContext)

    const [currentMonth] = useState(new Date());
    const renderDays = () => {
        const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
        const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let dayNames = [dictionary.mon,dictionary.tue,dictionary.wed,dictionary.thu,dictionary.fri,dictionary.sat,dictionary.sun]
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            days.push(
                <div className={`date ${isSameDay(day, new Date()) ? "active" : ""} `} key={day}>
                <span className="title">{dayNames[i]}</span>
                <span className="number">{formattedDate}</span>
                </div>
            );
            day = addDays(day, 1);
        }

        rows.push(days);
        days = [];
        }
        return <div className="dates">{rows}</div>;
    };

  return (
    renderDays()
  )
}

export default Dates