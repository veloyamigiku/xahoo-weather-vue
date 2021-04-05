import classes from './PinPointWeatherTitle.module.css';
import { getDayOfWeekStr } from '../../../utils/weather/common/Date';

const PinPointWeatherTitle = function(props) {
    const dayOfWeekStr = getDayOfWeekStr(
        props.data.year,
        props.data.month,
        props.data.day);
    return (
        <div className={classes.PinPointWeatherTitle}>
            <div className={classes.PinPointWeatherTitleSubject}>今日の天気</div>
            <div className={classes.PinPointWeatherTitleDate}> - {props.data.month}月{props.data.day}日({dayOfWeekStr})</div>
        </div>
    );
}

export default PinPointWeatherTitle;
