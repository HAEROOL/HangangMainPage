import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import LectureRanking from './component/LectureRanking/LectureRanking';
import RecommendationMaterial from './component/RecommendationLecutreMaterial/RecommendationLectureMaterial';
import TimeTable from './component/TimeTable/TimeTable';
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
      {/* <Banner/>
      <LectureRanking/> */}
      {/* <RecommendationMaterial/> */}
      <TimeTable/>
    </TotalPage>
  );
}

export default App;
