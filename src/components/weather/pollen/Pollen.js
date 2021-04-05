import WeatherTitle from "../common/WeatherTitle"
import PollenBody from "./PollenBody"
import classes from './Pollen.module.css';

const Pollen = function(props) {

    return (
        <div className={classes.Pollen}>
            <WeatherTitle data={props.data.title} />
            <PollenBody data={props.data.body} />
        </div>
    );
}

export default Pollen;
