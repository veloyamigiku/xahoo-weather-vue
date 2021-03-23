import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import TodayTomorrowIndexBody from './TodayTomorrowIndexBody';
import all_cold from './img/all_cold.png';
import all_drying from './img/all_drying.png';
import all_overlap_wear from './img/all_overlap_wear.png';
import all_rain from './img/all_rain.png';
import all_uv_ray from './img/all_uv_ray.png';
import all_wash from './img/all_wash.png';
import half_cold from './img/half_cold.png';
import half_drying from './img/half_drying.png';
import half_overlap_wear from './img/half_overlap_wear.png';
import half_rain from './img/half_rain.png';
import half_uv_ray from './img/half_uv_ray.png';
import half_wash from './img/half_wash.png';
import no_cold from './img/no_cold.png';
import no_drying from './img/no_drying.png';
import no_overlap_wear from './img/no_overlap_wear.png';
import no_rain from './img/no_rain.png';
import no_uv_ray from './img/no_uv_ray.png';
import no_wash from './img/no_wash.png';
import { fromIndexLevelToAllHalfNoCount } from '../../../../utils/main/weather/today_tomorrow_index/TodayTomorrowIndexBody.js';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowIndexBodyコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = [
            {
                year: 2021,
                month: 3,
                day: 11,
                index: [
                    {
                        name: '洗濯',
                        level: 4,
                        desc: 'バスタオルも乾きます',
                        all_img: all_wash,
                        half_img: half_wash,
                        no_img: no_wash
                    },
                    {
                        name: '傘',
                        level: 0,
                        desc: '傘はいりません',
                        all_img: all_rain,
                        half_img: half_rain,
                        no_img: no_rain
                    },
                    {
                        name: '紫外線',
                        level: 2,
                        desc: '日焼け止めを利用しよう',
                        all_img: all_uv_ray,
                        half_img: half_uv_ray,
                        no_img: no_uv_ray
                    },
                    {
                        name: '重ね着',
                        level: 5,
                        desc: '最大級の防寒対策を',
                        all_img: all_overlap_wear,
                        half_img: half_overlap_wear,
                        no_img: no_overlap_wear
                    },
                    {
                        name: '乾燥',
                        level: 3.5,
                        desc: '乾燥しやすい人は対策を',
                        all_img: all_drying,
                        half_img: half_drying,
                        no_img: no_drying
                    },
                    {
                        name: '風邪注意',
                        level: 2.5,
                        desc: '危険度中。睡眠はしっかり',
                        all_img: all_cold,
                        half_img: half_cold,
                        no_img: no_cold
                    }
                ],
            },
            {
                year: 2021,
                month: 3,
                day: 12,
                index: [
                    {
                        name: '洗濯',
                        level: 2,
                        desc: '外干しできる時間帯もあります',
                        all_img: all_wash,
                        half_img: half_wash,
                        no_img: no_wash
                    },
                    {
                        name: '傘',
                        level: 4,
                        desc: '傘が必要です',
                        all_img: all_rain,
                        half_img: half_rain,
                        no_img: no_rain
                    },
                    {
                        name: '紫外線',
                        level: 1.5,
                        desc: '日焼け止めを利用しよう',
                        all_img: all_uv_ray,
                        half_img: half_uv_ray,
                        no_img: no_uv_ray
                    },
                    {
                        name: '重ね着',
                        level: 4.5,
                        desc: '厚手のコードやダウンで寒さ対策を',
                        all_img: all_overlap_wear,
                        half_img: half_overlap_wear,
                        no_img: no_overlap_wear
                    },
                    {
                        name: '乾燥',
                        level: 3,
                        desc: 'リップやクリームを持ち歩こう',
                        all_img: all_drying,
                        half_img: half_drying,
                        no_img: no_drying
                    },
                    {
                        name: '風邪注意',
                        level: 4,
                        desc: '加湿を心がけた方が良さそう',
                        all_img: all_cold,
                        half_img: half_cold,
                        no_img: no_cold
                    }
                ]
            }
        ];
        const activeIdx = 0;
        const wrapper = shallow(<TodayTomorrowIndexBody data={data} activeIdx={activeIdx} />);

        const todayTomorrowIndexBodyNodes = wrapper.find('div.TodayTomorrowIndexBody');
        expect(todayTomorrowIndexBodyNodes).toHaveLength(data.length);
        for (var i = 0; i < data.length; i++) {
            const todayTomorrowIndexBodyNode = todayTomorrowIndexBodyNodes.at(i);
            const todayTomorrowIndexNameNode = todayTomorrowIndexBodyNode.find('div.TodayTomorrowIndexName');
            const todayTomorrowIndexLevelNode = todayTomorrowIndexBodyNode.find('div.TodayTomorrowIndexLevel');
            const todayTomorrowIndexDescNode = todayTomorrowIndexBodyNode.find('div.TodayTomorrowIndexDesc');
            expect(todayTomorrowIndexNameNode).toHaveLength(data[i].index.length);
            expect(todayTomorrowIndexLevelNode).toHaveLength(data[i].index.length);
            expect(todayTomorrowIndexDescNode).toHaveLength(data[i].index.length);
            for (var j = 0; j < data[i].index.length; j++) {
                expect(todayTomorrowIndexNameNode.at(j).text()).toEqual(data[i].index[j].name);
                const allHalfNoCount = fromIndexLevelToAllHalfNoCount(data[i].index[j].level);
                const todayTomorrowIndexAllImgNode = todayTomorrowIndexLevelNode.at(j).find('img[alt="all"]');
                expect(todayTomorrowIndexAllImgNode).toHaveLength(allHalfNoCount.allCount);
                const todayTomorrowIndexHalfImgNode = todayTomorrowIndexLevelNode.at(j).find('img[alt="half"]');
                expect(todayTomorrowIndexHalfImgNode).toHaveLength(allHalfNoCount.halfCount);
                const todayTomorrowIndexNoImgNode = todayTomorrowIndexLevelNode.at(j).find('img[alt="no"]');
                expect(todayTomorrowIndexNoImgNode).toHaveLength(allHalfNoCount.noCount);
                expect(todayTomorrowIndexDescNode.at(j).text()).toEqual(data[i].index[j].desc);
            }
        }
    });
});
