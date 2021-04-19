import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { weatherRegionWrap2Data } from '../WeatherRegionWrap2Data';
import GeneralConditionTitle from './GeneralConditionTitle';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('GeneralConditionTitleコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap2Data.generalCondition.title;
        const wrapper = shallow(
            <GeneralConditionTitle data={data} />
        );

        const generalConditionTitleSubjectNode = wrapper.find('div.GeneralConditionTitleSubject');
        expect(generalConditionTitleSubjectNode).toHaveLength(1)
        expect(generalConditionTitleSubjectNode.at(0).text()).toEqual(data.subject);

    })
});
