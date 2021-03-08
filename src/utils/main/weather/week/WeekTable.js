export function formatWeekBody(bodyData) {
    var dateList = []
    var weatherList = []
    var tList = []
    var rainList = []
    for (var i = 0; i < bodyData.length; i++) {
        const oneDay = bodyData[i]
        dateList.push({
            date: oneDay.date,
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
