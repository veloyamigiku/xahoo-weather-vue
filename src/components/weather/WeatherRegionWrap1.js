import WeatherRegion1 from "./WeatherRegion1";
import { weatherRegionWrap1Data } from "./WeatherRegionWrap1Data";

const WeatherRegionWrap1 = function() {
    return (
        <WeatherRegion1
            weatherMap={weatherRegionWrap1Data.weatherMap}
            generalCondition={weatherRegionWrap1Data.generalCondition} />
    );
}

export default WeatherRegionWrap1;
