import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import WeatherTitle from '../common/WeatherTitle';
import Week from './Week';
import WeekTable from './WeekTable';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Weekコンポーネント', () => {
    const data = weatherRegionWrap3Data.week;
    it('プロップスのテスト', () => {
        const wrapper = shallow(<Week data={data} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).prop('data')).toEqual(data.title);

        const weekTableNode = wrapper.find(WeekTable);
        expect(weekTableNode).toHaveLength(1);
        expect(weekTableNode.at(0).prop('data')).toEqual(data.body);
    });
});
