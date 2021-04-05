import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import WeatherTitle from '../common/WeatherTitle';
import Pollen from './Pollen';
import PollenBody from './PollenBody';
import level2 from './img/level2.png';
import level3 from './img/level3.png';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('Pollenコンポーネント', () => {
    it('プロップスのテスト', () => {
        const pollenData = {
            titleData: {
                subject: '福岡県の花粉情報',
                year: 2021,
                month: 3,
                day: 4,
                hour: 18,
                min: 0,
                postfix: '発表'
            },
            bodyData: {
                todayTomorrowData: [
                    {
                        date: '3/5(金)',
                        quantityImg: level2,
                        quantity: 'やや多い'
                    },
                    {
                        date: '3/6(土)',
                        quantityImg: level3,
                        quantity: '多い'
                    }
                ],
                descData: {
                    title: '花粉の詳しい情報を確認',
                    url: 'http://localhost:8080'
                }
            }
        };
        const wrapper = shallow(<Pollen data={pollenData} />);

        const weatherTitleNode = wrapper.find(WeatherTitle);
        expect(weatherTitleNode).toHaveLength(1);
        expect(weatherTitleNode.at(0).prop('data')).toEqual(pollenData.titleData);

        const pollenBodyNode = wrapper.find(PollenBody);
        expect(pollenBodyNode).toHaveLength(1);
        expect(pollenBodyNode.at(0).prop('data')).toEqual(pollenData.bodyData);

    });
});
