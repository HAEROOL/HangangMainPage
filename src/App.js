import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import MainPageFooter from './component/Footer/MainPageFooter'
const TotalPage = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
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
