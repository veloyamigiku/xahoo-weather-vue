import React from 'react';
import { getDayOfWeek, getDayOfWeekStr } from '../../../../utils/main/weather/common/Date';
import classes from './TodayTomorrowIndexTab.module.css';

const TodayTomorrowIndexTab = function(props) {

    function clickTab (clickTabIdx) {
        props.onClickTab(clickTabIdx);
    }

    var todayTomorrowIndexTabList = [];
    props.data.forEach((body, idx) => {
        const dayOfWeekStr = getDayOfWeekStr(
            body.year,
            body.month,
            body.day);
        const dayOfWeek = getDayOfWeek(
            body.year,
            body.month,
            body.day);
        var dayOfWeekClass = null;
        if (dayOfWeek === 6) {
            dayOfWeekClass = classes.DayOfWeekSat;
        } else if (dayOfWeek === 0) {
            dayOfWeekClass = classes.DayOfWeekSun;
        }
        var tabClass = classes.TodayTomorrowIndexTabNotSelected;
        if (props.activeIdx === idx) {
            tabClass = classes.TodayTomorrowIndexTabSelected
        }
        todayTomorrowIndexTabList.push(
            <div className={tabClass} key={idx} onClick={() => clickTab(idx)}>
                {body.month}月{body.day}日（<em className={dayOfWeekClass}>{dayOfWeekStr}</em>）
            </div>
        )
    });
    return (
        <div className={classes.TodayTomorrowIndexTabRoot}>
            {todayTomorrowIndexTabList}
        </div>
    );
}

export default TodayTomorrowIndexTab;
