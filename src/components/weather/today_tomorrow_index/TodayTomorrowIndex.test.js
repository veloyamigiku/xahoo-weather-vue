import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherTitle from '../common/WeatherTitle';
import TodayTomorrowIndex from './TodayTomorrowIndex';
import TodayTomorrowIndexBody from './TodayTomorrowIndexBody';
import TodayTomorrowIndexTab from './TodayTomorrowIndexTab';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowIndexコンポーネント', () => {
    const data = weatherRegionWrap3Data.todayTomorrowIndex;
    it('プロップスのテスト', () => {
        const wrapper = shallow(<TodayTomorrowIndex data={data} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).prop('data')).toEqual(data.title);

        const todayTomorrowIndexTab = wrapper.find(TodayTomorrowIndexTab);
        expect(todayTomorrowIndexTab).toHaveLength(1);
        expect(todayTomorrowIndexTab.at(0).prop('data')).toEqual(data.body);

        const todayTomorrowIndexBody = wrapper.find(TodayTomorrowIndexBody);
        expect(todayTomorrowIndexBody).toHaveLength(1);
        expect(todayTomorrowIndexBody.at(0).prop('data')).toEqual(data.body);
    });
});
