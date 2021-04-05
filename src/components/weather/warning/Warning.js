import classes from './Warning.module.css';

const Warning = function(props) {

    var warnItemList = [];
    props.data.item.forEach(function (item, itemIdx) {
        var warnBodyList = [];
        item.body.forEach(function (body, bodyIdx) {
            warnBodyList.push(
                <div className={classes.WarnBody} key={'WarnBody' + bodyIdx}>{body}</div>
            )
        })
        warnItemList.push(
            <div className={classes.WarnItem} key={'WarnItem' + itemIdx}>
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
