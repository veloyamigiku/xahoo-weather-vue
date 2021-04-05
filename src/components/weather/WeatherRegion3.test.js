import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherRegion3 from './WeatherRegion3';
import TodayTomorrow from './today_tomorrow/TodayTomorrow';
import Pollen from './pollen/Pollen';
import Week from './week/Week';
import TodayTomorrowIndex from './today_tomorrow_index/TodayTomorrowIndex';
import CityList from './city_list/CityList';
import { weatherRegionWrap3Data } from './WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeatherRegionコンポーネント', () => {
    it('プロップスのテスト', () => {
        const wrapper = shallow(
            <WeatherRegion3
                todayTomorrow={weatherRegionWrap3Data.todayTomorrow}
                pollen={weatherRegionWrap3Data.pollen}
                week={weatherRegionWrap3Data.week}
                todayTomorrowIndex={weatherRegionWrap3Data.todayTomorrowIndex}
                cityList={weatherRegionWrap3Data.cityList} />);
        const todayTomorrowNode = wrapper.find(TodayTomorrow);
        expect(todayTomorrowNode).toHaveLength(1);
        expect(todayTomorrowNode.prop('data')).toEqual(weatherRegionWrap3Data.todayTomorrow);
        const pollenNode = wrapper.find(Pollen);
        expect(pollenNode).toHaveLength(1);
        expect(pollenNode.at(0).prop('data')).toEqual(weatherRegionWrap3Data.pollen);
        const weekNode = wrapper.find(Week);
        expect(weekNode).toHaveLength(1);
        expect(weekNode.at(0).prop('data')).toEqual(weatherRegionWrap3Data.week);
        const todayTomorrowIndexNode = wrapper.find(TodayTomorrowIndex);
        expect(todayTomorrowIndexNode).toHaveLength(1);
        expect(todayTomorrowIndexNode.at(0).prop('data')).toEqual(weatherRegionWrap3Data.todayTomorrowIndex);
        const cityListNode = wrapper.find(CityList);
        expect(cityListNode).toHaveLength(1);
        expect(cityListNode.at(0).props().data).toEqual(weatherRegionWrap3Data.cityList);
    });
});
