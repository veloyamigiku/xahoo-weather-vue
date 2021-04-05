import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Warning from './Warning';
import { weatherRegionWrap4Data } from '../WeatherRegionWrap4Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Warningコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap4Data.warning;
        const wrapper = shallow(<Warning data={data} />);

        const titleNode = wrapper.find('div.WarningTitle');
        expect(titleNode).toHaveLength(1);
        expect(titleNode.at(0).text()).toBe(data.title);

        const warnItemNode = wrapper.find('div.WarnItem');
        expect(warnItemNode).toHaveLength(data.item.length);

        for (var i = 0; i < warnItemNode.length; i++) {
            const warnTypeNode = warnItemNode.at(i).find('div.WarnType');
            expect(warnTypeNode).toHaveLength(1);
            expect(warnTypeNode.at(0).text()).toBe(data.item[i].type);
            const warnBodyNode = warnItemNode.at(i).find('div.WarnBody');
            expect(warnBodyNode).toHaveLength(data.item[i].body.length);
            for (var j = 0; j < warnBodyNode.length; j++) {
                expect(warnBodyNode.at(j).text()).toBe(data.item[i].body[j]);
            }
        }
    });
});