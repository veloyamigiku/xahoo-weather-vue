import WeatherTitle from '../common/WeatherTitle';
import TodayTomorrowTitle from './TodayTomorrowTitle';
import WeatherT from './WeatherT';

const TodayTomorrow = function(props) {

    return (
        <div>
            <WeatherTitle data={props.data.titleData} />
            <TodayTomorrowTitle data={props.data.todayData.titleData} />
            <WeatherT data={props.data.todayData.weatherTData} />
        </div>
    )
}

export default TodayTomorrow;
