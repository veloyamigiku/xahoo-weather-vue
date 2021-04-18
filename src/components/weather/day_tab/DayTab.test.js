import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { getDayOfWeekStr } from '../../../utils/weather/common/Date';
import { weatherRegionWrap2Data } from '../WeatherRegionWrap2Data';
import DayTab from './DayTab';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('DayTabコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap2Data.weatherMap.dayTab;
        const wrapper = shallow(
            <DayTab data={data} />
        );

        const dayTabItemNode = wrapper.find('div.DayTabItem');
        expect(dayTabItemNode).toHaveLength(data.length);
        data.forEach(function (dayTabItem, dayTabItemIdx) {

            expect(dayTabItemNode.at(dayTabItemIdx).text()).toContain(dayTabItem.day);
            expect(dayTabItemNode.at(dayTabItemIdx).text()).toContain(getDayOfWeekStr(
                dayTabItem.year,
                dayTabItem.month,
                dayTabItem.day));
        });
    });
});
