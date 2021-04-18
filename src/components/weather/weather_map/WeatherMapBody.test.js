import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { weatherRegionWrap2Data } from '../WeatherRegionWrap2Data';
import WeatherMapBody from './WeatherMapBody';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherMapBodyコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap2Data.weatherMap.body[0];
        const wrapper = shallow(<WeatherMapBody data={data} />);

        const weatherMapImgNode = wrapper.find('div.WeatherMapImg');
        expect(weatherMapImgNode).toHaveLength(1);
        expect(weatherMapImgNode.at(0).prop('style').backgroundImage).toEqual('url(' + data.map + ')');
        expect(weatherMapImgNode.at(0).prop('style').width).toEqual(data.mapWidth + 'px');
        expect(weatherMapImgNode.at(0).prop('style').height).toEqual(data.mapHeight + 'px');
        const weatherMapPositionNodes = wrapper.find('div.WeatherMapPosition');
        expect(weatherMapPositionNodes).toHaveLength(data.position.length);
        data.position.forEach(function (position, positionIdx) {
            const weatherMapPositionNode = weatherMapPositionNodes.at(positionIdx);
            expect(weatherMapPositionNode.text()).toContain(position.name);
            const weatherMapPositionImgNode = weatherMapPositionNode.find('div.WeatherMapPositionImg img');
            expect(weatherMapPositionImgNode).toHaveLength(1);
            expect(weatherMapPositionImgNode.at(0).prop('src')).toEqual(position.weatherImg);
            expect(weatherMapPositionNode.text()).toContain(position.highT);
            expect(weatherMapPositionNode.text()).toContain(position.lowT);
            expect(weatherMapPositionNode.text()).toContain(position.percip);
            expect(weatherMapPositionNode.prop('style').left).toEqual(position.left + 'px');
            expect(weatherMapPositionNode.prop('style').top).toEqual(position.top + 'px');
        });
    });
});
