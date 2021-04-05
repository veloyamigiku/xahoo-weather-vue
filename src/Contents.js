import { Route, Switch } from 'react-router';
import WeatherRegionWrap3 from './components/weather/WeatherRegionWrap3';
import WeatherRegionWrap4 from './components/weather/WeatherRegionWrap4';

const Contents = function() {
    return (
        <Switch>
            <Route exact path='/WeatherRegionWrap3' component={WeatherRegionWrap3} />
            <Route exact path='/WeatherRegionWrap4' component={WeatherRegionWrap4} />
        </Switch>
    );
}

export default Contents;
