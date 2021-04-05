import WeatherTitle from '../common/WeatherTitle';
import Option from './Option';
import RainTable from './RainTable';
import TodayTomorrowTitle from './TodayTomorrowTitle';
import Warning from './Warning';
import WeatherT from './WeatherT';
import classes from './TodayTomorrow.module.css';

const TodayTomorrow = function(props) {

    return (
        <div>
            <WeatherTitle data={props.data.titleData} />
            <div className={classes.TodayTomorrow}>
                <div className={classes.Today}>
                    <TodayTomorrowTitle data={props.data.todayData.titleData} />
                    <WeatherT data={props.data.todayData.weatherTData} />
                    <RainTable data={props.data.todayData.rainData} />
                    <Option data={props.data.todayData.optionData} />
                </div>
                <div className={classes.Tomorrow}>
                    <TodayTomorrowTitle data={props.data.tomorrowData.titleData} />
                    <WeatherT data={props.data.tomorrowData.weatherTData} />
                    <RainTable data={props.data.tomorrowData.rainData} />
                    <Option data={props.data.tomorrowData.optionData} />
                </div>
            </div>
            <Warning data={props.data.warningData} />
        </div>
    )
}

export default TodayTomorrow;
