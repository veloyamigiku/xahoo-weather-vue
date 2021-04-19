import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { weatherRegionWrap2Data } from '../WeatherRegionWrap2Data';
import GeneralCondition from './GeneralCondition';
import GeneralConditionBody from './GeneralConditionBody';
import GeneralConditionTitle from './GeneralConditionTitle';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('GeneralConditionコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap2Data.generalCondition;
        const wrapper = shallow(
            <GeneralCondition data={data} />
        );

        const generalConditionTitleNode = wrapper.find(GeneralConditionTitle);
        expect(generalConditionTitleNode).toHaveLength(1);
        expect(generalConditionTitleNode.at(0).props().data).toEqual(data.title);

        const generalConditionBodyNode = wrapper.find(GeneralConditionBody);
        expect(generalConditionBodyNode).toHaveLength(1);
        expect(generalConditionBodyNode.at(0).props().data).toEqual(data.body);
    });
});
