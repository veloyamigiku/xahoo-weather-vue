import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherResion2 from './WeatherRegion2';
import { weatherRegionWrap2Data } from './WeatherRegionWrap2Data';
import WeatherMap from './weather_map/WeatherMap';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherResion2コンポーネント', () => {
    it('プロップスのテスト', () =>{
        const weatherMap = weatherRegionWrap2Data.weatherMap;
        const wrapper = shallow(
            <WeatherResion2 weatherMap={weatherMap} />
        );

        const weatherMapNode = wrapper.find(WeatherMap);
        expect(weatherMapNode).toHaveLength(1);
        expect(weatherMapNode.at(0).props().data).toEqual(weatherMap);
    });
});
