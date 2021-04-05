import classes from './OneDayTable.module.css';
import { fromBodyDataToTableData } from '../../../utils/weather/one_day/OneDayTable';

const OneDayTable = function(props) {

    var oneDayTableRowList = [];
    const tableData = fromBodyDataToTableData(props.data);
    
    var oneDayTableTimeColList = [];
    oneDayTableTimeColList.push(
        <div className={classes.OneDayTableCol} key="OneDayTableTimeHead">時刻</div>
    );
    tableData.timeList.forEach(function (time, timeIdx) {
        oneDayTableTimeColList.push(
            <div className={classes.OneDayTableCol} key={'OneDayTableTime' + timeIdx}>
                <div className="OneDayTableTime">{time}時</div>
            </div>
        )
    })
    oneDayTableRowList.push(
        <div className={classes.OneDayTableRow} key="OneDayTableTimeRow">
            {oneDayTableTimeColList}
        </div>
    );

    var oneDayTableWeatherColList = [];
    oneDayTableWeatherColList.push(
        <div className={classes.OneDayTableCol} key="OneDayTableWeatherHead">天気</div>
    );
    tableData.weatherList.forEach(function (w, wIdx) {
        oneDayTableWeatherColList.push(
            <div className={classes.OneDayTableCol} key={'OneDayTableWeather' + wIdx}>
                <div className={classes.OneDayTableWeatherImg}>
                    <img src={w.weatherImg} alt="OneDayTableWeatherImg" />
                </div>
                <div className="OneDayTableWeather">
                    {w.weather}
                </div>
            </div>
        )
    })
    oneDayTableRowList.push(
        <div className={classes.OneDayTableRow} key="OneDayTableWeatherRow">
            {oneDayTableWeatherColList}
        </div>
    );

    var oneDayTableTColList = [];
    oneDayTableTColList.push(
        <div className={classes.OneDayTableCol} key="OneDayTableTHead">気温（°Ｃ）</div>
    );
    tableData.tList.forEach(function (t, tIdx) {
        oneDayTableTColList.push(
            <div className={classes.OneDayTableCol} key={'OneDayTableT' + tIdx}>
                <div className="OneDayTableT">
                    {t}
                </div>
            </div>
        )
    })
    oneDayTableRowList.push(
        <div className={classes.OneDayTableRow} key="OneDayTableTRow">
            {oneDayTableTColList}
        </div>
    );

    var oneDayTableRhColList = [];
    oneDayTableRhColList.push(
        <div className={classes.OneDayTableCol} key="OneDayTableRhHead">湿度（％）</div>
    );
    tableData.rhList.forEach(function (rh, rhIdx) {
        oneDayTableRhColList.push(
            <div className={classes.OneDayTableCol} key={'OneDayTableRh' + rhIdx}>
                <div className="OneDayTableRh">
                    {rh}
                </div>
            </div>
        )
    })
    oneDayTableRowList.push(
        <div className={classes.OneDayTableRow} key="OneDayTableRhRow">
            {oneDayTableRhColList}
        </div>
    );

    var oneDayTableRainFallColList = [];
    oneDayTableRainFallColList.push(
        <div className={classes.OneDayTableCol} key="OneDayTableRainFallHead">降水量（ｍｍ）</div>
    );
    tableData.rainFallList.forEach(function (rainFall, rainFallIdx) {
        oneDayTableRainFallColList.push(
            <div className={classes.OneDayTableCol} key={'OneDayTableRainFall' + rainFallIdx}>
                <div className="OneDayTableRainFall">
                    {rainFall}
                </div>
            </div>
        )
    })
    oneDayTableRowList.push(
        <div className={classes.OneDayTableRow} key="OneDayTableRainFallRow">
            {oneDayTableRainFallColList}
        </div>
    );

    var oneDayTableWindColList = [];
    oneDayTableWindColList.push(
        <div className={classes.OneDayTableCol} key="OneDayTableWindHead"><div>風向</div><div>風速（ｍ/s）</div></div>
    );
    tableData.windList.forEach(function (wind, windIdx) {
        oneDayTableWindColList.push(
            <div className={classes.OneDayTableCol} key={'OneDayTableWind' + windIdx}>
                <div className="OneDayTableWindDirection">
                    {wind.windDirection}
                </div>
                <div className="OneDayTableWindSpeed">
                    {wind.windSpeed}
                </div>
            </div>
        )
    })
    oneDayTableRowList.push(
        <div className={classes.OneDayTableRow} key="OneDayTableWindRow">
            {oneDayTableWindColList}
        </div>
    );

    return (
        <div className={classes.OneDayTable}>
            {oneDayTableRowList}
        </div>
    );

}

export default OneDayTable;
