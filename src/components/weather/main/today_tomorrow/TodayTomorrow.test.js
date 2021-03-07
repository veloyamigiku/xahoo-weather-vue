import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodayTomorrow from './TodayTomorrow';
import TodayTomorrowTitle from './TodayTomorrowTitle';
import sunny from './sunny.png';
import WeatherT from './WeatherT';
import WeatherTitle from '../common/WeatherTitle';
import RainTable from './RainTable';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowコンポーネント', () => {
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
            ]
        }
    };
    it('プロップスのテスト', () => {
        const wrapper = shallow(<TodayTomorrow data={todayTomorrowData} />);
        
        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.prop('data')).toEqual(todayTomorrowData.titleData);

        const todayTomorrowTitleNode = wrapper.find(TodayTomorrowTitle);
        expect(todayTomorrowTitleNode).toHaveLength(1);
        expect(todayTomorrowTitleNode.at(0).prop('data')).toEqual(todayTomorrowData.todayData.titleData);

        const weatherTNode = wrapper.find(WeatherT);
        expect(weatherTNode).toHaveLength(1);
        expect(weatherTNode.at(0).prop('data')).toEqual(todayTomorrowData.todayData.weatherTData);

        const rainTableNode = wrapper.find(RainTable);
        expect(rainTableNode).toHaveLength(1);
        expect(rainTableNode.prop('data')).toEqual(todayTomorrowData.todayData.rainData);
        
    });
});
