import Header from "./Header";
import logo from "../weather/logo.png";

let HeaderWrap = function() {

    let logoAlt = "XahoojapanWeather";

    return (
        <Header logo={logo} logoAlt={logoAlt} />
    )

}

export default HeaderWrap;
