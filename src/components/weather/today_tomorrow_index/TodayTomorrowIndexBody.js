import classes from './TodayTomorrowIndexBody.module.css';
import { fromIndexLevelToAllHalfNoCount } from "../../../utils/weather/today_tomorrow_index/TodayTomorrowIndexBody";

const TodayTomorrowIndexBody = function(props) {

    var todayTomorrowIndexBodyList = [];
    props.data.forEach(function (body, bodyIdx) {
        var todayTomorrowIndexRowList = [];
        body.index.forEach(function (row, rowIdx) {
            const allHalfNoCount = fromIndexLevelToAllHalfNoCount(row.level);
            var imgList = [];
            for (var allIdx = 0; allIdx < allHalfNoCount.allCount; allIdx++) {
                imgList.push(
                    <img alt="all" src={row.all_img} key={'TodayTomorrwoIndexAllImg' + allIdx} />
                );
            }
            for (var halfIdx = 0; halfIdx < allHalfNoCount.halfCount; halfIdx++) {
                imgList.push(
                    <img alt="half" src={row.half_img} key={'TodyaTomorrowIndexHalfImg' + halfIdx} />
                );
            }
            for (var noIdx = 0; noIdx < allHalfNoCount.noCount; noIdx++) {
                imgList.push(
                    <img alt="no" src={row.no_img} key={'TodayTomorrowIndexNoImg' + noIdx} />
                );
            }
            todayTomorrowIndexRowList.push(
                <div className={classes.TodayTomorrowIndexRow} key={'TodayTomorrowIndexRow' + rowIdx}>
                    <div className={classes.TodayTomorrowIndexName}>{row.name}</div>
                    <div className={classes.TodayTomorrowIndexLevel}>
                        {imgList}
                    </div>
                    <div className={classes.TodayTomorrowIndexDesc}>{row.desc}</div>
                </div>
            );
        });
        todayTomorrowIndexBodyList.push(
            <div className="TodayTomorrowIndexBody" key={'TodayTomorrowIndexBody' + bodyIdx} style={{display: props.activeIdx === bodyIdx ? 'block' : 'none'}}>
                {todayTomorrowIndexRowList}
            </div>
        );
    });

    return (
        <div>
            {todayTomorrowIndexBodyList}
        </div>
    );
}

export default TodayTomorrowIndexBody;
