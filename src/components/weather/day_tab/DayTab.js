import { getDayOfWeek, getDayOfWeekStr } from "../../../utils/weather/common/Date";
import classes from './DayTab.module.css';

const DayTab = function(props) {

    var dayTabItemList = [];
    props.data.forEach((dayTabItem, dayTabItemIdx) => {
        const dayOfWeekStr = getDayOfWeekStr(
            dayTabItem.year,
            dayTabItem.month,
            dayTabItem.day);
        const dayOfWeek = getDayOfWeek(
            dayTabItem.year,
            dayTabItem.month,
            dayTabItem.day);
        var dayTabItemClasses = classes.DayTabItem;
        var dayTabItemDayClasses = classes.DayTabItemDay;
        var dayTabItemDayOfWeekClasses = classes.DayTabItemDayOfWeek;
        if (props.activeTabIdx === dayTabItemIdx) {
            dayTabItemClasses = classes.DayTabItemSelected;   
        } else {
            switch (dayOfWeek) {
                case 0:
                    dayTabItemDayClasses = classes.DayTabItemDaySun;
                    dayTabItemDayOfWeekClasses = classes.DayTabItemDayOfWeekSun;
                    break;
                case 6:
                    dayTabItemDayClasses = classes.DayTabItemDaySat;
                    dayTabItemDayOfWeekClasses = classes.DayTabItemDayOfWeekSat;
                    break;
                default:
                    break;
            }
        }
        dayTabItemList.push(
            <div className={dayTabItemClasses} key={'DayTabItem' + dayTabItemIdx} onClick={() => props.clickTab(dayTabItemIdx)}>
                <div className={classes.DayTabItemBody}>
                    <div className={dayTabItemDayClasses}>{dayTabItem.day}</div>
                    <div className={dayTabItemDayOfWeekClasses}>({dayOfWeekStr})</div>
                </div>
            </div>
        );
    });

    return (
        <div className={classes.DayTab}>
            {dayTabItemList}
        </div>
    );
}

export default DayTab;
