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
            year: 2021,
            month: 2,
            day: 22,
            hour: 6,
            min: 0,
            postfix: '発表'
        };
        let wrapper = shallow(<WeatherTitle data={data} />);

        let weatherTitleSubjectNode = wrapper.find('div.weather_title div.weather_title_subject');
        expect(weatherTitleSubjectNode.length).toBe(1);
        expect(weatherTitleSubjectNode.text()).toBe(data.subject);
        let weatherTitleDateNode = wrapper.find('div.weather_title div.weather_title_date');
        expect(weatherTitleDateNode.length).toBe(1);
        expect(weatherTitleDateNode.at(0).text()).toContain(data.year);
        expect(weatherTitleDateNode.at(0).text()).toContain(data.month);
        expect(weatherTitleDateNode.at(0).text()).toContain(data.day);
        let weatherTitleTimeNode = wrapper.find('div.weather_title div.weather_title_time');
        expect(weatherTitleTimeNode.length).toBe(1);
        expect(weatherTitleTimeNode.at(0).text()).toContain(data.hour);
        expect(weatherTitleTimeNode.at(0).text()).toContain(data.min);
        expect(weatherTitleTimeNode.at(0).text()).toContain(data.postfix);
    });
});
