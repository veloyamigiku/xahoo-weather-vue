import PinPoint from "./pin_point/PinPoint";
import Pollen from "./pollen/Pollen";
import TodayTomorrow from "./today_tomorrow/TodayTomorrow";
import TodayTomorrowIndex from "./today_tomorrow_index/TodayTomorrowIndex";
import Week from "./week/Week";

const WeatherRegion = function(props) {

    return (
        <div>
            <TodayTomorrow data={props.todayTomorrowData} />
            <Pollen data={props.pollenData} />
            <Week data={props.weekData} />
            <TodayTomorrowIndex data={props.todayTomorrowIndexData} />
            <PinPoint data={props.pinPointData} />
        </div>
    )
}

export default WeatherRegion;
