import classes from './GeneralConditionTitle.module.css';

const GeneralConditionTitle = function(props) {
    return (
        <div className={classes.GeneralConditionTitle}>
            <div className={classes.GeneralConditionTitleSubject}>{props.data.subject}</div>
        </div>
    );
}

export default GeneralConditionTitle;
