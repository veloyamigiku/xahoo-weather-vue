import classes from './PinPointBody.module.css';

const PinPointBody = function(props) {

    var pinPointBodyItemList = [];
    props.data.forEach(function (item, itemIdx) {
        pinPointBodyItemList.push(
            <div className={classes.PinPointBodyItem} key={itemIdx}>
                <div>・</div>
                <div><a href="http://localhost:3000">{item}</a></div>
            </div>
        );
    });

    return (
        <div className={classes.PinPointBody}>
            {pinPointBodyItemList}
        </div>
    );
}

export default PinPointBody;
