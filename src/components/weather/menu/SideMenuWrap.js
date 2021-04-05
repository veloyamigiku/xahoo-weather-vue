import SideMenu from "./SideMenu";

let SideMenuWrap = function(props) {

    var items = [];
    var title = "";
    var typeColor = "";
    var typeBorderColor = "";
    let id = props.type + "SideMenu";
    switch (props.type) {
        case "disaster":
            title = "防災情報";
            typeColor = "#eee7e0";
            typeBorderColor = "#c3b3a4";
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
                },
                {
                    'text': '河川水位',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '火山',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '地震',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '津波',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '避難情報',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '避難場所マップ',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '緊急・被害状況',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '災害カレンダー',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '防災手帳',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '防災速報',
                    'url': 'http://localhost:3000'
                }
            ];
            break;
        case "weather":
            title = "天気ガイド";
            typeColor = "#e5eaf7";
            typeBorderColor = "#bbc7e3";
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
                },
                {
                    'text': '雨雲の動き',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '雨雲レーダー',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '週間天気',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '長期予報',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '波予測',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '風予測',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '潮汐情報',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '雷レーダー',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '世界の天気',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '花粉情報',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '雨雪レーダー',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '過去の天気',
                    'url': 'http://localhost:3000'
                }
            ];
            break;
        case "leisure":
            title = "レジャー施設";
            typeColor = "#e5eaf7";
            typeBorderColor = "#bbc7e3";
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
                    'text': 'キャンプ場',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': 'マリン',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '野球場',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': 'テーマパーク',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '競馬場',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': 'サッカー場・競技場',
                    'url': 'http://localhost:3000'
                }
            ];
            break;
        default:
            title = "防災情報";
            typeColor = "#eee7e0";
            typeBorderColor = "#c3b3a4";
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
                },
                {
                    'text': '河川水位',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '火山',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '地震',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '津波',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '避難情報',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '避難場所マップ',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '緊急・被害状況',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '災害カレンダー',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '防災手帳',
                    'url': 'http://localhost:3000'
                },
                {
                    'text': '防災速報',
                    'url': 'http://localhost:3000'
                }
            ];
            break;
    }
    
    return (
        <SideMenu id={id} title={title} typeColor={typeColor} typeBorderColor={typeBorderColor} items={items} />
    );

}

export default SideMenuWrap;
