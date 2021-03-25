import PinPointWeatherTable from './PinPointWeatherTable';
import PinPointWeatherTitle from './PinPointWeatherTitle';
import PinPointWeahterWarning from './PinPointWeatherWarning';

const PinPointWeatherBody = function(props) {
    return (
        <div>
            <PinPointWeatherTitle data={props.data.titleData} />
            <PinPointWeatherTable data={props.data.bodyData} />
            <PinPointWeahterWarning data={props.data.warningData} />
        </div>
    );
}

export default PinPointWeatherBody;
