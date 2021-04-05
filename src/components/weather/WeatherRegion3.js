import CityList from "./city_list/CityList";
import Pollen from "./pollen/Pollen";
import TodayTomorrow from "./today_tomorrow/TodayTomorrow";
import TodayTomorrowIndex from "./today_tomorrow_index/TodayTomorrowIndex";
import Week from "./week/Week";

const WeatherRegion3 = function(props) {

    return (
        <div>
            <TodayTomorrow data={props.todayTomorrow} />
            <Pollen data={props.pollen} />
            <Week data={props.week} />
            <TodayTomorrowIndex data={props.todayTomorrowIndex} />
            <CityList data={props.cityList} />
        </div>
    )
}

export default WeatherRegion3;
