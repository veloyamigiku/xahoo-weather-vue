import classes from './WeatherTitle.module.css';

let WeatherTitle = function(props) {
    return (
        <div className={classes['weather_title']}>
            <div className={classes['weather_title_subject']}>
                {props.data.subject != null ? props.data.subject : ''}
            </div>
            <div className={classes['weather_title_date']}>
                {props.data.year != null ? props.data.year + '年' : ''}
                {props.data.month != null ? props.data.month + '月' : ''}
                {props.data.day != null ? props.data.day + '日' : ''}
            </div>
            <div className={classes['weather_title_time']}>
                {props.data.hour != null ? ('00' + props.data.hour).slice(-2) + '時' : ''}
                {props.data.min != null ? ('00' + props.data.min).slice(-2) + '分' : ''}
                {props.data.postfix != null ? props.data.postfix : ''}
            </div>
        </div>
    );
}

export default WeatherTitle;
