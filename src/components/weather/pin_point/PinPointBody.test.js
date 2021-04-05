import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import PinPointBody from './PinPointBody';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('PinPointBodyコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = [
            'さいたま市西区',
            'さいたま市北区',
            'さいたま市大宮区',
            'さいたま市見沼区',
            'さいたま市中央区',
            'さいたま市桜区',
            'さいたま市浦和区',
            'さいたま市南区',
            'さいたま市緑区',
            'さいたま市岩槻区',
            '川越市',
            '川口市',
            '所沢市',
            '飯能市',
            '春日部市',
            '狭山市',
            '上尾市',
            '草加市',
            '越谷市',
            '蕨市',
            '戸田市',
            '入間市',
            '朝霞市',
            '志木市',
            '和光市',
            '新座市',
            '桶川市',
            '北本市',
            '八潮市',
            '富士見市',
            '三郷市',
            '蓮田市',
            '坂戸市',
            '幸手市',
            '鶴ヶ島市',
            '日高市',
            '吉川市',
            'ふじみ野市',
            '白岡市',
            '伊奈町',
            '三芳町',
            '毛呂山町',
            '越生町',
            '川島町',
            '宮代町',
            '杉戸町',
            '松伏町'
        ];
        const wrapper = shallow(<PinPointBody data={data} />);

        const pinPointBodyItemNodes = wrapper.find('div.PinPointBodyItem');
        expect(pinPointBodyItemNodes).toHaveLength(data.length);
        for (var i = 0; i < pinPointBodyItemNodes.length; i++) {
            const pinPointBodyItemNode = pinPointBodyItemNodes.at(i);
            expect(pinPointBodyItemNode.text()).toContain(data[i]);
        }
    });
});
