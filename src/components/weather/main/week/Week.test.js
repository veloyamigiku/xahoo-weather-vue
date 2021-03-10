import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import WeatherTitle from '../common/WeatherTitle';
import Week from './Week';
import WeekTable from './WeekTable';
import sunny from '../common/img/sunny.png';
import cloudy from '../common/img/cloudy.png';
import cloudy_rain from '../common/img/cloudy_rain.png';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Weekコンポーネント', () => {
    const data = {
        titleData: {
            subject: '週間天気',
            date: '2021年03月05日',
            time: '4時00分発表'
        },
        bodyData: [
            {
                year: 2021,
                month: 3,
                day: 7,
                weatherImg: cloudy,
                weather: '曇り',
                highT: '11',
                lowT: '6',
                rain: '20'
            },
            {
                year: 2021,
                month: 3,
                day: 8,
                weatherImg: cloudy,
                weather: '曇り',
                highT: '10',
                lowT: '3',
                rain: '40'
            },
            {
                year: 2021,
                month: 3,
                day: 9,
                weatherImg: sunny,
                weather: '晴れ',
                highT: '12',
                lowT: '5',
                rain: '15'
            },
            {
                year: 2021,
                month: 3,
                day: 10,
                weatherImg: cloudy,
                weather: '曇り',
                highT: '14',
                lowT: '4',
                rain: '40'
            },
            {
                year: 2021,
                month: 3,
                day: 11,
                weatherImg: sunny,
                weather: '晴れ',
                highT: '17',
                lowT: '3',
                rain: '10'
            },
            {
                year: 2021,
                month: 3,
                day: 12,
                weatherImg: cloudy_rain,
                weather: '曇一時雨',
                highT: '15',
                lowT: '6',
                rain: '60'
            }
        ]
    };
    it('プロップスのテスト', () => {
        const wrapper = shallow(<Week data={data} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).prop('data')).toEqual(data.titleData);

        const weekTableNode = wrapper.find(WeekTable);
        expect(weekTableNode).toHaveLength(1);
        expect(weekTableNode.at(0).prop('data')).toEqual(data.bodyData);
    });
});
