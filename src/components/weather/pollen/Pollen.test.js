import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherTitle from '../common/WeatherTitle';
import Pollen from './Pollen';
import PollenBody from './PollenBody';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Pollenコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap3Data.pollen;
        const wrapper = shallow(<Pollen data={data} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).prop('data')).toEqual(data.title);

        const pollenBodyNode = wrapper.find(PollenBody);
        expect(pollenBodyNode).toHaveLength(1);
        expect(pollenBodyNode.at(0).prop('data')).toEqual(data.body);

    });
});
