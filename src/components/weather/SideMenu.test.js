import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SideMenu from './SideMenu';
import SideMenuTitle from './SideMenuTitle';
import SideMenuItemRow from './SideMenuItemRow';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('SideMenuコンポーネント', () => {

    it('プロップスのテスト', () => {
        let id = "disasterSideMenu";
        let title = "防災情報";
        let titleBgcolor = "#eee7e0";
        let items = [
            {
                'text': '警報・注意報',
                'url': 'http://localhost:3000'
            },
            {
                'text': '台風',
                'url': 'http://localhost:3000'
            },
            {
                'text': '土砂災害マップ',
                'url': 'http://localhost:3000'
            },
            {
                'text': '洪水マップ',
                'url': 'http://localhost:3000'
            }
        ];

        let wrapper = shallow(<SideMenu id={id} title={title} titleBgcolor={titleBgcolor} items={items} />);

        let sideMenuNode = wrapper.find('div#' + id);
        expect(sideMenuNode).toHaveLength(1);
        
        let sideMenuTitleNode = sideMenuNode.find(SideMenuTitle);
        expect(sideMenuTitleNode).toHaveLength(1);

        let sideMenuItemRows = sideMenuNode.find(SideMenuItemRow);
        expect(sideMenuItemRows).toHaveLength(2);
       
    });

});
