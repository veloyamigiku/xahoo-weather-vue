import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodayTomorrow from './TodayTomorrow';
import TodayTomorrowTitle from './TodayTomorrowTitle';
import sunny from '../common/img/sunny.png';
import cloudy from '../common/img/cloudy.png';
import WeatherT from './WeatherT';
import WeatherTitle from '../common/WeatherTitle';
import RainTable from './RainTable';
import Option from './Option';
import Warning from '../warning/Warning';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowコンポーネント', () => {
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
    it('プロップスのテスト', () => {
        const wrapper = shallow(<TodayTomorrow data={todayTomorrowData} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).prop('data')).toEqual(todayTomorrowData.titleData);

        const todayTomorrowTitleNode = wrapper.find(TodayTomorrowTitle);
        expect(todayTomorrowTitleNode).toHaveLength(2);
        expect(todayTomorrowTitleNode.at(0).prop('data')).toEqual(todayTomorrowData.todayData.titleData);
        expect(todayTomorrowTitleNode.at(1).prop('data')).toEqual(todayTomorrowData.tomorrowData.titleData);

        const weatherTNode = wrapper.find(WeatherT);
        expect(weatherTNode).toHaveLength(2);
        expect(weatherTNode.at(0).prop('data')).toEqual(todayTomorrowData.todayData.weatherTData);
        expect(weatherTNode.at(1).prop('data')).toEqual(todayTomorrowData.tomorrowData.weatherTData);

        const rainTableNode = wrapper.find(RainTable);
        expect(rainTableNode).toHaveLength(2);
        expect(rainTableNode.at(0).prop('data')).toEqual(todayTomorrowData.todayData.rainData);
        expect(rainTableNode.at(1).prop('data')).toEqual(todayTomorrowData.tomorrowData.rainData);

        const optionNode = wrapper.find(Option);
        expect(optionNode).toHaveLength(2);
        expect(optionNode.at(0).prop('data')).toEqual(todayTomorrowData.todayData.optionData);
        expect(optionNode.at(1).prop('data')).toEqual(todayTomorrowData.tomorrowData.optionData);

        const warningNode = wrapper.find(Warning);
        expect(warningNode).toHaveLength(1);
        expect(warningNode.at(0).prop('data')).toEqual(todayTomorrowData.warningData);

    });
});
