import WeatherTitle from '../common/WeatherTitle';
import Option from './Option';
import RainTable from './RainTable';
import TodayTomorrowTitle from './TodayTomorrowTitle';
import Warning from './Warning';
import WeatherT from './WeatherT';

const TodayTomorrow = function(props) {

    return (
        <div>
            <WeatherTitle data={props.data.titleData} />
            <TodayTomorrowTitle data={props.data.todayData.titleData} />
            <WeatherT data={props.data.todayData.weatherTData} />
            <RainTable data={props.data.todayData.rainData} />
            <Option data={props.data.todayData.optionData} />
            <Warning data={props.data.warningData} />
        </div>
    )
}

export default TodayTomorrow;
