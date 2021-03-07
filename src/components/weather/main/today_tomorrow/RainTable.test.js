import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import RainTable from './RainTable';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('RainTableコンポーネント', () => {
    
    const rainData = [
        {
            startHour: 0,
            endHour: 6,
            rain: 10
        },
        {
            startHour: 6,
            endHour: 12,
            rain: 12
        },
        {
            startHour: 12,
            endHour: 18,
            rain: 14
        },
        {
            startHour: 18,
            endHour: 24,
            rain: 30
        }
    ]

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
