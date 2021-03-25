import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import PinPointWeatherTitle from './PinPointWeatherTitle';
import { getDayOfWeekStr } from '../../../../utils/main/weather/common/Date';
import { pinPointWeatherData } from '../WeatherRegionWrap4Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('PinPointWeatherTitleコンポーネント', () => {
    it('プロップスのテスト', () => {
        const wrapper = shallow(
            <PinPointWeatherTitle data={pinPointWeatherData.titleData} />
        );

        const pinPointWeatherTitleNode = wrapper.find('div.PinPointWeatherTitle');
        expect(pinPointWeatherTitleNode).toHaveLength(1);
        expect(pinPointWeatherTitleNode.at(0).text()).toContain(pinPointWeatherData.titleData.month);
        expect(pinPointWeatherTitleNode.at(0).text()).toContain(pinPointWeatherData.titleData.day);
        const dayOfWeekStr = getDayOfWeekStr(
            pinPointWeatherData.titleData.year,
            pinPointWeatherData.titleData.month,
            pinPointWeatherData.titleData.day);
        expect(pinPointWeatherTitleNode.at(0).text()).toContain(dayOfWeekStr);
    });
});
