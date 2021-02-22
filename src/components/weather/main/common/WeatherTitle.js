import classes from './WeatherTitle.module.css';

let WeatherTitle = function(props) {
    return (
        <div className={classes['weather_title']}>
            <div className={classes['weather_title_subject']}>{props.subject}</div>
            <div className={classes['weather_title_date']}>{props.date}</div>
            <div className={classes['weather_title_time']}>{props.time}</div>
        </div>
    );
}

export default WeatherTitle;
