import WeatherTitle from "../common/WeatherTitle"
import PollenBody from "./PollenBody"
import classes from './Pollen.module.css';

const Pollen = function(props) {

    return (
        <div className={classes.Pollen}>
            <WeatherTitle data={props.data.titleData} />
            <PollenBody data={props.data.bodyData} />
        </div>
    );
}

export default Pollen;
