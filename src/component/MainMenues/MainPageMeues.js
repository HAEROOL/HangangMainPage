import React from 'react'
import CurrentLecture from '../../component/CurrentLecture/CurrentLecture'
import TimeTable from '../../component/TimeTable/TimeTable'
import RecommendationLectureMaterial from '../../component/RecommendationLecutreMaterial/RecommendationLectureMaterial'
import LectureRanking from '../../component/LectureRanking/LectureRanking'
import { MainMenuBrowserWrapper,FifthMaterial, FirstFourthThirdFifthWrapper, FirstMaterial, FourthMaterial, FourthThirdFifthWrapper, MainPageMenuWrapper, SecondMaterial, ThirdMaterial, ThridFifthWrapper } from './MainPageMenues.style'
import DepartmentBrowser from '../../component/Department/Department'
function MainPageMenu(){
    return(
        <MainPageMenuWrapper>
            <MainMenuBrowserWrapper>
                <FirstFourthThirdFifthWrapper>
                    <SecondMaterial>
                        {/* <DepartmentBrowser/> */}
                        2
                    </SecondMaterial>
                    <FirstMaterial>
                        {/* <LectureRanking/> */}
                        1
                    </FirstMaterial>
                    <FourthThirdFifthWrapper>
                        <FourthMaterial>
                            <RecommendationLectureMaterial/>4
                        </FourthMaterial>
                        <ThridFifthWrapper>
                            <ThirdMaterial>
                                <TimeTable/>3
                            </ThirdMaterial>
                            <FifthMaterial>
                                <CurrentLecture/>5
                            </FifthMaterial>
                        </ThridFifthWrapper>
                    </FourthThirdFifthWrapper>
                </FirstFourthThirdFifthWrapper>
            </MainMenuBrowserWrapper>

        </MainPageMenuWrapper>
    )
}

export default MainPageMenu