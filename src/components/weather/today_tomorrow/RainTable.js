import classes from './RainTable.module.css';

const RainTable = function(props) {

    var thList = [];
    var tdList = [];
    thList.push(<th key={0}>時間</th>);
    tdList.push(<td key={0}>降水</td>);
    props.data.forEach((rainDataItem, idx) => {
        thList.push(<th key={idx + 1}>{rainDataItem.startHour}-{rainDataItem.endHour}</th>);
        tdList.push(<td key={idx + 1}>{rainDataItem.rain}%</td>);
    });
    return (
        <table className={classes.RainTable}>
            <thead>
                <tr>{thList}</tr>
            </thead>
            <tbody>
                <tr>{tdList}</tr>
            </tbody>
        </table>
    );
}

export default RainTable;
