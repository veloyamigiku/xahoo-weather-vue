import { getDayOfWeekStr } from '../../../../utils/main/weather/common/Date';
import classes from './TodayTomorrowIndexTab.module.css';

const TodayTomorrowIndexTab = function(props) {

    var todayTomorrowIndexTabList = [];
    props.data.forEach((body, idx) => {
        const dayOfWeekStr = getDayOfWeekStr(
            body.year,
            body.month,
            body.day);
        todayTomorrowIndexTabList.push(
            <div className={classes.TodayTomorrowIndexTab} key={idx}>{body.month}月{body.day}日（<em className={classes.TodayTomorrowIndexTabSun}>{dayOfWeekStr}</em>）</div>
        )
    });
    return (
        <div className={classes.TodayTomorrowIndexTabRoot}>
            {todayTomorrowIndexTabList}
        </div>
    );
}

export default TodayTomorrowIndexTab;
