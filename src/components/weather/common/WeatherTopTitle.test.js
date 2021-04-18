import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { weatherRegionWrap2Data } from '../WeatherRegionWrap2Data';
import WeatherTopTitle from './WeatherTopTitle';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherTopTitleコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap2Data.weatherMap.title;
        const wrapper = shallow(
            <WeatherTopTitle data={data} />
        );

        const weatherTopTitleNode = wrapper.find('div.WeatherTopTitle');
        expect(weatherTopTitleNode).toHaveLength(1);
        expect(weatherTopTitleNode.at(0).text()).toContain(data.subject);
        expect(weatherTopTitleNode.at(0).text()).toContain(data.month);
        expect(weatherTopTitleNode.at(0).text()).toContain(data.day);
        expect(weatherTopTitleNode.at(0).text()).toContain(data.hour);
        expect(weatherTopTitleNode.at(0).text()).toContain(data.min);
        expect(weatherTopTitleNode.at(0).text()).toContain(data.postfix);
    });
});
