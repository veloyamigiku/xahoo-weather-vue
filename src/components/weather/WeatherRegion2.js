import GeneralCondition from "./general_condition/GeneralCondition";
import WeatherMap from "./weather_map/WeatherMap";

const WeatherRegion2 = function(props) {
    return (
        <div>
            <WeatherMap data={props.weatherMap} />
            <GeneralCondition data={props.generalCondition} />
        </div>
    )
}

export default WeatherRegion2;
