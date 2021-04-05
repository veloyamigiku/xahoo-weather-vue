import WeatherTitle from '../common/WeatherTitle';
import WeekTable from './WeekTable';
import classes from './Week.module.css';

const Week = function(props) {

    return (
        <div className={classes.Week}>
            <WeatherTitle data={props.data.titleData} />
            <WeekTable data={props.data.bodyData} />
        </div>
    );
}

export default Week;
