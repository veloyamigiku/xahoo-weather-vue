import common_sunny from './common/img/sunny.png';
import common_cloudy from './common/img/cloudy.png';
import common_cloudy_rain from './common/img/cloudy_rain.png';
import one_day_night_sunny_cloudy from './one_day/img/night_sunny_cloudy.png';
import one_day_cloudy from './one_day/img/cloudy.png';
import one_day_sunny_cloudy from './one_day/img/sunny_cloudy.png';
import level2 from './pollen/img/level2.png';
import level3 from './pollen/img/level3.png';
import all_cold from './today_tomorrow_index/img/all_cold.png';
import all_drying from './today_tomorrow_index/img/all_drying.png';
import all_overlap_wear from './today_tomorrow_index/img/all_overlap_wear.png';
import all_rain from './today_tomorrow_index/img/all_rain.png';
import all_uv_ray from './today_tomorrow_index/img/all_uv_ray.png';
import all_wash from './today_tomorrow_index/img/all_wash.png';
import half_cold from './today_tomorrow_index/img/half_cold.png';
import half_drying from './today_tomorrow_index/img/half_drying.png';
import half_overlap_wear from './today_tomorrow_index/img/half_overlap_wear.png';
import half_rain from './today_tomorrow_index/img/half_rain.png';
import half_uv_ray from './today_tomorrow_index/img/half_uv_ray.png';
import half_wash from './today_tomorrow_index/img/half_wash.png';
import no_cold from './today_tomorrow_index/img/no_cold.png';
import no_drying from './today_tomorrow_index/img/no_drying.png';
import no_overlap_wear from './today_tomorrow_index/img/no_overlap_wear.png';
import no_rain from './today_tomorrow_index/img/no_rain.png';
import no_uv_ray from './today_tomorrow_index/img/no_uv_ray.png';
import no_wash from './today_tomorrow_index/img/no_wash.png';

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
                weatherImg: one_day_night_sunny_cloudy,
                weather: '晴れ',
                t: 23,
                rh: 81,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 3,
                weatherImg: one_day_night_sunny_cloudy,
                weather: '晴れ',
                t: 22,
                rh: 81,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 6,
                weatherImg: one_day_sunny_cloudy,
                weather: '晴れ',
                t: 22,
                rh: 82,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 9,
                weatherImg: one_day_sunny_cloudy,
                weather: '晴れ',
                t: 24,
                rh: 77,
                rainFall: 0,
                windDirection: '南南東',
                windSpeed: 5
            },
            {
                hour: 12,
                weatherImg: one_day_sunny_cloudy,
                weather: '晴れ',
                t: 26,
                rh: 70,
                rainFall: 0,
                windDirection: '南南西',
                windSpeed: 5
            },
            {
                hour: 15,
                weatherImg: one_day_sunny_cloudy,
                weather: '晴れ',
                t: 26,
                rh: 70,
                rainFall: 0,
                windDirection: '南南西',
                windSpeed: 4
            },
            {
                hour: 18,
                weatherImg: one_day_night_sunny_cloudy,
                weather: '晴れ',
                t: 25,
                rh: 73,
                rainFall: 0,
                windDirection: '西南西',
                windSpeed: 2
            },
            {
                hour: 21,
                weatherImg: one_day_cloudy,
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
                weatherImg: one_day_night_sunny_cloudy,
                weather: '晴れ',
                t: 23,
                rh: 81,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 3,
                weatherImg: one_day_night_sunny_cloudy,
                weather: '晴れ',
                t: 22,
                rh: 81,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 6,
                weatherImg: one_day_sunny_cloudy,
                weather: '晴れ',
                t: 22,
                rh: 82,
                rainFall: 0,
                windDirection: '南東',
                windSpeed: 4
            },
            {
                hour: 9,
                weatherImg: one_day_sunny_cloudy,
                weather: '晴れ',
                t: 24,
                rh: 77,
                rainFall: 0,
                windDirection: '南南東',
                windSpeed: 5
            },
            {
                hour: 12,
                weatherImg: one_day_sunny_cloudy,
                weather: '晴れ',
                t: 26,
                rh: 70,
                rainFall: 0,
                windDirection: '南南西',
                windSpeed: 5
            },
            {
                hour: 15,
                weatherImg: one_day_sunny_cloudy,
                weather: '晴れ',
                t: 26,
                rh: 70,
                rainFall: 0,
                windDirection: '南南西',
                windSpeed: 4
            },
            {
                hour: 18,
                weatherImg: one_day_night_sunny_cloudy,
                weather: '晴れ',
                t: 25,
                rh: 73,
                rainFall: 0,
                windDirection: '西南西',
                windSpeed: 2
            },
            {
                hour: 21,
                weatherImg: one_day_cloudy,
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
    },
    week: {
        title: {
            subject: '週間天気',
            year: 2021,
            month: 3,
            day: 5,
            hour: 4,
            min: 0,
            postfix: '発表'
        },
        body: [
            {
                year: 2021,
                month: 3,
                day: 7,
                weatherImg: common_cloudy,
                weather: '曇り',
                highT: '11',
                lowT: '6',
                rain: '20'
            },
            {
                year: 2021,
                month: 3,
                day: 8,
                weatherImg: common_cloudy,
                weather: '曇り',
                highT: '10',
                lowT: '3',
                rain: '40'
            },
            {
                year: 2021,
                month: 3,
                day: 9,
                weatherImg: common_sunny,
                weather: '晴れ',
                highT: '12',
                lowT: '5',
                rain: '15'
            },
            {
                year: 2021,
                month: 3,
                day: 10,
                weatherImg: common_cloudy,
                weather: '曇り',
                highT: '14',
                lowT: '4',
                rain: '40'
            },
            {
                year: 2021,
                month: 3,
                day: 11,
                weatherImg: common_sunny,
                weather: '晴れ',
                highT: '17',
                lowT: '3',
                rain: '10'
            },
            {
                year: 2021,
                month: 3,
                day: 12,
                weatherImg: common_cloudy_rain,
                weather: '曇一時雨',
                highT: '15',
                lowT: '6',
                rain: '60'
            }
        ]
    },
    todayTomorrowIndex: {
        title: {
            subject: '今日明日の指数情報',
            year: 2021,
            month: 3,
            day: 11,
            hour: 6,
            min: 0,
            postfix: '発表'
        },
        body: [
            {
                year: 2021,
                month: 3,
                day: 13,
                index: [
                    {
                        name: '洗濯',
                        level: 4,
                        desc: 'バスタオルも乾きます',
                        all_img: all_wash,
                        half_img: half_wash,
                        no_img: no_wash
                    },
                    {
                        name: '傘',
                        level: 0,
                        desc: '傘はいりません',
                        all_img: all_rain,
                        half_img: half_rain,
                        no_img: no_rain
                    },
                    {
                        name: '紫外線',
                        level: 2,
                        desc: '日焼け止めを利用しよう',
                        all_img: all_uv_ray,
                        half_img: half_uv_ray,
                        no_img: no_uv_ray
                    },
                    {
                        name: '重ね着',
                        level: 5,
                        desc: '最大級の防寒対策を',
                        all_img: all_overlap_wear,
                        half_img: half_overlap_wear,
                        no_img: no_overlap_wear
                    },
                    {
                        name: '乾燥',
                        level: 3.5,
                        desc: '乾燥しやすい人は対策を',
                        all_img: all_drying,
                        half_img: half_drying,
                        no_img: no_drying
                    },
                    {
                        name: '風邪注意',
                        level: 2.5,
                        desc: '危険度中。睡眠はしっかり',
                        all_img: all_cold,
                        half_img: half_cold,
                        no_img: no_cold
                    }
                ]
            },
            {
                year: 2021,
                month: 3,
                day: 14,
                index: [
                    {
                        name: '洗濯',
                        level: 2,
                        desc: '外干しできる時間帯もあります',
                        all_img: all_wash,
                        half_img: half_wash,
                        no_img: no_wash
                    },
                    {
                        name: '傘',
                        level: 4,
                        desc: '傘が必要です',
                        all_img: all_rain,
                        half_img: half_rain,
                        no_img: no_rain
                    },
                    {
                        name: '紫外線',
                        level: 1.5,
                        desc: '日焼け止めを利用しよう',
                        all_img: all_uv_ray,
                        half_img: half_uv_ray,
                        no_img: no_uv_ray
                    },
                    {
                        name: '重ね着',
                        level: 4.5,
                        desc: '厚手のコードやダウンで寒さ対策を',
                        all_img: all_overlap_wear,
                        half_img: half_overlap_wear,
                        no_img: no_overlap_wear
                    },
                    {
                        name: '乾燥',
                        level: 3,
                        desc: 'リップやクリームを持ち歩こう',
                        all_img: all_drying,
                        half_img: half_drying,
                        no_img: no_drying
                    },
                    {
                        name: '風邪注意',
                        level: 4,
                        desc: '加湿を心がけた方が良さそう',
                        all_img: all_cold,
                        half_img: half_cold,
                        no_img: no_cold
                    }
                ]
            }
        ]
    }
};
