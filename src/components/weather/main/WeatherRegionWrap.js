import WeatherRegion from "./WeatherRegion";
import sunny from './today_tomorrow/img/sunny.png';
import cloudy from './today_tomorrow/img/cloudy.png';
import level2 from './pollen/img/level2.png';
import level3 from './pollen/img/level3.png';

const WeatherRegionWrap = function () {
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
        },
        tomorrowData: {
            titleData: {
                date: '2月24日(水)'
            },
            weatherTData: {
                type: cloudy,
                str: '曇り',
                highT: '12',
                highTDiff: '-10',
                lowT: '2',
                lowTDiff: '-3'
            },
            rainData: [
                {
                    startHour: 0,
                    endHour: 6,
                    rain: 30
                },
                {
                    startHour: 6,
                    endHour: 12,
                    rain: 32
                },
                {
                    startHour: 12,
                    endHour: 18,
                    rain: 34
                },
                {
                    startHour: 18,
                    endHour: 24,
                    rain: 40
                }
            ],
            optionData: [
                {
                    name: '風',
                    value: '南の風強く後南東の風'
                },
                {
                    name: '波',
                    value: '5メートル後4メートルうねりを伴う'
                }
            ]
        },
        warningData: {
            title: '福岡地方の警報・注意報',
            item: [
                {
                    type: '注意報',
                    body: [
                        '乾燥',
                        '霜'
                    ]
                }
            ]
        }
    };
    const pollenData = {
        titleData: {
            subject: '福岡県の花粉情報',
            date: '2021年3月4日',
            time: '18時00分発表'
        },
        bodyData: {
            todayTomorrowData: [
                {
                    date: '3/5(金)',
                    quantityImg: level2,
                    quantity: 'やや多い'
                },
                {
                    date: '3/6(土)',
                    quantityImg: level3,
                    quantity: '多い'
                }
            ],
            descData: {
                title: '花粉の詳しい情報を確認',
                url: 'http://localhost:8080'
            }
        }
    };
    return (
        <WeatherRegion todayTomorrowData={todayTomorrowData} pollenData={pollenData} />
    )
}

export default WeatherRegionWrap;
