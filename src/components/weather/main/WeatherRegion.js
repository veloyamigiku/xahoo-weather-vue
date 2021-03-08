import Pollen from "./pollen/Pollen";
import TodayTomorrow from "./today_tomorrow/TodayTomorrow";
import Week from "./week/Week";

const WeatherRegion = function(props) {

    return (
        <div>
            <TodayTomorrow data={props.todayTomorrowData} />
            <Pollen data={props.pollenData} />
            <Week data={props.weekData} />
        </div>
    )
}

export default WeatherRegion;
