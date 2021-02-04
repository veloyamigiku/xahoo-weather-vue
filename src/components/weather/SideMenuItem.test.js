import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SideMenuItem from './SideMenuItem';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe("SideMenuItemコンポーネント", () => {

    it("プロップスのテスト", () => {

        let href = "http://localhost:3000";
        let text = "警報・注意報";
        let width = "50%";

        let wrapper = shallow(<SideMenuItem href={href} text={text} width={width} />);
        
        let divNode = wrapper.find('div');
        expect(divNode.prop('style').width).toBe(width);

        let linkNode = wrapper.find('div a');
        expect(linkNode).toHaveLength(1);
        expect(linkNode.prop('href')).toBe(href);
        expect(linkNode.text()).toBe(text);
        
    });

});
