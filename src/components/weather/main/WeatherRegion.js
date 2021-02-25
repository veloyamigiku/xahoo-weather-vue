import TodayTomorrow from "./today_tomorrow/TodayTomorrow";

const WeatherRegion = function(props) {

    return (
        <div>
            <TodayTomorrow data={props.todayTomorrowData} />
        </div>
    )
}

export default WeatherRegion;
