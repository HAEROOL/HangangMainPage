import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import MainPageFooter from './component/Footer/MainPageFooter'
import './assets/fonts/font.css';

const TotalPage = styled.div`
  display : flex;
  flex-direction : column;
  width : 100vw;
  font-family : NotoSansKRLight;
  margin : 0 auto;
  @media screen and (max-width : 574px){
    width : 574px;
  }
`
function App() {
  return (
      <TotalPage>
        {/* <Banner/> */}
        <MainPage/>
        {/* <MainPageFooter/> */}
      </TotalPage>

  );
}

export default App;
