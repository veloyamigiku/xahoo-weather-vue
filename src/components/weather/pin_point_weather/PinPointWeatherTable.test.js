import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { fromBodyDataToTableData } from '../../../utils/weather/pin_point_weather/PinPointWeatherTable';
import { pinPointWeatherData } from '../WeatherRegionWrap4Data';
import PinPointWeatherTable from './PinPointWeatherTable';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('PinPointWeatherTableコンポーネント', () => {
    it('プロップスのテスト', () => {
        const wrapper = shallow(
            <PinPointWeatherTable data={pinPointWeatherData.bodyData} />
        );

        const tableData = fromBodyDataToTableData(pinPointWeatherData.bodyData);
        const pinPointWeatherTableRowNode = wrapper.find('div.PinPointWeatherTableRow');
        expect(pinPointWeatherTableRowNode).toHaveLength(6);

        const pinPointWeatherTableTimeRow = pinPointWeatherTableRowNode.at(0);
        const pinPointWeatherTableTimeCol = pinPointWeatherTableTimeRow.find('div.PinPointWeatherTableCol');
        expect(pinPointWeatherTableTimeCol).toHaveLength(tableData.timeList.length + 1);
        for (var i = 1; i < pinPointWeatherTableTimeCol.length; i++) {
            expect(pinPointWeatherTableTimeCol.at(i).text()).toContain(String(tableData.timeList[i - 1]));
        }

        const pinPointWeatherTableWeatherRow = pinPointWeatherTableRowNode.at(1);
        const pinPointWeatherTableWeatherCol = pinPointWeatherTableWeatherRow.find('div.PinPointWeatherTableCol');
        expect(pinPointWeatherTableWeatherCol).toHaveLength(tableData.weatherList.length + 1);
        for (var i = 1; i < pinPointWeatherTableWeatherCol.length; i++) {
            expect(pinPointWeatherTableWeatherCol.at(i).text()).toContain(tableData.weatherList[i - 1].weather);
            const pinPointWeatherTableWeatherImg = pinPointWeatherTableWeatherCol.at(i).find('img');
            expect(pinPointWeatherTableWeatherImg).toHaveLength(1);
            expect(pinPointWeatherTableWeatherImg.props().src).toEqual(tableData.weatherList[i - 1].weatherImg);
        }

        const pinPointWeatherTableTRow = pinPointWeatherTableRowNode.at(2);
        const pinPointWeatherTableTCol = pinPointWeatherTableTRow.find('div.PinPointWeatherTableCol');
        expect(pinPointWeatherTableTCol).toHaveLength(tableData.tList.length + 1);
        for (var i = 1; i < pinPointWeatherTableTCol.length; i++) {
            expect(pinPointWeatherTableTCol.at(i).text()).toEqual(String(tableData.tList[i - 1]));
        }

        const pinPointWeatherTableRhRow = pinPointWeatherTableRowNode.at(3);
        const pinPointWeatherTableRhCol = pinPointWeatherTableRhRow.find('div.PinPointWeatherTableCol');
        expect(pinPointWeatherTableRhCol).toHaveLength(tableData.rhList.length + 1);
        for (var i = 1; i < pinPointWeatherTableRhCol.length; i++) {
            expect(pinPointWeatherTableRhCol.at(i).text()).toEqual(String(tableData.rhList[i - 1]));
        }

        const pinPointWeatherTableRainFallRow = pinPointWeatherTableRowNode.at(4);
        const pinPointWeatherTableRainFallCol = pinPointWeatherTableRainFallRow.find('div.PinPointWeatherTableCol');
        expect(pinPointWeatherTableRainFallCol).toHaveLength(tableData.rainFallList.length + 1);
        for (var i = 1; i < pinPointWeatherTableRainFallCol.length; i++) {
            expect(pinPointWeatherTableRainFallCol.at(i).text()).toEqual(String(tableData.rainFallList[i - 1]));
        }

        const pinPointWeatherTableWindRow = pinPointWeatherTableRowNode.at(5);
        const pinPointWeatherTableWindCol = pinPointWeatherTableWindRow.find('div.PinPointWeatherTableCol');
        expect(pinPointWeatherTableWindCol).toHaveLength(tableData.windList.length + 1);
        for (var i = 1; i < pinPointWeatherTableWindCol.length; i++) {
            expect(pinPointWeatherTableWindCol.at(i).text()).toContain(tableData.windList[i - 1].windDirection);
            expect(pinPointWeatherTableWindCol.at(i).text()).toContain(tableData.windList[i - 1].windSpeed);
        }
        
    })
})