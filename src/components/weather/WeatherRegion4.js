import OneDay from './one_day/OneDay';
import Warning from './warning/Warning';

const WeatherRegion4 = function(props) {
    return (
        <div>
            <OneDay data={props.today} />
            <Warning data={props.warning} />
        </div>
    );
}

export default WeatherRegion4;
