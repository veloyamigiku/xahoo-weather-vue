import GeneralConditionBody from "./GeneralConditionBody";
import GeneralConditionTitle from "./GeneralConditionTitle";

const GeneralCondition = function(props) {
    return (
        <div>
            <GeneralConditionTitle data={props.data.title} />
            <GeneralConditionBody data={props.data.body} />
        </div>
    );
}

export default GeneralCondition;
