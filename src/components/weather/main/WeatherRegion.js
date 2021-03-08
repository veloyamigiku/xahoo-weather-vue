import Pollen from "./pollen/Pollen";
import TodayTomorrow from "./today_tomorrow/TodayTomorrow";

const WeatherRegion = function(props) {

    return (
        <div>
            <TodayTomorrow data={props.todayTomorrowData} />
            <Pollen data={props.pollenData} />
        </div>
    )
}

export default WeatherRegion;
