import React from 'react'
import MainPageIllust from '../component/Banner/MainPageIllust'
import DepartmentBrowser from '../component/MainMenues/Department/Department'
import MainPageMenues from '../component/MainMenues/MainPageMeues'
import styled from 'styled-components'

const MainPageWrapper = styled.div`
    width : 100%;
`
function MainPage(){
    return(
        <MainPageWrapper>
            <MainPageIllust/>
            <MainPageMenues/>
        </MainPageWrapper>
    )
}

export default MainPage