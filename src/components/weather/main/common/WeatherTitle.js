import classes from './WeatherTitle.module.css';

let WeatherTitle = function(props) {
    return (
        <div className={classes['weather_title']}>
            <div className={classes['weather_title_subject']}>{props.data.subject}</div>
            <div className={classes['weather_title_date']}>{props.data.date}</div>
            <div className={classes['weather_title_time']}>{props.data.time}</div>
        </div>
    );
}

export default WeatherTitle;
