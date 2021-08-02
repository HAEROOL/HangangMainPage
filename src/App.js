import Banner from './component/Banner/Banner'
import styled from 'styled-components';
const TotalPage = styled.div`
  width : 100vw;
  height : 100vh;
  display : flex;
  // flex-direction : row;
  justify-content : center;
`
function App() {
  return (
    <TotalPage>
      <Banner/>
    </TotalPage>
  );
}

export default App;
