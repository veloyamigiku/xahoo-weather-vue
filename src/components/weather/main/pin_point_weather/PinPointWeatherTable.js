import classes from './PinPointWeatherTable.module.css';
import { fromBodyDataToTableData } from '../../../../utils/main/weather/pin_point_weather/PinPointWeatherTable';

const PinPointWeatherTable = function(props) {

    var pinPointWeatherTableRowList = [];
    const tableData = fromBodyDataToTableData(props.data);
    
    var pinPointWeatherTableTimeColList = [];
    pinPointWeatherTableTimeColList.push(
        <div className={classes.PinPointWeatherTableCol} key="PinPointWeatherTableTimeHead">時刻</div>
    );
    tableData.timeList.forEach(function (time, timeIdx) {
        pinPointWeatherTableTimeColList.push(
            <div className={classes.PinPointWeatherTableCol} key={'PinPointWeatherTableTime' + timeIdx}>
                <div className="PinPointWeatherTableTime">{time}時</div>
            </div>
        )
    })
    pinPointWeatherTableRowList.push(
        <div className={classes.PinPointWeatherTableRow} key="PinPointWeatherTableTimeRow">
            {pinPointWeatherTableTimeColList}
        </div>
    );

    var pinPointWeatherTableWeatherColList = [];
    pinPointWeatherTableWeatherColList.push(
        <div className={classes.PinPointWeatherTableCol} key="PinPointWeatherTableWeatherHead">天気</div>
    );
    tableData.weatherList.forEach(function (w, wIdx) {
        pinPointWeatherTableWeatherColList.push(
            <div className={classes.PinPointWeatherTableCol} key={'PinPointWeatherTableWeather' + wIdx}>
                <div className={classes.PinPointWeatherTableWeatherImg}>
                    <img src={w.weatherImg} alt="PinPointWeatherTableWeatherImg" />
                </div>
                <div className="PinPointWeatherTableWeather">
                    {w.weather}
                </div>
            </div>
        )
    })
    pinPointWeatherTableRowList.push(
        <div className={classes.PinPointWeatherTableRow} key="PinPointWeatherTableWeatherRow">
            {pinPointWeatherTableWeatherColList}
        </div>
    );

    var pinPointWeatherTableTColList = [];
    pinPointWeatherTableTColList.push(
        <div className={classes.PinPointWeatherTableCol} key="PinPointWeatherTableTHead">気温（°Ｃ）</div>
    );
    tableData.tList.forEach(function (t, tIdx) {
        pinPointWeatherTableTColList.push(
            <div className={classes.PinPointWeatherTableCol} key={'PinPointWeatherTableT' + tIdx}>
                <div className="PinPointWeatherTableT">
                    {t}
                </div>
            </div>
        )
    })
    pinPointWeatherTableRowList.push(
        <div className={classes.PinPointWeatherTableRow} key="PinPointWeatherTableTRow">
            {pinPointWeatherTableTColList}
        </div>
    );

    var pinPointWeatherTableRhColList = [];
    pinPointWeatherTableRhColList.push(
        <div className={classes.PinPointWeatherTableCol} key="PinPointWeatherTableRhHead">湿度（％）</div>
    );
    tableData.rhList.forEach(function (rh, rhIdx) {
        pinPointWeatherTableRhColList.push(
            <div className={classes.PinPointWeatherTableCol} key={'PinPointWeatherTableRh' + rhIdx}>
                <div className="PinPointWeatherTableRh">
                    {rh}
                </div>
            </div>
        )
    })
    pinPointWeatherTableRowList.push(
        <div className={classes.PinPointWeatherTableRow} key="PinPointWeatherTableRhRow">
            {pinPointWeatherTableRhColList}
        </div>
    );

    var pinPointWeatherTableRainFallColList = [];
    pinPointWeatherTableRainFallColList.push(
        <div className={classes.PinPointWeatherTableCol} key="PinPointWeatherTableRainFallHead">降水量（ｍｍ）</div>
    );
    tableData.rainFallList.forEach(function (rainFall, rainFallIdx) {
        pinPointWeatherTableRainFallColList.push(
            <div className={classes.PinPointWeatherTableCol} key={'PinPointWeatherTableRainFall' + rainFallIdx}>
                <div className="PinPointWeatherTableRainFall">
                    {rainFall}
                </div>
            </div>
        )
    })
    pinPointWeatherTableRowList.push(
        <div className={classes.PinPointWeatherTableRow} key="PinPointWeatherTableRainFallRow">
            {pinPointWeatherTableRainFallColList}
        </div>
    );

    var pinPointWeatherTableWindColList = [];
    pinPointWeatherTableWindColList.push(
        <div className={classes.PinPointWeatherTableCol} key="PinPointWeatherTableWindHead"><div>風向</div><div>風速（ｍ/s）</div></div>
    );
    tableData.windList.forEach(function (wind, windIdx) {
        pinPointWeatherTableWindColList.push(
            <div className={classes.PinPointWeatherTableCol} key={'PinPointWeatherTableWind' + windIdx}>
                <div className="PinPointWeatherTableWindDirection">
                    {wind.windDirection}
                </div>
                <div className="PinPointWeatherTableWindSpeed">
                    {wind.windSpeed}
                </div>
            </div>
        )
    })
    pinPointWeatherTableRowList.push(
        <div className={classes.PinPointWeatherTableRow} key="PinPointWeatherTableWindRow">
            {pinPointWeatherTableWindColList}
        </div>
    );

    return (
        <div className={classes.PinPointWeatherTable}>
            {pinPointWeatherTableRowList}
        </div>
    );

}

export default PinPointWeatherTable;
