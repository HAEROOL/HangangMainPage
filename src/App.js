import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import LectureRanking from './component/LectureRanking/LectureRanking';
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
      {/* <Banner/> */}
      <LectureRanking/>
    </TotalPage>
  );
}

export default App;
