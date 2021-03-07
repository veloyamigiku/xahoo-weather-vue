import classes from './Option.module.css';

const Option = function(props) {

    var optionItemList = [];
    props.data.forEach((d, idx) => {
        optionItemList.push(
            <div className={classes.OptionItem} key={idx}>
                <div className={classes.OptionItemName}>{d.name}</div>
                <div className={classes.OptionItemDivider}>:</div>
                <div className={classes.OptionItemValue}>{d.value}</div>
            </div>
        )
    });
    return (
        <div className={classes.Option}>
            {optionItemList}
        </div>
    );
}

export default Option;
