import Banner from './component/Banner/Banner'
import styled from 'styled-components';
import MainPage from './pages/MainPage';
import MainPageFooter from './component/Footer/MainPageFooter'
import './assets/fonts/font.css';
import { useGetLectures } from './api/hangangLecture';
const TotalPage = styled.div`
  display : flex;
  flex-direction : column;
  width : 100%;
  font-family : NotoSansKRLight;
  margin : 0 auto;
  min-width : 1280px;
  @media screen and (max-width : 574px){
    min-width : 1px;
}

`
function App() {
  const {data, error, isLoading} = useGetLectures(10)
  return (
      <TotalPage>
        <Banner/>
        <MainPage/>
        <MainPageFooter/>
      </TotalPage>

  );
}

export default App;
