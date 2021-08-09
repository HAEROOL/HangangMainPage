import React from 'react'
import CurrentLecture from './CurrentLecture/CurrentLecture'
import TimeTable from './TimeTable/TimeTable'
import RecommendationLectureMaterial from './RecommendationLecutreMaterial/RecommendationLectureMaterial'
import LectureRanking from './LectureRanking/LectureRanking'
import { FirstMaterial, FourthMaterial, MainPageMenuWrapper, SecondMaterial, ThirdMaterial } from './MainPageMenuesStyle'
function MainPageMenu(){
    return(
        <MainPageMenuWrapper>
            {/* <LectureRanking/> */}
            <TimeTable/>
        </MainPageMenuWrapper>
    )
}

export default MainPageMenu