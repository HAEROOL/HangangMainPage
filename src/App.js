import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import IndexPage from './pages/IndexPage/IndexPage';
import MainPageFooter from './component/Footer/MainPageFooter'
import './assets/fonts/font.css';
import { Route, Switch} from 'react-router-dom';
import TestComp from './test';
import { MobileWidth } from './static/shared/commonStyle';
const TotalPage = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  font-family : NotoSansKRLight;
  margin : 0 auto;
  min-width : 1280px;
  @media screen and (max-width : ${MobileWidth}){
    min-width : 300px;
  }
`
function App() {
  return (
      <TotalPage>
        <Banner/>
        <Switch>
          <Route exact path='/' component={IndexPage}/>
          <Route path='/lectures' component={TestComp}/>
          <Route path='/resources' component={TestComp}/>
          <Route path='/timetable' component={TestComp}/>
          <Route path='/my' component={TestComp}/>
          <Route path='/login' component={TestComp}/>
          <Route path='/signup' component={TestComp}/>
        </Switch>
        <MainPageFooter/>
      </TotalPage>

  );
}

export default App;
