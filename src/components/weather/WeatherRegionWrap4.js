import WeatherRegion4 from './WeatherRegion4';
import { pinPointWeatherData } from './WeatherRegionWrap4Data';


const WeatherRegionWrap4 = function() {
    return (
        <WeatherRegion4 pinPointWeatherData={pinPointWeatherData} />
    )
}

export default WeatherRegionWrap4;
