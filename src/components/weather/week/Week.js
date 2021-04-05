import WeatherTitle from '../common/WeatherTitle';
import WeekTable from './WeekTable';
import classes from './Week.module.css';

const Week = function(props) {

    return (
        <div className={classes.Week}>
            <WeatherTitle data={props.data.title} />
            <WeekTable data={props.data.body} />
        </div>
    );
}

export default Week;
