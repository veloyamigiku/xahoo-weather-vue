import classes from './WeatherTopTitle.module.css';

const WeatherTopTitle = function (props) {
    return (
        <div className={classes.WeatherTopTitle}>
            <div className={classes.WeatherTopTitleSubject}>{ props.data.subject }</div>
            <div className={classes.WeatherTopTitleDateTime}>
                <div className="WeatherTopTitleDate">{ props.data.month }月{ props.data.day }日</div>
                <div className={classes.WeatherTopTitleTime}>{ props.data.hour }時{ ('00' + props.data.min).slice(-2)}分{ props.data.postfix }</div>
            </div>
        </div>
    );
}

export default WeatherTopTitle;
