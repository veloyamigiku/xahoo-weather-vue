import classes from './WeatherSubTitle.module.css';
import { getDayOfWeekStr } from '../../../utils/weather/common/Date';

const WeatherSubTitle = function(props) {
    const dayOfWeekStr = getDayOfWeekStr(
        props.data.year,
        props.data.month,
        props.data.day);
    return (
        <div className={classes.WeatherSubTitle}>
            <div className={classes.WeatherSubTitleSubject}>{props.data.subject}</div>
            <div className={classes.WeatherSubTitleDate}> - {props.data.month}月{props.data.day}日({dayOfWeekStr})</div>
        </div>
    );
}

export default WeatherSubTitle;
