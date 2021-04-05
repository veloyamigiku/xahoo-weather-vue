import WeatherRegion from './WeatherRegion3';
import { weatherRegionWrap3Data } from './WeatherRegionWrap3Data';

const WeatherRegionWrap = function () {
    return (
        <WeatherRegion
            todayTomorrow={weatherRegionWrap3Data.todayTomorrow}
            pollen={weatherRegionWrap3Data.pollen}
            week={weatherRegionWrap3Data.week}
            todayTomorrowIndex={weatherRegionWrap3Data.todayTomorrowIndex}
            cityList={weatherRegionWrap3Data.cityList} />
    )
}

export default WeatherRegionWrap;
