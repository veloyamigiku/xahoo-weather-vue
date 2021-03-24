import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import FooterWrap from './components/common/FooterWrap';
import HeaderWrap from './components/common/HeaderWrap';
import SideMenuWrap from './components/weather/SideMenuWrap';
import Contents from './Contents';


function App() {
  
  return (
    <div id="wrapper">
      <div id="header">
        <HeaderWrap />
      </div>
      <div id="main">
        <div id="contents">
          <Router>
            <Contents />
          </Router>
        </div>
        <div id="menu">
          <SideMenuWrap type="disaster" />
          <SideMenuWrap type="weather" />
          <SideMenuWrap type="leisure" />
        </div>
      </div>
      <div id="footer">
        <FooterWrap />
      </div>
    </div>
  );
}

export default App;
