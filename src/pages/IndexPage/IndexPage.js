import React from 'react'
import CurrentLecture from '../../component/CurrentLecture/CurrentLecture'
import TimeTable from '../../component/TimeTable/TimeTable'
import RecommendationLectureMaterial from '../../component/RecommendationLecutreMaterial/RecommendationLectureMaterial'
import LectureRanking from '../../component/LectureRanking/LectureRanking'
import { IndexPageMenu,RightBottomRightSection,RightBottomLeftSection,RightTopSection,RightSection,LeftSection,TopSection, MainMenuBrowserWrapper,MainPageMenuWrapper} from './IndexPage.style'
import DepartmentBrowser from '../../component/Department/Department'
import MainPageIllust from '../../component/Banner/MainPageIllust'
import styled from 'styled-components'
const IndexPageWrapper = styled.div`
    width : 100%;
`
function IndexPage(){
    return(
        <IndexPageWrapper>
            <MainPageIllust/>
            <MainPageMenuWrapper>
                <MainMenuBrowserWrapper>
                    <IndexPageMenu>
                        <TopSection>
                            <DepartmentBrowser/>
                        </TopSection>
                        <LeftSection>
                            <LectureRanking/>
                        </LeftSection>
                        <RightSection>
                            <RightTopSection>
                                <RecommendationLectureMaterial/>
                            </RightTopSection>
                            <RightBottomLeftSection>
                                <TimeTable/>
                            </RightBottomLeftSection>
                            <RightBottomRightSection>
                                <CurrentLecture/>
                            </RightBottomRightSection>
                        </RightSection>
                    </IndexPageMenu>
                </MainMenuBrowserWrapper>
            </MainPageMenuWrapper>
        </IndexPageWrapper>
    )
}

export default IndexPage