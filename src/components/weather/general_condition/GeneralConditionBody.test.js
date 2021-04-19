import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { weatherRegionWrap2Data } from '../WeatherRegionWrap2Data';
import GeneralConditionBody from './GeneralConditionBody';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('GeneralConditionBodyコンポーネント', () => {
    it('プロップスのテスト', () => {
        const data = weatherRegionWrap2Data.generalCondition.body;
        const wrapper = shallow(
            <GeneralConditionBody data={data} />
        );

        const generalConditionBodyContentNode = wrapper.find('div.GeneralConditionBodyContent');
        expect(generalConditionBodyContentNode).toHaveLength(1);
        expect(generalConditionBodyContentNode.at(0).html()).toContain(data.content);
    });
});
