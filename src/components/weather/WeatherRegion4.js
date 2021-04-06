import OneDay from './one_day/OneDay';
import Warning from './warning/Warning';
import Pollen from './pollen/Pollen';
import Week from './week/Week';

const WeatherRegion4 = function(props) {
    return (
        <div>
            <OneDay data={props.today} />
            <Warning data={props.warning} />
            <Pollen data={props.pollen} />
            <OneDay data={props.tomorrow} />
            <Week data={props.week} />
        </div>
    );
}

export default WeatherRegion4;
