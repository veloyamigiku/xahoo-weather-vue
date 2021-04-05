import OneDay from './one_day/OneDay';
import Warning from './warning/Warning';
import Pollen from './pollen/Pollen';

const WeatherRegion4 = function(props) {
    return (
        <div>
            <OneDay data={props.today} />
            <Warning data={props.warning} />
            <Pollen data={props.pollen} />
        </div>
    );
}

export default WeatherRegion4;
