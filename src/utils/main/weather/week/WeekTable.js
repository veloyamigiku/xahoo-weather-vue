export function formatWeekBody(bodyData) {
    var dateList = []
    var weatherList = []
    var tList = []
    var rainList = []
    for (var i = 0; i < bodyData.length; i++) {
        const oneDay = bodyData[i]
        dateList.push({
            year: oneDay.year,
            month: oneDay.month,
            day: oneDay.day
        })
        weatherList.push({
            weatherImg: oneDay.weatherImg,
            weather: oneDay.weather
        })
        tList.push({
            highT: oneDay.highT,
            lowT: oneDay.lowT
        })
        rainList.push(oneDay.rain)
    }
    return [
        dateList,
        weatherList,
        tList,
        rainList
    ];
}

export function getDayOfWeekStr(year, month, day) {
    return ['日', '月', '火', '水', '木', '金', '土'][getDayOfWeek(year, month, day)];
}

export function getDayOfWeek(year, month, day) {
    let date = new Date(year, month - 1, day);
    return date.getDay();
}
