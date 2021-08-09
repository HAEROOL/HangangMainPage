import React from 'react'
import CurrentLecture from './CurrentLecture/CurrentLecture'
import TimeTable from './TimeTable/TimeTable'
import RecommendationLectureMaterial from './RecommendationLecutreMaterial/RecommendationLectureMaterial'
import LectureRanking from './LectureRanking/LectureRanking'
import { MainMenuBrowserWrapper,FifthMaterial, FirstFourthThirdFifthWrapper, FirstMaterial, FourthMaterial, FourthThirdFifthWrapper, MainPageMenuWrapper, SecondMaterial, ThirdMaterial, ThridFifthWrapper } from './MainPageMenuesStyle'
import DepartmentBrowser from './Department/Department'
function MainPageMenu(){
    return(
        <MainPageMenuWrapper>
            <MainMenuBrowserWrapper>
                <FirstFourthThirdFifthWrapper>
                    <SecondMaterial>
                        <DepartmentBrowser/>
                    </SecondMaterial>
                    <FirstMaterial>
                        <LectureRanking/>
                    </FirstMaterial>
                    <FourthThirdFifthWrapper>
                        <FourthMaterial>
                            <RecommendationLectureMaterial/>
                        </FourthMaterial>
                        <ThridFifthWrapper>
                            <ThirdMaterial>
                                <TimeTable/>
                            </ThirdMaterial>
                            <FifthMaterial>
                                <CurrentLecture/>
                            </FifthMaterial>
                        </ThridFifthWrapper>
                    </FourthThirdFifthWrapper>
                </FirstFourthThirdFifthWrapper>
            </MainMenuBrowserWrapper>

        </MainPageMenuWrapper>
    )
}

export default MainPageMenu