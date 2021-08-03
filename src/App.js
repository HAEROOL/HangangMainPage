import Banner from './component/Banner/Banner'
import DepartmentBrowser from './component/Department/Department'
import styled from 'styled-components';
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
      <DepartmentBrowser/>
    </TotalPage>
  );
}

export default App;
