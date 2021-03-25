import PinPointWeather from './pin_point_weather/PinPointWeather';

const WeatherRegion4 = function(props) {
    return (
        <div>
            <PinPointWeather data={props.pinPointWeatherData} />
        </div>
    );
}

export default WeatherRegion4;
