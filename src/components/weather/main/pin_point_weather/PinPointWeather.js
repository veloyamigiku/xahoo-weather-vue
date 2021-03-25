import WeatherTitle from '../common/WeatherTitle';
import PinPointWeatherBody from './PinPointWeatherBody';

const PinPointWeather = function(props) {
    return (
        <div>
            <WeatherTitle data={props.data.titleData} />
            <PinPointWeatherBody data={props.data} />
        </div>
    );
}

export default PinPointWeather;
