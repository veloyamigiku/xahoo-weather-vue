import classes from './WeatherMapBody.module.css';

const WeatherMapBody = function(props) {

    var weatherMapPositionList = [];
    props.data.position.forEach(function (position, positionIdx) {
        weatherMapPositionList.push(
            <div
                className={classes.WeatherMapPosition}
                key={'WeatherMapPosition' + positionIdx}
                style={{position: 'absolute', left: position.left + 'px', top: position.top + 'px'}}>
                <div className={classes.WeatherMapPositionName}>{position.name}</div><br />
                <div className={classes.WeatherMapPositionImg}><img src={position.weatherImg} alt="WeatherMapPositionImg" /></div><br />
                <div className={classes.WeatherMapPositionT}>
                    <em className={classes.WeatherMapPositionHighT}>{position.highT}</em>/<em className={classes.WeatherMapPositionLowT}>{position.lowT}</em>
                </div><br />
                <div className={classes.WeatherMapPositionPercip}>{position.percip}%</div>
            </div>
        )
    });

    return (
        <div className="WeatherMapBody">
            <div
                className={classes.WeatherMapImg}
                style={{backgroundImage: 'url(' + props.data.map + ')', width: props.data.mapWidth + 'px', height: props.data.mapHeight + 'px'}}>
                {weatherMapPositionList}
            </div>
        </div>
    );
}

export default WeatherMapBody;
