import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import MainPageIllust from './component/Banner/MainPageIllust';
const TotalPage = styled.div`
  width : 100vw;
  height : 100vh;
  display : flex;
  flex-direction : column;
  // justify-content : center;
  align-items : center;
`
function App() {
  return (
    <TotalPage>
      <Banner/>
      <MainPageIllust/>
    </TotalPage>
  );
}

export default App;
