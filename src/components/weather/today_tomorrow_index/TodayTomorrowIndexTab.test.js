import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { getDayOfWeekStr } from '../../../utils/weather/common/Date';
import TodayTomorrowIndexTab from './TodayTomorrowIndexTab';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowIndexTabコンポーネント', () => {
    
    const data = weatherRegionWrap3Data.todayTomorrowIndex.body;

    it('イベントのテスト', () => {
        const onClickTabMock = jest.fn();
        const activeIdx = 0;
        const wrapper = shallow(<TodayTomorrowIndexTab data={data} activeIdx={activeIdx} onClickTab={onClickTabMock} />);

        const todayTomorrowIndexTabNotSelectedNode = wrapper.find('div.TodayTomorrowIndexTabNotSelected');
        todayTomorrowIndexTabNotSelectedNode.at(0).simulate('click');
        expect(onClickTabMock.mock.calls).toHaveLength(1);
        expect(onClickTabMock.mock.calls[0][0]).toEqual(1);
    });

    it('プロップスのテスト', () => {
        const activeIdx = 0;
        const wrapper = shallow(<TodayTomorrowIndexTab activeIdx={activeIdx} data={data} />);

        const todayTomorrowIndexTabSelectedNode = wrapper.find('div.TodayTomorrowIndexTabSelected');
        expect(todayTomorrowIndexTabSelectedNode).toHaveLength(1);
        expect(todayTomorrowIndexTabSelectedNode.at(0).text()).toContain(data[activeIdx].month + '月');
        expect(todayTomorrowIndexTabSelectedNode.at(0).text()).toContain(data[activeIdx].day + '日');
        const dayOfWeekdStrSelected = getDayOfWeekStr(
            data[activeIdx].year,
            data[activeIdx].month,
            data[activeIdx].day);
        expect(todayTomorrowIndexTabSelectedNode.at(0).text()).toContain('（' + dayOfWeekdStrSelected + '）');

        const todayTomorrowIndexTabNotSelectedNode = wrapper.find('div.TodayTomorrowIndexTabNotSelected');
        expect(todayTomorrowIndexTabNotSelectedNode).toHaveLength(data.length - 1);
        for (var idx = 0; idx < todayTomorrowIndexTabNotSelectedNode.length; idx++) {
            expect(todayTomorrowIndexTabNotSelectedNode.at(idx).text()).toContain(data[idx + 1].month + '月');
            expect(todayTomorrowIndexTabNotSelectedNode.at(idx).text()).toContain(data[idx + 1].day + '日');
            const dayOfWeekdStr = getDayOfWeekStr(
                data[idx + 1].year,
                data[idx + 1].month,
                data[idx + 1].day);
                expect(todayTomorrowIndexTabNotSelectedNode.at(idx).text()).toContain('（' + dayOfWeekdStr + '）');
        }
    });
});
