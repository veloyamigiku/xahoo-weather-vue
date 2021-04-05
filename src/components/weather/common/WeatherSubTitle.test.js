import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherSubTitle from './WeatherSubTitle';
import { getDayOfWeekStr } from '../../../utils/weather/common/Date';
import { weatherRegionWrap4Data } from '../WeatherRegionWrap4Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherSubTitleコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap4Data.today.title
        const wrapper = shallow(
            <WeatherSubTitle data={data} />
        );

        const pinPointWeatherTitleNode = wrapper.find('div.WeatherSubTitle');
        expect(pinPointWeatherTitleNode).toHaveLength(1);
        expect(pinPointWeatherTitleNode.at(0).text()).toContain(data.month);
        expect(pinPointWeatherTitleNode.at(0).text()).toContain(data.day);
        const dayOfWeekStr = getDayOfWeekStr(
            data.year,
            data.month,
            data.day);
        expect(pinPointWeatherTitleNode.at(0).text()).toContain(dayOfWeekStr);
    });
});
