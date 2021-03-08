import WeatherTitle from "../common/WeatherTitle"
import WeekTable from "./WeekTable"

const Week = function(props) {

    return (
        <div className="Week">
            <WeatherTitle data={props.data.titleData} />
            <WeekTable data={props.data.bodyData} />
        </div>
    );
}

export default Week;
