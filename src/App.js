import './App.css';
import FooterWrap from './components/common/FooterWrap';
import HeaderWrap from './components/common/HeaderWrap';
import SideMenuWrap from './components/weather/SideMenuWrap';


function App() {
  
  return (
    <div id="wrapper">
      <div id="header">
        <HeaderWrap />
      </div>
      <div id="main">
        <div id="contents"></div>
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
