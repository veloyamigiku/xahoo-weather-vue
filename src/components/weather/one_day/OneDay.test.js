import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { weatherRegionWrap4Data } from '../WeatherRegionWrap4Data';
import OneDay from './OneDay';
import WeatherTitle from '../common/WeatherTitle';
import WeatherSubTitle from '../common/WeatherSubTitle';
import OneDayTable from './OneDayTable';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('OneDayコンポーネント', () => {
    it('プロップスのテスト_共通', () => {
        const data = weatherRegionWrap4Data.today;
        const wrapper = shallow(<OneDay data={data} />);

        const weatherSubTitleNode = wrapper.find(WeatherSubTitle);
        expect(weatherSubTitleNode).toHaveLength(1);
        expect(weatherSubTitleNode.at(0).props().data).toEqual(data.subTitle);

        const oneDayTableNode = wrapper.find(OneDayTable);
        expect(oneDayTableNode).toHaveLength(1);
        expect(oneDayTableNode.at(0).props().data).toEqual(data.body);
    });
    it('プロップスのテスト_タイトルあり', () => {
        const data = weatherRegionWrap4Data.today;
        const wrapper = shallow(<OneDay data={data} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).props().data).toEqual(data.title);
    });
    it('プロップスのテスト_タイトルあり', () => {
        const data = weatherRegionWrap4Data.tomorrow;
        const wrapper = shallow(<OneDay data={data} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(0);
    });
});
