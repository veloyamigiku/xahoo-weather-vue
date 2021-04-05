import WeatherTitle from '../common/WeatherTitle';
import WeatherSubTitle from '../common/WeatherSubTitle';
import OneDayTable from './OneDayTable';

const OneDay = function(props) {
    return (
        <div>
            <WeatherTitle data={props.data.title} />
            <WeatherSubTitle data={props.data.subTitle} />
            <OneDayTable data={props.data.body} />
        </div>
    );
}

export default OneDay;
