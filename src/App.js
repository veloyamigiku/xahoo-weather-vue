import './App.css';
import FooterWrap from './components/common/FooterWrap';
import HeaderWrap from './components/common/HeaderWrap';


function App() {
  
  return (
    <div id="wrapper">
      <div id="header">
        <HeaderWrap />
      </div>
      <div id="main">
        <div id="menu"></div>
        <div id="contents"></div>
      </div>
      <div id="footer">
        <FooterWrap />
      </div>
    </div>
  );
}

export default App;
