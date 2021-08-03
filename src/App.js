import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import MainPageMenu from './component/MainMenues/MainPageMeues';
const TotalPage = styled.div`
  width : 100vw;
  height : 100vh;
  display : flex;
  flex-direction : column;
  align-items : center;
`
function App() {
  return (
    <TotalPage>
      <Banner/>
      <MainPageMenu/>
    </TotalPage>
  );
}

export default App;
