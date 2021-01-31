import Enzyme from "enzyme";
import { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Footer from "./Footer";

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Footerコンポーネント', () => {

    it('プロップスのテスト', () => {

        let linkItems = [
            {
                'id': 'footerLinkPrivacy',
                'text': 'プライバシー',
                'url': 'http://localhost:3000'
            },
            {
                'id': 'footerLinkTerms',
                'text': '利用規約',
                'url': 'http://localhost:3000'
            }
        ];

        let copyrights = [
            {
                'id': 'copyright0',
                'text': 'Copyright (C) 2021 Weather Map Co., Ltd. All Rights Reserved.'
            },
            {
                'id': 'copyright1',
                'text': 'Copyright (C) 2021 Yahoo Japan Corporation. All Rights Reserved.'
            }
        ];

        let wrapper = shallow(<Footer linkItems={linkItems} copyrights={copyrights} />);
        
        linkItems.forEach(function(linkItem, _) {
            let linkItemNode = wrapper.find("#" + linkItem.id);
            expect(linkItemNode).toHaveLength(1);
            expect(linkItemNode.text()).toBe(linkItem.text);
            expect(linkItemNode.prop('href')).toBe(linkItem.url);
        });

        copyrights.forEach(function(copyright, _) {
            let copyrightNode = wrapper.find("#" + copyright.id);
            expect(copyrightNode).toHaveLength(1);
            expect(copyrightNode.text()).toBe(copyright.text)
        });

    });

});
