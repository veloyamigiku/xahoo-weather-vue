import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import OneDay from './one_day/OneDay';
import WeatherRegion4 from './WeatherRegion4';
import { weatherRegionWrap4Data } from './WeatherRegionWrap4Data';
import Warning from './warning/Warning';
import Pollen from './pollen/Pollen';
import Week from './week/Week';
import TodayTomorrowIndex from './today_tomorrow_index/TodayTomorrowIndex';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherRegion4コンポーネント', () => {
    it('プロップスのテスト', () => {
        const today = weatherRegionWrap4Data.today;
        const warning = weatherRegionWrap4Data.warning;
        const pollen = weatherRegionWrap4Data.pollen;
        const tomorrow = weatherRegionWrap4Data.tomorrow;
        const week = weatherRegionWrap4Data.week;
        const todayTomorrowIndex = weatherRegionWrap4Data.todayTomorrowIndex;
        const wrapper = shallow(
            <WeatherRegion4
                today={today}
                warning={warning}
                pollen={pollen}
                tomorrow={tomorrow}
                week={week}
                todayTomorrowIndex={todayTomorrowIndex} />);

        const oneDayNode = wrapper.find(OneDay);
        expect(oneDayNode).toHaveLength(2);
        const oneDayTodayNode = oneDayNode.at(0);
        expect(oneDayTodayNode.props().data).toEqual(today);

        const warningNode = wrapper.find(Warning);
        expect(warningNode).toHaveLength(1);
        expect(warningNode.at(0).props().data).toEqual(warning);

        const pollenNode = wrapper.find(Pollen);
        expect(pollenNode).toHaveLength(1);
        expect(pollenNode.at(0).props().data).toEqual(pollen);

        const oneDayTomorrowNode = oneDayNode.at(1);
        expect(oneDayTomorrowNode.props().data).toEqual(tomorrow);

        const weekNode = wrapper.find(Week);
        expect(weekNode).toHaveLength(1);
        expect(weekNode.at(0).props().data).toEqual(week);

        const todayTomorrowIndexNode = wrapper.find(TodayTomorrowIndex);
        expect(todayTomorrowIndexNode).toHaveLength(1);
        expect(todayTomorrowIndexNode.at(0).props().data).toEqual(todayTomorrowIndex);
    });
});
