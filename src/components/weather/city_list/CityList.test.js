import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherTitle from '../common/WeatherTitle';
import CityList from './CityList';
import CityListBody from './CityListBody';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('CityListコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap3Data.cityList;
        const wrapper = shallow(<CityList data={data} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).props().data).toEqual(data.title);

        const cityListBodyNode = wrapper.find(CityListBody);
        expect(cityListBodyNode).toHaveLength(1);
        expect(cityListBodyNode.at(0).props().data).toEqual(data.body);
    })
})