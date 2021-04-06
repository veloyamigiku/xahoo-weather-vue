import night_sunny_cloudy from './one_day/img/night_sunny_cloudy.png';
import cloudy from './one_day/img/cloudy.png';
import sunny_cloudy from './one_day/img/sunny_cloudy.png';
import level2 from './pollen/img/level2.png';
import level3 from './pollen/img/level3.png';

export const weatherRegionWrap4Data = {
    today: {
        title: {
            subject: 'ピンポイント天気',
            year: 2021,
            month: 3,
            day: 19,
            hour: 15,
            min: 0,
            postfix: '発表'
        },
        subTitle: {
            subject: '今日の天気',
            year: 2021,
            month: 3,
            day: 19
        },
        body: [
            {
                hour: 0,
                weatherImg: night_sunny_cloudy,
                weather: '晴れ',
                t: 23,
                rh: 81,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 3,
                weatherImg: night_sunny_cloudy,
                weather: '晴れ',
                t: 22,
                rh: 81,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 6,
                weatherImg: sunny_cloudy,
                weather: '晴れ',
                t: 22,
                rh: 82,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 9,
                weatherImg: sunny_cloudy,
                weather: '晴れ',
                t: 24,
                rh: 77,
                rainFall: 0,
                windDirection: '南南東',
                windSpeed: 5
            },
            {
                hour: 12,
                weatherImg: sunny_cloudy,
                weather: '晴れ',
                t: 26,
                rh: 70,
                rainFall: 0,
                windDirection: '南南西',
                windSpeed: 5
            },
            {
                hour: 15,
                weatherImg: sunny_cloudy,
                weather: '晴れ',
                t: 26,
                rh: 70,
                rainFall: 0,
                windDirection: '南南西',
                windSpeed: 4
            },
            {
                hour: 18,
                weatherImg: night_sunny_cloudy,
                weather: '晴れ',
                t: 25,
                rh: 73,
                rainFall: 0,
                windDirection: '西南西',
                windSpeed: 2
            },
            {
                hour: 21,
                weatherImg: cloudy,
                weather: '曇り',
                t: 23,
                rh: 83,
                rainFall: 0,
                windDirection: '北北西',
                windSpeed: 2
            }
        ]
    },
    tomorrow: {
        title: null,
        subTitle: {
            subject: '明日の天気',
            year: 2021,
            month: 3,
            day: 20
        },
        body: [
            {
                hour: 0,
                weatherImg: night_sunny_cloudy,
                weather: '晴れ',
                t: 23,
                rh: 81,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 3,
                weatherImg: night_sunny_cloudy,
                weather: '晴れ',
                t: 22,
                rh: 81,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 6,
                weatherImg: sunny_cloudy,
                weather: '晴れ',
                t: 22,
                rh: 82,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 9,
                weatherImg: sunny_cloudy,
                weather: '晴れ',
                t: 24,
                rh: 77,
                rainFall: 0,
                windDirection: '南南東',
                windSpeed: 5
            },
            {
                hour: 12,
                weatherImg: sunny_cloudy,
                weather: '晴れ',
                t: 26,
                rh: 70,
                rainFall: 0,
                windDirection: '南南西',
                windSpeed: 5
            },
            {
                hour: 15,
                weatherImg: sunny_cloudy,
                weather: '晴れ',
                t: 26,
                rh: 70,
                rainFall: 0,
                windDirection: '南南西',
                windSpeed: 4
            },
            {
                hour: 18,
                weatherImg: night_sunny_cloudy,
                weather: '晴れ',
                t: 25,
                rh: 73,
                rainFall: 0,
                windDirection: '西南西',
                windSpeed: 2
            },
            {
                hour: 21,
                weatherImg: cloudy,
                weather: '曇り',
                t: 23,
                rh: 83,
                rainFall: 0,
                windDirection: '北北西',
                windSpeed: 2
            }
        ]
    },
    warning: {
        title: '南部の警報・注意報',
        item: [
            {
                type: '注意報',
                body: [
                    '乾燥',
                    '霜'
                ]
            }
        ]
    },
    pollen: {
        title: {
            subject: 'ふじみ野市の花粉情報',
            year: 2021,
            month: 3,
            day: 4,
            hour: 18,
            min: 0,
            postfix: '発表'
        },
        body: {
            todayTomorrow: [
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
            desc: {
                title: '花粉の詳しい情報を確認',
                url: 'http://localhost:8080'
            }
        }
    }
};