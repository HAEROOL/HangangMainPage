import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import LectureRanking from './component/LectureRanking/LectureRanking';
import RecommendationMaterial from './component/RecommendationLecutreMaterial/RecommendationLectureMaterial';
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
      <RecommendationMaterial/>
    </TotalPage>
  );
}

export default App;
