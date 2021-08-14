import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import MainPageFooter from './component/Footer/MainPageFooter'
import './assets/fonts/font.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TestComp from './test';
const TotalPage = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  font-family : NotoSansKRLight;
  margin : 0 auto;
  min-width : 1280px;
  @media screen and (max-width : 574px){
    min-width : 1px;
  }
`
function App() {
  return (
      <TotalPage>
        <Router>
        <Banner/>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/dummy' component={TestComp}/>
        </Router>
        <MainPageFooter/>
      </TotalPage>

  );
}

export default App;
