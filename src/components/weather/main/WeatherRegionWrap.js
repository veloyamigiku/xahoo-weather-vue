import WeatherRegion from "./WeatherRegion";

const WeatherRegionWrap = function() {
    const subject = "今日明日の天気";
    const date = "2021年2月22日";
    const time = "6時00分発表";
    return (
        <WeatherRegion subject={subject} date={date} time={time} />
    )
}

export default WeatherRegionWrap;
