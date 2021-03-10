import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeekTable from './WeekTable';
import sunny from '../common/img/sunny.png';
import cloudy from '../common/img/cloudy.png';
import cloudy_rain from '../common/img/cloudy_rain.png';
import { formatWeekBody, getDayOfWeekStr } from '../../../../utils/main/weather/week/WeekTable';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('WeekTableコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = [
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
        ];
        const wrapper = shallow(<WeekTable data={data} />);

        const weekRowDataList = formatWeekBody(data);
        const weekRowNodes = wrapper.find('div.WeekRow');
        expect(weekRowNodes).toHaveLength(weekRowDataList.length);

        const dateRowNode = weekRowNodes.at(0);
        const dateColNodes = dateRowNode.find('div.WeekCol');
        const dateData = weekRowDataList[0];
        expect(dateColNodes).toHaveLength(dateData.length + 1);
        for (var dateIdx = 0; dateIdx < dateColNodes.length; dateIdx++) {
            if (dateIdx !== 0) {
                const dateColNode = dateColNodes.at(dateIdx);
                expect(dateColNode.text()).toContain(dateData[dateIdx - 1].month);
                expect(dateColNode.text()).toContain(dateData[dateIdx - 1].day);
                expect(dateColNode.text()).toContain(getDayOfWeekStr(
                    dateData[dateIdx - 1].year,
                    dateData[dateIdx - 1].month,
                    dateData[dateIdx - 1].day));
            }
        }

        const weatherRowNode = weekRowNodes.at(1);
        const weatherColNodes = weatherRowNode.find('div.WeekCol');
        const weatherData = weekRowDataList[1];
        expect(weatherColNodes).toHaveLength(weatherData.length + 1);
        for (var weatherIdx = 0; weatherIdx < weatherColNodes.length; weatherIdx++) {
            if (weatherIdx !== 0) {
                const weatherColNode = weatherColNodes.at(weatherIdx);
                expect(weatherColNode.text()).toContain(weatherData[weatherIdx - 1].weather);
                const weatherImgNode = weatherColNode.find('img');
                expect(weatherImgNode).toHaveLength(1);
                expect(weatherImgNode.at(0).prop('src')).toBe(weatherData[weatherIdx - 1].weatherImg);
            }
        }

        const tRowNode = weekRowNodes.at(2);
        const tColNodes = tRowNode.find('div.WeekCol');
        const tData = weekRowDataList[2];
        expect(tColNodes).toHaveLength(tData.length + 1);
        for (var tIdx = 0; tIdx < tColNodes.length; tIdx++) {
            if (tIdx !== 0) {
                const tColNode = tColNodes.at(tIdx);
                expect(tColNode.text()).toContain(tData[tIdx - 1].highT);
                expect(tColNode.text()).toContain(tData[tIdx - 1].lowT);
            }
        }

        const rainRowNode = weekRowNodes.at(3);
        const rainColNodes = rainRowNode.find('div.WeekCol');
        const rainData = weekRowDataList[3];
        expect(rainColNodes).toHaveLength(rainData.length + 1);
        for (var rainIdx = 0; rainIdx < rainColNodes.length; rainIdx++) {
            if (rainIdx !== 0) {
                const rainColNode = rainColNodes.at(rainIdx);
                expect(rainColNode.text()).toEqual(rainData[rainIdx - 1]);
            }
        }
    });
});
