import { useState } from "react"
import WeatherTopTitle from "../common/WeatherTopTitle"
import DayTab from "../day_tab/DayTab"
import WeatherMapBody from "./WeatherMapBody";

const WeatherMap = function(props) {
    
    function clickTab(clickTabIdx) {
        setActiveTabIdx(clickTabIdx);
    }

    const [activeTabIdx, setActiveTabIdx] = useState(0);
    
    return (
        <div>
            <WeatherTopTitle data={props.data.title} />
            <DayTab data={props.data.dayTab} activeTabIdx={activeTabIdx} clickTab={clickTab} />
            <WeatherMapBody data={props.data.body[activeTabIdx]} />
        </div>
    )
}

export default WeatherMap;
