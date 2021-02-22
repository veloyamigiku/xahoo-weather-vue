import WeatherTitle from '../common/WeatherTitle';

const TodayTomorrow = function(props) {

    return (
        <WeatherTitle subject={props.subject} date={props.date} time={props.time} />
    )
}

export default TodayTomorrow;
