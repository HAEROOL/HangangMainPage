import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import MainPageFooter from './component/Footer/MainPageFooter'
import './App.css';

const TotalPage = styled.div`
  display : flex;
  font-family: 'Noto Sans KR';
  flex-direction : column;
  @media screen and (max-width : 574px){
    width : 574px;
    
  }
`
function App() {
  return (
      <TotalPage>
        <Banner/>
        <MainPage/>
        <MainPageFooter/>
      </TotalPage>

  );
}

export default App;
