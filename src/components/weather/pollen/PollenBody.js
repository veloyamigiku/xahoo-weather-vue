import classes from './PollenBody.module.css';

const PollenBody = function(props) {

    var bodyOneDayList = [];
    props.data.todayTomorrow.forEach((oneDayData, idx) => {
        bodyOneDayList.push(
            <div className={classes.BodyOneDay} key={idx}>
                <div className={classes.BodyDate}>{oneDayData.date}</div>
                <div className={classes.BodyQuantityImg}><img src={oneDayData.quantityImg} alt={oneDayData.quantity}/></div>
                <div className={classes.BodyQuantity}>{oneDayData.quantity}</div>
            </div>
        )
    });
    return (
        <div className={classes.PollenBody}>
            <div className={classes.BodyTodayTomorrow}>
                {bodyOneDayList}
            </div>
            <div className={classes.DescButton}><a href={props.data.desc.url}>{props.data.desc.title}</a></div>
        </div>
    );
}

export default PollenBody;
