import { formatWeekBody, getDayOfWeek, getDayOfWeekStr } from '../../../utils/weather/week/WeekTable';
import classes from './WeekTable.module.css';

const WeekTable = function(props) {

    var weekRowDataList = formatWeekBody(props.data);
    
    var weekDateColList = [];
    weekRowDataList[0].forEach(function(dateObj, idx) {
        let dayOfWeek = getDayOfWeek(dateObj.year, dateObj.month, dateObj.day);
        let weekDayColClass = classes.WeekDayCol;
        if (dayOfWeek === 0) {
            weekDayColClass = classes.WeekDaySunCol;
        } else if (dayOfWeek === 6) {
            weekDayColClass = classes.WeekDaySatCol;
        }
        weekDateColList.push(
            <div className={classes.WeekCol} key={idx}>
                <div className="WeekDateCol">{dateObj.month}月{dateObj.day}日</div>
                <div className={weekDayColClass}>(<em>{getDayOfWeekStr(dateObj.year, dateObj.month, dateObj.day)}</em>)</div>
            </div>
        );
    });

    var weekWeatherColList = [];
    weekRowDataList[1].forEach(function(weatherObj, idx) {
        weekWeatherColList.push(
            <div className={classes.WeekCol} key={idx}>
                <div className={classes.WeekWeatherImgCol}><img src={weatherObj.weatherImg} alt={weatherObj.weather} /></div>
                <div className="WeekWeatherCol">{weatherObj.weather}</div>
            </div>
        );
    });

    var weekTColList = [];
    weekRowDataList[2].forEach(function(tObj, idx) {
        weekTColList.push(
            <div className={classes.WeekCol} key={idx}>
                <div className={classes.WeekHighTCol}>{tObj.highT}</div>
                <div className={classes.WeekLowTCol}>{tObj.lowT}</div>
            </div>
        );
    });

    var weekRainColList = [];
    weekRowDataList[3].forEach(function(rain, idx) {
        weekRainColList.push(
            <div className={classes.WeekCol} key={idx}>
                <div className="WeekRainCol">{rain}</div>
            </div>
        );
    });

    return (
        <div className={classes.WeekBody}>
            <div className={classes.WeekRow}>
                <div className={classes.WeekCol}><div>日付</div></div>
                {weekDateColList}
            </div>
            <div className={classes.WeekRow}>
                <div className={classes.WeekCol}><div>天気</div></div>
                {weekWeatherColList}
            </div>
            <div className={classes.WeekRow}>
                <div className={classes.WeekCol}><div>気温</div><div>（°Ｃ）</div></div>
                {weekTColList}
            </div>
            <div className={classes.WeekRow}>
                <div className={classes.WeekCol}><div>降水</div><div>確率</div><div>（％）</div></div>
                {weekRainColList}
            </div>
        </div>
    );
}

export default WeekTable;
