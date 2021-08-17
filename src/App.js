import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import MainPageFooter from './component/Footer/MainPageFooter'
import './assets/fonts/font.css';
import { Route, Switch} from 'react-router-dom';
import TestComp from './test';
const TotalPage = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  font-family : NotoSansKRLight;
  margin : 0 auto;
  min-width : 1280px;
  @media screen and (max-width : 574px){
    min-width : 300px;
  }
`
function App() {
  return (
      <TotalPage>
        <Banner/>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/lectures' component={TestComp}/>
          <Route exact path='/resources' component={TestComp}/>
          <Route exact path='/timetable' component={TestComp}/>
          <Route exact path='/my' component={TestComp}/>
        </Switch>
        <MainPageFooter/>
      </TotalPage>

  );
}

export default App;
