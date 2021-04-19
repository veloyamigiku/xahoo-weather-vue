import WeatherRegion2 from "./WeatherRegion2";
import { weatherRegionWrap2Data } from './WeatherRegionWrap2Data';

const WeatherRegionWrap2 = function() {
    return (
        <WeatherRegion2
            weatherMap={weatherRegionWrap2Data.weatherMap}
            generalCondition={weatherRegionWrap2Data.generalCondition} />
    );
}

export default WeatherRegionWrap2;
