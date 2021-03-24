import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import WeatherRegionWrap3 from './components/weather/main/WeatherRegionWrap3';
import WeatherRegionWrap4 from './components/weather/main/WeatherRegionWrap4';
import Contents from './Contents';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Contentsコンポーネント', () => {
    it('ルーティングのテスト_' + WeatherRegionWrap3.name, () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/WeatherRegionWrap3']}>
                <Contents />
            </MemoryRouter>
        );
        const weatherRegionWrap3 = wrapper.find(WeatherRegionWrap3);
        expect(weatherRegionWrap3).toHaveLength(1);
    });
    it('ルーティングのテスト_' + WeatherRegionWrap4.name, () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/WeatherRegionWrap4']}>
                <Contents />
            </MemoryRouter>
        );
        const weatherRegionWrap4 = wrapper.find(WeatherRegionWrap4);
        expect(weatherRegionWrap4).toHaveLength(1);
    });
});
