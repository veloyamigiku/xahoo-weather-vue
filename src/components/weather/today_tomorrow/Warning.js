import classes from './Warning.module.css';

const Warning = function(props) {

    var warnItemList = [];
    props.data.item.forEach((item, i) => {
        var warnBodyList = [];
        item.body.forEach((body, j) => {
            warnBodyList.push(
                <div className={classes.WarnBody} key={j}>{body}</div>
            )
        })
        warnItemList.push(
            <div className={classes.WarnItem} key={i}>
                <div className={classes.WarnType}>{item.type}</div>
                {warnBodyList}
            </div>
        )
    });
    return (
        <div className={classes.Warning}>
            <div className={classes.WarningTitle}><a href="http://localhost:3000">{props.data.title}</a></div>
            {warnItemList}
        </div>
    );
}

export default Warning;
