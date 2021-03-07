import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherRegion from './WeatherRegion';
import TodayTomorrow from './today_tomorrow/TodayTomorrow';
import WeatherTitle from './common/WeatherTitle';
import sunny from './today_tomorrow/sunny.png';

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
            ]
        }
    };
    it('プロップスのテスト', () => {
        const wrapper = shallow(<WeatherRegion todayTomorrowData={todayTomorrowData} />);
        const todayTomorrowNode = wrapper.find(TodayTomorrow);
        expect(todayTomorrowNode).toHaveLength(1);
        expect(todayTomorrowNode.prop('data')).toEqual(todayTomorrowData);
    });
});
