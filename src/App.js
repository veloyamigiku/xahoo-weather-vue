import './App.css';
import logo from "./components/weather/logo.png";
import Header from './components/common/Header';


function App() {

  return (
    <div id="wrapper">
      <div id="header">
        <Header logo={logo} headerLogoAlt="XahoojapanWeather" />
      </div>
      <div id="main">
        <div id="menu"></div>
        <div id="contents"></div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
