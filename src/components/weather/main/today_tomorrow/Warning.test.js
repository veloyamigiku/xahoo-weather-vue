import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Warning from './Warning';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Warningコンポーネント', () => {
    it('プロップスのテスト', () => {
        const warningData = {
            title: '福岡地方の警報・注意報',
            item: [
                {
                    type: '注意報',
                    body: [
                        '乾燥',
                        '霜'
                    ]
                }
            ]
        }
        const wrapper = shallow(<Warning data={warningData} />);
        
        const titleNode = wrapper.find('div.WarningTitle');
        expect(titleNode).toHaveLength(1);
        expect(titleNode.at(0).text()).toBe(warningData.title);

        const warnItemNode = wrapper.find('div.WarnItem');
        expect(warnItemNode).toHaveLength(warningData.item.length);

        for (var i = 0; i < warnItemNode.length; i++) {
            const warnTypeNode = warnItemNode.at(i).find('div.WarnType');
            expect(warnTypeNode).toHaveLength(1);
            expect(warnTypeNode.at(0).text()).toBe(warningData.item[i].type);
            const warnBodyNode = warnItemNode.at(i).find('div.WarnBody');
            expect(warnBodyNode).toHaveLength(warningData.item[i].body.length);
            for (var j = 0; j < warnBodyNode.length; j++) {
                expect(warnBodyNode.at(j).text()).toBe(warningData.item[i].body[j]);
            }
        }
    });
});
