import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import CityListBody from './CityListBody';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('CityListBodyコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap3Data.cityList.body;
        const wrapper = shallow(<CityListBody data={data} />);

        const cityListBodyItemNodes = wrapper.find('div.CityListBodyItem');
        expect(cityListBodyItemNodes).toHaveLength(data.length);
        for (var i = 0; i < cityListBodyItemNodes.length; i++) {
            const cityListBodyItemNode = cityListBodyItemNodes.at(i);
            expect(cityListBodyItemNode.text()).toContain(data[i]);
        }
    });
});
