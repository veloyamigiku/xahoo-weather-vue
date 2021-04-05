import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { fromBodyDataToTableData } from '../../../utils/weather/one_day/OneDayTable';
import { weatherRegionWrap4Data } from '../WeatherRegionWrap4Data';
import OneDayTable from './OneDayTable';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('oneDayTableコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap4Data.today.body
        const wrapper = shallow(
            <OneDayTable data={data} />
        );

        const tableData = fromBodyDataToTableData(data);
        const oneDayTableRowNode = wrapper.find('div.OneDayTableRow');
        expect(oneDayTableRowNode).toHaveLength(6);

        const oneDayTableTimeRow = oneDayTableRowNode.at(0);
        const oneDayTableTimeCol = oneDayTableTimeRow.find('div.OneDayTableCol');
        expect(oneDayTableTimeCol).toHaveLength(tableData.timeList.length + 1);
        for (var i = 1; i < oneDayTableTimeCol.length; i++) {
            expect(oneDayTableTimeCol.at(i).text()).toContain(String(tableData.timeList[i - 1]));
        }

        const oneDayTableWeatherRow = oneDayTableRowNode.at(1);
        const oneDayTableWeatherCol = oneDayTableWeatherRow.find('div.OneDayTableCol');
        expect(oneDayTableWeatherCol).toHaveLength(tableData.weatherList.length + 1);
        for (var i = 1; i < oneDayTableWeatherCol.length; i++) {
            expect(oneDayTableWeatherCol.at(i).text()).toContain(tableData.weatherList[i - 1].weather);
            const oneDayTableWeatherImg = oneDayTableWeatherCol.at(i).find('img');
            expect(oneDayTableWeatherImg).toHaveLength(1);
            expect(oneDayTableWeatherImg.props().src).toEqual(tableData.weatherList[i - 1].weatherImg);
        }

        const oneDayTableTRow = oneDayTableRowNode.at(2);
        const oneDayTableTCol = oneDayTableTRow.find('div.OneDayTableCol');
        expect(oneDayTableTCol).toHaveLength(tableData.tList.length + 1);
        for (var i = 1; i < oneDayTableTCol.length; i++) {
            expect(oneDayTableTCol.at(i).text()).toEqual(String(tableData.tList[i - 1]));
        }

        const oneDayTableRhRow = oneDayTableRowNode.at(3);
        const oneDayTableRhCol = oneDayTableRhRow.find('div.OneDayTableCol');
        expect(oneDayTableRhCol).toHaveLength(tableData.rhList.length + 1);
        for (var i = 1; i < oneDayTableRhCol.length; i++) {
            expect(oneDayTableRhCol.at(i).text()).toEqual(String(tableData.rhList[i - 1]));
        }

        const oneDayTableRainFallRow = oneDayTableRowNode.at(4);
        const oneDayTableRainFallCol = oneDayTableRainFallRow.find('div.OneDayTableCol');
        expect(oneDayTableRainFallCol).toHaveLength(tableData.rainFallList.length + 1);
        for (var i = 1; i < oneDayTableRainFallCol.length; i++) {
            expect(oneDayTableRainFallCol.at(i).text()).toEqual(String(tableData.rainFallList[i - 1]));
        }

        const oneDayTableWindRow = oneDayTableRowNode.at(5);
        const oneDayTableWindCol = oneDayTableWindRow.find('div.OneDayTableCol');
        expect(oneDayTableWindCol).toHaveLength(tableData.windList.length + 1);
        for (var i = 1; i < oneDayTableWindCol.length; i++) {
            expect(oneDayTableWindCol.at(i).text()).toContain(tableData.windList[i - 1].windDirection);
            expect(oneDayTableWindCol.at(i).text()).toContain(tableData.windList[i - 1].windSpeed);
        }
        
    })
})