import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherRegion1 from './WeatherRegion1';
import { weatherRegionWrap1Data } from './WeatherRegionWrap1Data';
import WeatherMap from './weather_map/WeatherMap';
import GeneralCondition from './general_condition/GeneralCondition';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherRegion1コンポーネント', () => {
    it('プロップスのテスト', () => {
        const weatherMap = weatherRegionWrap1Data.weatherMap;
        const generalCondition = weatherRegionWrap1Data.generalCondition;
        const wrapper = shallow(
            <WeatherRegion1
                weatherMap={weatherMap}
                generalCondition={generalCondition} />
        );

        const weatherMapNode = wrapper.find(WeatherMap);
        expect(weatherMapNode).toHaveLength(1);
        expect(weatherMapNode.at(0).props().data).toEqual(weatherMap);

        const generalConditionNode = wrapper.find(GeneralCondition);
        expect(generalConditionNode).toHaveLength(1);
        expect(generalConditionNode.at(0).props().data).toEqual(generalCondition);
    });
});
