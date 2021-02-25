import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodayTomorrow from './TodayTomorrow';
import TodayTomorrowTitle from './TodayTomorrowTitle';
import sunny from './sunny.png';
import WeatherT from './WeatherT';
import WeatherTitle from '../common/WeatherTitle';

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
            }
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

    });
});
