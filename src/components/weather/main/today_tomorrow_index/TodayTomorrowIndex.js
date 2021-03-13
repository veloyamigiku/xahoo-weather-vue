import WeatherTitle from "../common/WeatherTitle"
import TodayTomorrowIndexBody from "./TodayTomorrowIndexBody"
import TodayTomorrowIndexTab from "./TodayTomorrowIndexTab"

const TodayTomorrowIndex = function(props) {

    return (
        <div className="TodayTomorrowIndex">
            <WeatherTitle data={props.data.titleData} />
            <TodayTomorrowIndexTab data={props.data.bodyData} />
            <TodayTomorrowIndexBody data={props.data.bodyData} />
        </div>
    )
}

export default TodayTomorrowIndex;
