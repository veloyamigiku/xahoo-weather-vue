import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherTitle from './WeatherTitle';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherTitleコンポーネント', () => {
    it('プロップスのテスト', () => {
        let data = {
            subject: '今日明日の天気',
            date: '2021年2月22日',
            time: '6時00分発表'
        };
        let wrapper = shallow(<WeatherTitle data={data} />);

        let weatherTitleSubjectNode = wrapper.find('div.weather_title div.weather_title_subject');
        expect(weatherTitleSubjectNode.length).toBe(1);
        expect(weatherTitleSubjectNode.text()).toBe(data.subject);
        let weatherTitleDateNode = wrapper.find('div.weather_title div.weather_title_date');
        expect(weatherTitleDateNode.length).toBe(1);
        expect(weatherTitleDateNode.text()).toBe(data.date);
        let weatherTitleTimeNode = wrapper.find('div.weather_title div.weather_title_time');
        expect(weatherTitleTimeNode.length).toBe(1);
        expect(weatherTitleTimeNode.text()).toBe(data.time);
    });
});
