import { formatWeekBody } from "../../../../utils/main/weather/week/WeekTable";

const WeekTable = function(props) {

    var weekRowDataList = formatWeekBody(props.data);
    
    var weekDateColList = [];
    weekRowDataList[0].forEach(function(dateObj, idx) {
        weekDateColList.push(
            <div className="WeekCol" key={idx}>
                <div className="WeekDateCol">{dateObj.date}</div>
                <div className="WeekDayCol">{dateObj.day}</div>
            </div>
        );
    });

    var weekWeatherColList = [];
    weekRowDataList[1].forEach(function(weatherObj, idx) {
        weekWeatherColList.push(
            <div className="WeekCol" key={idx}>
                <div className="WeekWeatherImgCol"><img src={weatherObj.weatherImg} alt={weatherObj.weather} /></div>
                <div className="WeekWeatherCol">{weatherObj.weather}</div>
            </div>
        );
    });

    var weekTColList = [];
    weekRowDataList[2].forEach(function(tObj, idx) {
        weekTColList.push(
            <div className="WeekCol" key={idx}>
                <div className="WeekHighTCol">{tObj.highT}</div>
                <div className="WeekLowTCol">{tObj.lowT}</div>
            </div>
        );
    });

    var weekRainColList = [];
    weekRowDataList[3].forEach(function(rain, idx) {
        weekRainColList.push(
            <div className="WeekCol" key={idx}>
                <div className="WeekRainCol">{rain}</div>
            </div>
        );
    });

    return (
        <div className="WeekBody">
            <div className="WeekRow">
                <div className="WeekCol">日付</div>
                {weekDateColList}
            </div>
            <div className="WeekRow">
                <div className="WeekCol">天気</div>
                {weekWeatherColList}
            </div>
            <div className="WeekRow">
                <div className="WeekCol">気温（°Ｃ）</div>
                {weekTColList}
            </div>
            <div className="WeekRow">
                <div className="WeekCol">降水確率（％）</div>
                {weekRainColList}
            </div>
        </div>
    );
}

export default WeekTable;
