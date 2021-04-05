import { useState } from "react"
import WeatherTitle from "../common/WeatherTitle"
import TodayTomorrowIndexBody from "./TodayTomorrowIndexBody"
import TodayTomorrowIndexTab from "./TodayTomorrowIndexTab"

const TodayTomorrowIndex = function(props) {

    const [activeIdx, setActiveIdx] = useState(0);

    function onClickTab (clickTabIdx) {
        setActiveIdx(clickTabIdx);
    }
    
    return (
        <div className="TodayTomorrowIndex">
            <WeatherTitle data={props.data.titleData} />
            <TodayTomorrowIndexTab data={props.data.bodyData} activeIdx={activeIdx} onClickTab={onClickTab} />
            <TodayTomorrowIndexBody data={props.data.bodyData} activeIdx={activeIdx} />
        </div>
    )
}

export default TodayTomorrowIndex;
