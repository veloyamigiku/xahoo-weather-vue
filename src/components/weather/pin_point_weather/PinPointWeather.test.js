import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { pinPointWeatherData } from '../WeatherRegionWrap4Data';
import PinPointWeather from './PinPointWeather';
import WeatherTitle from '../common/WeatherTitle';
import PinPointWeatherBody from './PinPointWeatherBody';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('PinPointWeatherコンポーネント', () => {
    it('プロップスのテスト', () => {
        const wrapper = shallow(<PinPointWeather data={pinPointWeatherData} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).props().data).toEqual(pinPointWeatherData.titleData);

        const pinPointWeatherBodyNode = wrapper.find(PinPointWeatherBody);
        expect(pinPointWeatherBodyNode).toHaveLength(1);
        expect(pinPointWeatherBodyNode.at(0).props().data).toEqual(pinPointWeatherData);
    });
});
