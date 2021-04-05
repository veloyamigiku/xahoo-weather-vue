import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import PollenBody from './PollenBody';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('PollenBodyコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap3Data.pollen.body;
        const wrapper = shallow(<PollenBody data={data} />);

        const bodyDateNode = wrapper.find('div.BodyDate');
        expect(bodyDateNode).toHaveLength(data.todayTomorrow.length);
        const bodyQuantityImgNode = wrapper.find('div.BodyQuantityImg');
        expect(bodyQuantityImgNode).toHaveLength(data.todayTomorrow.length);
        const bodyQuantityNode = wrapper.find('div.BodyQuantity');
        expect(bodyQuantityNode).toHaveLength(data.todayTomorrow.length);
        data.todayTomorrow.forEach(function (body, idx) {
            expect(bodyDateNode.at(idx).text()).toBe(body.date);
            const img = bodyQuantityImgNode.at(idx).find('img');
            expect(img).toHaveLength(1);
            expect(img.at(0).prop('src')).toBe(body.quantityImg);
            expect(bodyQuantityNode.at(idx).text()).toBe(body.quantity);
        });

        const descButtonNode = wrapper.find('div.DescButton');
        expect(descButtonNode).toHaveLength(1);
        expect(descButtonNode.at(0).text()).toBe(data.desc.title);
        const descButtonLinkNode = descButtonNode.at(0).find('a');
        expect(descButtonLinkNode).toHaveLength(1);
        expect(descButtonLinkNode.at(0).prop('href')).toBe(data.desc.url)
    });
});
