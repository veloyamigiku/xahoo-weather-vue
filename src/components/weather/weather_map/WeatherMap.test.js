import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherTopTitle from '../common/WeatherTopTitle';
import DayTab from '../day_tab/DayTab';
import { weatherRegionWrap2Data } from '../WeatherRegionWrap2Data';
import WeatherMap from './WeatherMap';
import WeatherMapBody from './WeatherMapBody';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherMapコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap2Data.weatherMap;
        const wrapper = shallow(
            <WeatherMap data={data} />
        );

        const weatherTopTitleNode = wrapper.find(WeatherTopTitle);
        expect(weatherTopTitleNode).toHaveLength(1);
        expect(weatherTopTitleNode.at(0).props().data).toEqual(data.title);

        const dayTabNode = wrapper.find(DayTab);
        expect(dayTabNode).toHaveLength(1);
        expect(dayTabNode.at(0).props().data).toEqual(data.dayTab);

        const weatherMapBodyNode = wrapper.find(WeatherMapBody);
        expect(weatherMapBodyNode).toHaveLength(1)
        expect(weatherMapBodyNode.at(0).props().data).toEqual(data.body[0])
    });
});
