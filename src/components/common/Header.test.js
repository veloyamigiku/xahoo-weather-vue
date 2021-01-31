import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Header from './Header';
import logo from '../weather/logo.png';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Headerコンポーネント', () => {

    let alt = "XahoojapanWeather";

    it('プロップスのテスト', () => {
        const wrapper = shallow(<Header logo={logo} headerLogoAlt={alt} />);
        let img = wrapper.find('#headerLogo');
        expect(img.length).toBe(1);
        expect(img.prop('src')).toBe(logo)
        expect(img.prop('alt')).toBe(alt);
    });

});
