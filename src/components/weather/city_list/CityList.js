import WeatherTitle from "../common/WeatherTitle"
import CityListBody from "./CityListBody";
import classes from './CityList.module.css';

const CityList = function(props) {
    return (
        <div className={classes.CityList}>
            <WeatherTitle data={props.data.title} />
            <CityListBody data={props.data.body} />
        </div>
    );
}

export default CityList;
