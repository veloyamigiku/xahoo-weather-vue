import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { pinPointWeatherData } from '../WeatherRegionWrap4Data';
import PinPointWeatherBody from './PinPointWeatherBody';
import PinPointWeatherTitle from './PinPointWeatherTitle';
import PinPointWeatherTable from './PinPointWeatherTable';
import PinPointWeatherWarning from './PinPointWeatherWarning';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('PinPointWeatherBodyコンポーネント', () => {
    it('プロップスのテスト', () => {
        const wrapper = shallow(
            <PinPointWeatherBody data={pinPointWeatherData} />
        );

        const pinPointWeatherTitleNode = wrapper.find(PinPointWeatherTitle);
        expect(pinPointWeatherTitleNode).toHaveLength(1);
        expect(pinPointWeatherTitleNode.at(0).props().data).toEqual(pinPointWeatherData.titleData);

        const pinPointWeatherTableNode = wrapper.find(PinPointWeatherTable);
        expect(pinPointWeatherTableNode).toHaveLength(1);
        expect(pinPointWeatherTableNode.at(0).props().data).toEqual(pinPointWeatherData.bodyData);

        const pinPointWeatherWarningNode = wrapper.find(PinPointWeatherWarning);
        expect(pinPointWeatherWarningNode).toHaveLength(1);
        expect(pinPointWeatherWarningNode.at(0).props().data).toEqual(pinPointWeatherData.warningData);
    })
})