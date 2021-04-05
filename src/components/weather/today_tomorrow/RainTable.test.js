import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import RainTable from './RainTable';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('RainTableコンポーネント', () => {
    
    const rainData = weatherRegionWrap3Data.todayTomorrow.today.rain;

    it('プロップスのテスト', () => {

        const wrapper = shallow(<RainTable data={rainData} />);

        const rainTableThNodes = wrapper.find('th');
        expect(rainTableThNodes).toHaveLength(5);
        rainTableThNodes.forEach((rainTableThNode, idx) => {
            if (idx == 0) {
                expect(rainTableThNode.text()).toBe('時間');
            } else {
                const rain = rainData[idx - 1];
                expect(rainTableThNode.text()).toBe(rain.startHour + '-' + rain.endHour);
            }
        });

        const rainTableTdNodes = wrapper.find('td');
        expect(rainTableTdNodes).toHaveLength(5);
        rainTableTdNodes.forEach((rainTableTdNode, idx) => {
            if (idx == 0) {
                expect(rainTableTdNode.text()).toBe('降水');
            } else {
                const rain = rainData[idx - 1];
                expect(rainTableTdNode.text()).toBe(rain.rain + '%');
            }
        });

    });
});
