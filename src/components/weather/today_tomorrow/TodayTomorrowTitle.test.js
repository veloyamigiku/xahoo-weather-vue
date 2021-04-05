import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodayTomorrowTitle from './TodayTomorrowTitle';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowTitleコンポーネント', () => {
    const data = {
        date: "2月23日(火)"
    };
    it('プロップスのテスト', () => {
        const wrapper = shallow(<TodayTomorrowTitle data={data} />);
        const todayTomorrowTitleNode = wrapper.find('div.TodayTomorrowTitle');
        expect(todayTomorrowTitleNode).toHaveLength(1);
        expect(todayTomorrowTitleNode.text()).toBe(data.date);
    });
});
