import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SideMenuTitle from './SideMenuTitle';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe("SideMenuTitleコンポーネント", () => {

    it("プロップスのテスト", () => {
        let text = "防災情報";

        let wrapper = shallow(<SideMenuTitle text={text} />)
        let titleNode = wrapper.find('div');
        expect(titleNode).toHaveLength(1);
        expect(titleNode.text()).toBe(text);

    });

});
