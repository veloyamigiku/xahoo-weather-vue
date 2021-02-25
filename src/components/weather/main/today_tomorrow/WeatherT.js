import classes from './WeatherT.module.css';

const WeatherT = function(props) {

    return (
        <div className={classes.WeatherT}>
            <div className={classes.WeatherType}>
                <img src={props.data.type} alt="weatherType" />
            </div>
            <div className={classes.WeatherStr}>{props.data.str}</div>
            <div className={classes.HighT}><em>{props.data.highT}</em>°C[{props.data.highTDiff}]</div>
            <div className={classes.LowT}><em>{props.data.lowT}</em>°C[{props.data.lowTDiff}]</div>
        </div>
    )
}

export default WeatherT;
