import WeatherRegion from "./WeatherRegion";
import sunny from './today_tomorrow/sunny.png';

const WeatherRegionWrap = function() {
    /*const titleData = {
        subject: "今日明日の天気",
        date: "2021年2月22日",
        time: "6時00分発表"
    }
    const todayData = {
        date: "2月23日(火)"
    }*/
    const todayTomorrowData = {
        titleData: {
            subject: "今日明日の天気",
            date: "2021年2月22日",
            time: "6時00分発表"
        },
        todayData: {
            titleData: {
                date: "2月23日(火)"
            },
            weatherTData: {
                type: sunny,
                str: "晴れ",
                highT: "14",
                highTDiff: "-8",
                lowT: "4",
                lowTDiff: "-1"
            },
            rainData: [
                {
                    startHour: 0,
                    endHour: 6,
                    rain: 10
                },
                {
                    startHour: 6,
                    endHour: 12,
                    rain: 12
                },
                {
                    startHour: 12,
                    endHour: 18,
                    rain: 14
                },
                {
                    startHour: 18,
                    endHour: 24,
                    rain: 30
                }
            ],
            optionData: [
                {
                  name: '風',
                  value: '北の風強く後北東の風'
                },
                {
                  name: '波',
                  value: '4メートル後3メートルうねりを伴う'
                }
            ]
        }
    };
    return (
        <WeatherRegion todayTomorrowData={todayTomorrowData} />
    )
}

export default WeatherRegionWrap;
