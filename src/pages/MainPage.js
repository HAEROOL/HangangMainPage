import React from 'react'
import MainPageIllust from '../component/Banner/MainPageIllust'
import DepartmentBrowser from '../component/Department/Department'
import MainPageMenues from '../component/MainMenues/MainPageMeues'
import styled from 'styled-components'

const MainPageWrapper = styled.div`
    display : flex;
    flex-direction : column;
    width : 100vw;
    margin : 0;
    align-items : center;
    // justify-content : center;
`
function MainPage(){
    return(
        <MainPageWrapper>
            <MainPageIllust/>
            <DepartmentBrowser/>
            <MainPageMenues/>
        </MainPageWrapper>
    )
}

export default MainPage