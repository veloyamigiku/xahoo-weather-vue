export const fromBodyDataToTableData = function(bodyData) {

    var timeList = [];
    var weatherList = [];
    var tList = [];
    var rhList = [];
    var rainFallList = [];
    var windList = [];
    bodyData.forEach(function (term) {
        timeList.push(term.hour);
        weatherList.push({
            weather: term.weather,
            weatherImg: term.weatherImg
        });
        tList.push(term.t);
        rhList.push(term.rh);
        rainFallList.push(term.rainFall);
        windList.push({
            windDirection: term.windDirection,
            windSpeed: term.windSpeed
        });
    });

    return {
        timeList,
        weatherList,
        tList,
        rhList,
        rainFallList,
        windList
    };
}
