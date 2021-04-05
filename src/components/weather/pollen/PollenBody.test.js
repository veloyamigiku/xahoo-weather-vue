import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import level2 from './img/level2.png';
import level3 from './img/level3.png';
import PollenBody from './PollenBody';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('PollenBodyコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = {
            todayTomorrowData: [
                {
                    date: '3/5(金)',
                    quantityImg: level2,
                    quantity: 'やや多い'
                },
                {
                    date: '3/6(土)',
                    quantityImg: level3,
                    quantity: '多い'
                }
            ],
            descData: {
                title: '花粉の詳しい情報を確認',
                url: 'http://localhost:8080'
            }
        }
        const wrapper = shallow(<PollenBody data={data} />);

        const bodyDateNode = wrapper.find('div.BodyDate');
        expect(bodyDateNode).toHaveLength(data.todayTomorrowData.length);
        const bodyQuantityImgNode = wrapper.find('div.BodyQuantityImg');
        expect(bodyQuantityImgNode).toHaveLength(data.todayTomorrowData.length);
        const bodyQuantityNode = wrapper.find('div.BodyQuantity');
        expect(bodyQuantityNode).toHaveLength(data.todayTomorrowData.length);
        data.todayTomorrowData.forEach(function (body, idx) {
            expect(bodyDateNode.at(idx).text()).toBe(body.date);
            const img = bodyQuantityImgNode.at(idx).find('img');
            expect(img).toHaveLength(1);
            expect(img.at(0).prop('src')).toBe(body.quantityImg);
            expect(bodyQuantityNode.at(idx).text()).toBe(body.quantity);
        });

        const descButtonNode = wrapper.find('div.DescButton');
        expect(descButtonNode).toHaveLength(1);
        expect(descButtonNode.at(0).text()).toBe(data.descData.title);
        const descButtonLinkNode = descButtonNode.at(0).find('a');
        expect(descButtonLinkNode).toHaveLength(1);
        expect(descButtonLinkNode.at(0).prop('href')).toBe(data.descData.url)
    });
});
