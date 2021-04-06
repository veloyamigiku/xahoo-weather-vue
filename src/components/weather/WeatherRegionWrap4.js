import WeatherRegion4 from './WeatherRegion4';
import { weatherRegionWrap4Data } from './WeatherRegionWrap4Data';


const WeatherRegionWrap4 = function() {
    return (
        <WeatherRegion4
            today={weatherRegionWrap4Data.today}
            warning={weatherRegionWrap4Data.warning}
            pollen={weatherRegionWrap4Data.pollen}
            tomorrow={weatherRegionWrap4Data.tomorrow}
            week={weatherRegionWrap4Data.week}
            todayTomorrowIndex={weatherRegionWrap4Data.todayTomorrowIndex} />
    )
}

export default WeatherRegionWrap4;
