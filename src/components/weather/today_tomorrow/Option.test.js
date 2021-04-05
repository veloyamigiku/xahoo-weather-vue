import Enzymy from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Option from './Option';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzymy.configure({
    adapter: new EnzymeAdapter()
});

describe('Optionコンポーネント', () => {
    it('プロップスのテスト', () => {
        const optionData = weatherRegionWrap3Data.todayTomorrow.today.option;
        const wrapper = shallow(<Option data={optionData} />);

        const optionItemNameNode = wrapper.find('div.Option div.OptionItem div.OptionItemName');
        expect(optionItemNameNode).toHaveLength(optionData.length);
        const optionItemDivider = wrapper.find('div.Option div.OptionItem div.OptionItemDivider');
        expect(optionItemDivider).toHaveLength(optionData.length);
        const optionItemValueNode = wrapper.find('div.Option div.OptionItem div.OptionItemValue');
        expect(optionItemValueNode).toHaveLength(optionData.length);
        optionData.forEach(function (d, idx) {
            expect(optionItemNameNode.at(idx).text()).toBe(d.name);
            expect(optionItemDivider.at(idx).text()).toBe(':');
            expect(optionItemValueNode.at(idx).text()).toBe(d.value);
        });
    });
});