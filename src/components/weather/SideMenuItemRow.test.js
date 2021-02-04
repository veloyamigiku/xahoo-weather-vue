import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SideMenuItem from './SideMenuItem';
import SideMenuItemRow from './SideMenuItemRow';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe("SideMenuItemRowコンポーネント", () => {

    it("プロップスのテスト1", () => {

        let items = [
            {
                'text': '警報・注意報',
                'url': 'http://localhost:3000'
            },
            {
                'text': '台風',
                'url': 'http://localhost:3000'
            }
        ];
        let maxItemCount = 2;
        
        let wrapper = shallow(<SideMenuItemRow items={items} maxItemCount={maxItemCount} />);

        let sideMenuItemNodes = wrapper.find(SideMenuItem);
        expect(sideMenuItemNodes).toHaveLength(maxItemCount);
        
    });

    it("プロップスのテスト2", () => {

        let items = [
            {
                'text': '警報・注意報',
                'url': 'http://localhost:3000'
            }
        ];
        let maxItemCount = 2;
        
        let wrapper = shallow(<SideMenuItemRow items={items} maxItemCount={maxItemCount} />);

        let sideMenuItemNodes = wrapper.find(SideMenuItem);
        expect(sideMenuItemNodes).toHaveLength(maxItemCount);
        
    });

});

