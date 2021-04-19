import classes from './GeneralConditionBody.module.css';

const GeneralConditionBody = function(props) {
    return (
        <div className={classes.GeneralConditionBody}>
            <div className={classes.GeneralConditionBodyContent} dangerouslySetInnerHTML={{__html: props.data.content}} />
        </div>
    );
}

export default GeneralConditionBody;
