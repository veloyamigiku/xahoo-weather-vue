import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherTitle from '../common/WeatherTitle';
import TodayTomorrow from './TodayTomorrow';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowコンポーネント', () => {
    const subject = "今日明日の天気";
    const date = "2021年2月22日";
    const time = "6時00分発表";
    it('プロップスのテスト', () => {
        const wrapper = shallow(<TodayTomorrow subject={subject} date={date} time={time} />);
        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode.length).toBe(1);
        expect(weatherTitleNode.prop('subject')).toBe(subject);
        expect(weatherTitleNode.prop('date')).toBe(date);
        expect(weatherTitleNode.prop('time')).toBe(time);
    });
});
