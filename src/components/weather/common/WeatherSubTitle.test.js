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
        const data = weatherRegionWrap4Data.tomorrow.subTitle;
        const wrapper = shallow(
            <WeatherSubTitle data={data} />
        );

        const weatherSubTitleNode = wrapper.find('div.WeatherSubTitle');
        expect(weatherSubTitleNode).toHaveLength(1);
        expect(weatherSubTitleNode.at(0).text()).toContain(data.subject);
        expect(weatherSubTitleNode.at(0).text()).toContain(data.month);
        expect(weatherSubTitleNode.at(0).text()).toContain(data.day);
        const dayOfWeekStr = getDayOfWeekStr(
            data.year,
            data.month,
            data.day);
        expect(weatherSubTitleNode.at(0).text()).toContain(dayOfWeekStr);
    });
});
