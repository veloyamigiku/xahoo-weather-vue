import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import WeatherRegionWrap1 from './components/weather/WeatherRegionWrap1';
import WeatherRegionWrap2 from './components/weather/WeatherRegionWrap2';
import WeatherRegionWrap3 from './components/weather/WeatherRegionWrap3';
import WeatherRegionWrap4 from './components/weather/WeatherRegionWrap4';
import Contents from './Contents';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Contentsコンポーネント', () => {
    it('ルーティングのテスト_' + WeatherRegionWrap1.name, () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/WeatherRegionWrap1']}>
                <Contents />
            </MemoryRouter>
        );
        const weatherRegionWrap1 = wrapper.find(WeatherRegionWrap1);
        expect(weatherRegionWrap1).toHaveLength(1);
    });
    it('ルーティングのテスト_' + WeatherRegionWrap2.name, () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/WeatherRegionWrap2']}>
                <Contents />
            </MemoryRouter>
        );
        const weatherRegionWrap2 = wrapper.find(WeatherRegionWrap2);
        expect(weatherRegionWrap2).toHaveLength(1);
    });
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
