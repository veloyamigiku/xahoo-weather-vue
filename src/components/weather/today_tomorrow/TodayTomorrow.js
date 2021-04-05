import WeatherTitle from '../common/WeatherTitle';
import Option from './Option';
import RainTable from './RainTable';
import TodayTomorrowTitle from './TodayTomorrowTitle';
import Warning from '../warning/Warning';
import WeatherT from './WeatherT';
import classes from './TodayTomorrow.module.css';

const TodayTomorrow = function(props) {

    return (
        <div>
            <WeatherTitle data={props.data.title} />
            <div className={classes.TodayTomorrow}>
                <div className={classes.Today}>
                    <TodayTomorrowTitle data={props.data.today.title} />
                    <WeatherT data={props.data.today.weatherT} />
                    <RainTable data={props.data.today.rain} />
                    <Option data={props.data.today.option} />
                </div>
                <div className={classes.Tomorrow}>
                    <TodayTomorrowTitle data={props.data.tomorrow.title} />
                    <WeatherT data={props.data.tomorrow.weatherT} />
                    <RainTable data={props.data.tomorrow.rain} />
                    <Option data={props.data.tomorrow.option} />
                </div>
            </div>
            <Warning data={props.data.warning} />
        </div>
    )
}

export default TodayTomorrow;
