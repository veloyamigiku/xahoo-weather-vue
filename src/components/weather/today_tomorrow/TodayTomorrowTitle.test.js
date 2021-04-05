import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodayTomorrowTitle from './TodayTomorrowTitle';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowTitleコンポーネント', () => {
    const data = weatherRegionWrap3Data.todayTomorrow.today.title;
    it('プロップスのテスト', () => {
        const wrapper = shallow(<TodayTomorrowTitle data={data} />);
        const todayTomorrowTitleNode = wrapper.find('div.TodayTomorrowTitle');
        expect(todayTomorrowTitleNode).toHaveLength(1);
        expect(todayTomorrowTitleNode.text()).toBe(data.date);
    });
});
