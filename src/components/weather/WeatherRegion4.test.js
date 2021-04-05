import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import PinPointWeather from './pin_point_weather/PinPointWeather';
import WeatherRegion4 from './WeatherRegion4';
import { pinPointWeatherData } from './WeatherRegionWrap4Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherRegion4コンポーネント', () => {
    it('プロップスのテスト', () => {
        const wrapper = shallow(<WeatherRegion4 pinPointWeatherData={pinPointWeatherData} />);

        const pinPointWeatherNode = wrapper.find(PinPointWeather);
        expect(pinPointWeatherNode).toHaveLength(1);
        expect(pinPointWeatherNode.at(0).props().data).toEqual(pinPointWeatherData);
    });
});
