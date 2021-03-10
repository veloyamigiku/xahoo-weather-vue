import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherRegion from './WeatherRegion';
import TodayTomorrow from './today_tomorrow/TodayTomorrow';
import sunny from './common/img/sunny.png';
import cloudy from './common/img/cloudy.png';
import cloudy_rain from './common/img/cloudy_rain.png';
import Pollen from './pollen/Pollen';
import level2 from './pollen/img/level2.png';
import level3 from './pollen/img/level3.png';
import Week from './week/Week';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherRegionコンポーネント', () => {
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
    const weekData = {
        titleData: {
            subject: '週間天気',
            date: '2021年03月05日',
            time: '4時00分発表'
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
    it('プロップスのテスト', () => {
        const wrapper = shallow(<WeatherRegion todayTomorrowData={todayTomorrowData} pollenData={pollenData} weekData={weekData} />);
        const todayTomorrowNode = wrapper.find(TodayTomorrow);
        expect(todayTomorrowNode).toHaveLength(1);
        expect(todayTomorrowNode.prop('data')).toEqual(todayTomorrowData);
        const pollenNode = wrapper.find(Pollen);
        expect(pollenNode).toHaveLength(1);
        expect(pollenNode.at(0).prop('data')).toEqual(pollenData);
        const weekNode = wrapper.find(Week);
        expect(weekNode).toHaveLength(1);
        expect(weekNode.at(0).prop('data')).toEqual(weekData);
    });
});
