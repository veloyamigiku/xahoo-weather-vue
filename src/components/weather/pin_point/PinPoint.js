import WeatherTitle from "../common/WeatherTitle"
import PinPointBody from "./PinPointBody";
import classes from './PinPoint.module.css';

const PinPoint = function(props) {
    return (
        <div className={classes.PinPoint}>
            <WeatherTitle data={props.data.titleData} />
            <PinPointBody data={props.data.bodyData} />
        </div>
    );
}

export default PinPoint;
