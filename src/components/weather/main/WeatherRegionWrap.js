import WeatherRegion from './WeatherRegion';
import sunny from './common/img/sunny.png';
import cloudy from './common/img/cloudy.png';
import cloudy_rain from './common/img/cloudy_rain.png';
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
            year: 2021,
            month: 2,
            day: 22,
            hour: 6,
            min: 0,
            postfix: '発表'
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
            year: 2021,
            month: 3,
            day: 4,
            hour: 18,
            min: 0,
            postfix: '発表'
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
    const weekData = {
        titleData: {
            subject: '週間天気',
            year: 2021,
            month: 3,
            day: 5,
            hour: 4,
            min: 0,
            postfix: '発表'
        },
        bodyData: [
            {
                year: 2021,
                month: 3,
                day: 7,
                weatherImg: cloudy,
                weather: '曇り',
                highT: '11',
                lowT: '6',
                rain: '20'
            },
            {
                year: 2021,
                month: 3,
                day: 8,
                weatherImg: cloudy,
                weather: '曇り',
                highT: '10',
                lowT: '3',
                rain: '40'
            },
            {
                year: 2021,
                month: 3,
                day: 9,
                weatherImg: sunny,
                weather: '晴れ',
                highT: '12',
                lowT: '5',
                rain: '15'
            },
            {
                year: 2021,
                month: 3,
                day: 10,
                weatherImg: cloudy,
                weather: '曇り',
                highT: '14',
                lowT: '4',
                rain: '40'
            },
            {
                year: 2021,
                month: 3,
                day: 11,
                weatherImg: sunny,
                weather: '晴れ',
                highT: '17',
                lowT: '3',
                rain: '10'
            },
            {
                year: 2021,
                month: 3,
                day: 12,
                weatherImg: cloudy_rain,
                weather: '曇一時雨',
                highT: '15',
                lowT: '6',
                rain: '60'
            }
        ]
    };
    const todayTomorrowIndexData = {
        titleData: {
            subject: '今日明日の指数情報',
            year: 2021,
            month: 3,
            day: 11,
            hour: 6,
            min: 0,
            postfix: '発表'
        },
        bodyData: [
            {
                year: 2021,
                month: 3,
                day: 11,
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
                ],
            },
            {
                year: 2021,
                month: 3,
                day: 12,
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
    };
    const pinPointData = {
        titleData: {
            subject: 'ピンポイント天気',
            year: null,
            month: null,
            day: null,
            hour: null,
            min: null,
            postfix: null
        },
        bodyData: [
            'さいたま市西区',
            'さいたま市北区',
            'さいたま市大宮区',
            'さいたま市見沼区',
            'さいたま市中央区',
            'さいたま市桜区',
            'さいたま市浦和区',
            'さいたま市南区',
            'さいたま市緑区',
            'さいたま市岩槻区',
            '川越市',
            '川口市',
            '所沢市',
            '飯能市',
            '春日部市',
            '狭山市',
            '上尾市',
            '草加市',
            '越谷市',
            '蕨市',
            '戸田市',
            '入間市',
            '朝霞市',
            '志木市',
            '和光市',
            '新座市',
            '桶川市',
            '北本市',
            '八潮市',
            '富士見市',
            '三郷市',
            '蓮田市',
            '坂戸市',
            '幸手市',
            '鶴ヶ島市',
            '日高市',
            '吉川市',
            'ふじみ野市',
            '白岡市',
            '伊奈町',
            '三芳町',
            '毛呂山町',
            '越生町',
            '川島町',
            '宮代町',
            '杉戸町',
            '松伏町'
        ]
    };

    return (
        <WeatherRegion
            todayTomorrowData={todayTomorrowData}
            pollenData={pollenData}
            weekData={weekData}
            todayTomorrowIndexData={todayTomorrowIndexData}
            pinPointData={pinPointData} />
    )
}

export default WeatherRegionWrap;
