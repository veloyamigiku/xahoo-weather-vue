import SideMenu from "./SideMenu";

let SideMenuWrap = function(props) {

    var items = [];
    var title = "";
    let id = props.type + "SideMenu";
    switch (props.type) {
        case "disaster":
            title = "防災情報";
            items = [
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
            break;
        case "weather":
            title = "天気ガイド";
            items = [
                {
                    'text': '天気予報',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '気象衛星',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '天気図',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': 'アメダス',
                    'url': 'http://localhost:3000'
                }
            ];
            break;
        case "leisure":
            title = "レジャー施設";
            items = [
                {
                    'text': '空港',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': 'ゴルフ場',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '釣り・潮汐',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': 'アメダス',
                    'url': 'http://localhost:3000'
                }
            ];
            break;
        default:
            title = "防災情報";
            items = [
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
            break;
    }
    
    return (
        <SideMenu id={id} title={title} items={items} />
    );

}

export default SideMenuWrap;
