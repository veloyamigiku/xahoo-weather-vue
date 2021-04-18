import WeatherRegion2 from "./WeatherRegion2"
import { weatherRegionWrap2Data } from './WeatherRegionWrap2Data';

const WeatherRegionWrap2 = function() {
    return (
        <WeatherRegion2
            weatherMap={weatherRegionWrap2Data.weatherMap} />
    );
}

export default WeatherRegionWrap2;
