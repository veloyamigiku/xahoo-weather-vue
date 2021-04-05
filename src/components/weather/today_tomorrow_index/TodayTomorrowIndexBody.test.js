import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import TodayTomorrowIndexBody from './TodayTomorrowIndexBody';
import { fromIndexLevelToAllHalfNoCount } from '../../../utils/weather/today_tomorrow_index/TodayTomorrowIndexBody.js';
import { weatherRegionWrap3Data } from '../WeatherRegionWrap3Data';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('TodayTomorrowIndexBodyコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap3Data.todayTomorrowIndex.body;
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
