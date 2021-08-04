import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import MainPageFooter from './component/Footer/MainPageFooter';
const TotalPage = styled.div`
  width : 100vw;
  height : 100vh;
  display : flex;
  flex-direction : column;
  justify-content : center;
`
function App() {
  return (
    <TotalPage>
      <Banner/>
      <MainPageFooter/>
    </TotalPage>
  );
}

export default App;
