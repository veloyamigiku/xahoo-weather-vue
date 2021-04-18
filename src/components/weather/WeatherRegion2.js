import WeatherMap from "./weather_map/WeatherMap"

const WeatherRegion2 = function(props) {
    return (
        <div>
            <WeatherMap data={props.weatherMap} />
        </div>
    )
}

export default WeatherRegion2;
