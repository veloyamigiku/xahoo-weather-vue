import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherTitle from '../common/WeatherTitle';
import TodayTomorrowIndex from './TodayTomorrowIndex';
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
import TodayTomorrowIndexTab from './TodayTomorrowIndexTab';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowIndexコンポーネント', () => {
    const data = {
        titleData: {
            subject: '今日明日の指数情報',
            year: 2021,
            month: 3,
            day: 11,
            hour: 6,
            min: 0,
            postfix: '発表'
        },
        bodyData: [
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
        ]
    };
    it('プロップスのテスト', () => {
        const wrapper = shallow(<TodayTomorrowIndex data={data} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).prop('data')).toEqual(data.titleData);

        const todayTomorrowIndexTab = wrapper.find(TodayTomorrowIndexTab);
        expect(todayTomorrowIndexTab).toHaveLength(1);
        expect(todayTomorrowIndexTab.at(0).prop('data')).toEqual(data.bodyData);

        const todayTomorrowIndexBody = wrapper.find(TodayTomorrowIndexBody);
        expect(todayTomorrowIndexBody).toHaveLength(1);
        expect(todayTomorrowIndexBody.at(0).prop('data')).toEqual(data.bodyData);
    });
});
