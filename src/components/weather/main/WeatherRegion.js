import TodayTomorrow from "./today_tomorrow/TodayTomorrow";

const WeatherRegion = function(props) {

    return (
        <TodayTomorrow subject={props.subject} date={props.date} time={props.time} />
    )
}

export default WeatherRegion;
