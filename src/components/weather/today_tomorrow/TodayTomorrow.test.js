import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import TodayTomorrow from './TodayTomorrow';
import TodayTomorrowTitle from './TodayTomorrowTitle';
import WeatherT from './WeatherT';
import WeatherTitle from '../common/WeatherTitle';
import RainTable from './RainTable';
import Option from './Option';
import Warning from '../warning/Warning';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowコンポーネント', () => {
    const todayTomorrowData = weatherRegionWrap3Data.todayTomorrow;
    it('プロップスのテスト', () => {
        const wrapper = shallow(<TodayTomorrow data={todayTomorrowData} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).prop('data')).toEqual(todayTomorrowData.title);

        const todayTomorrowTitleNode = wrapper.find(TodayTomorrowTitle);
        expect(todayTomorrowTitleNode).toHaveLength(2);
        expect(todayTomorrowTitleNode.at(0).prop('data')).toEqual(todayTomorrowData.today.title);
        expect(todayTomorrowTitleNode.at(1).prop('data')).toEqual(todayTomorrowData.tomorrow.title);

        const weatherTNode = wrapper.find(WeatherT);
        expect(weatherTNode).toHaveLength(2);
        expect(weatherTNode.at(0).prop('data')).toEqual(todayTomorrowData.today.weatherT);
        expect(weatherTNode.at(1).prop('data')).toEqual(todayTomorrowData.tomorrow.weatherT);

        const rainTableNode = wrapper.find(RainTable);
        expect(rainTableNode).toHaveLength(2);
        expect(rainTableNode.at(0).prop('data')).toEqual(todayTomorrowData.today.rain);
        expect(rainTableNode.at(1).prop('data')).toEqual(todayTomorrowData.tomorrow.rain);

        const optionNode = wrapper.find(Option);
        expect(optionNode).toHaveLength(2);
        expect(optionNode.at(0).prop('data')).toEqual(todayTomorrowData.today.option);
        expect(optionNode.at(1).prop('data')).toEqual(todayTomorrowData.tomorrow.option);

        const warningNode = wrapper.find(Warning);
        expect(warningNode).toHaveLength(1);
        expect(warningNode.at(0).prop('data')).toEqual(todayTomorrowData.warning);

    });
});
