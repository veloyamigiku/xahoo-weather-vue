import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherRegion from './WeatherRegion';
import TodayTomorrow from './today_tomorrow/TodayTomorrow';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherRegionコンポーネント', () => {
    const subject = "今日明日の天気";
    const date = "2021年2月22日";
    const time = "6時00分発表";
    it('プロップスのテスト', () => {
        const wrapper = shallow(<WeatherRegion subject={subject} date={date} time={time} />);
        const todayTomorrowNode = wrapper.find(TodayTomorrow);
        expect(todayTomorrowNode.length).toBe(1);
        expect(todayTomorrowNode.prop('subject')).toBe(subject);
        expect(todayTomorrowNode.prop('date')).toBe(date);
        expect(todayTomorrowNode.prop('time')).toBe(time);
    });
});
