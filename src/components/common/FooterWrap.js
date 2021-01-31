import Footer from "./Footer";

let FooterWrap = function() {

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
            'text': 'Copyright (C) 2021 Xahoo Japan Corporation. All Rights Reserved.'
        }
    ];

    return (
        <Footer linkItems={linkItems} copyrights={copyrights} />
    )
}

export default FooterWrap;
