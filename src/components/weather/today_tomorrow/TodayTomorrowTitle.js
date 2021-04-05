import classes from './TodayTomorrowTitle.module.css';

const TodayTomorrowTitle = function(props) {

    return (
        <div className={classes.TodayTomorrowTitle}>{props.data.date}</div>
    );
}

export default TodayTomorrowTitle;
