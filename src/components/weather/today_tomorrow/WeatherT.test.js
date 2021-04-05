import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherT from './WeatherT';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherTコンポーネント', () => {
    const data = weatherRegionWrap3Data.todayTomorrow.today.weatherT;
    it('プロップスのテスト', () => {
        const wrapper = shallow(<WeatherT data={data} />);
        
        const weatherImgNode = wrapper.find('img');
        expect(weatherImgNode.length).toBe(1);
        expect(weatherImgNode.prop('src')).toBe(data.type);
        
        const weatherStrNode = wrapper.find('div.WeatherStr');
        expect(weatherStrNode.length).toBe(1);
        expect(weatherStrNode.text()).toBe(data.str);

        const highTNode = wrapper.find('div.HighT');
        expect(highTNode.length).toBe(1);
        expect(highTNode.text()).toContain(data.highT + '°C');
        expect(highTNode.text()).toContain('[' + data.highTDiff + ']');

        const lowTNode = wrapper.find('div.LowT');
        expect(lowTNode.length).toBe(1);
        expect(lowTNode.text()).toContain(data.lowT + '°C');
        expect(lowTNode.text()).toContain('[' + data.lowTDiff + ']');

    });
});
