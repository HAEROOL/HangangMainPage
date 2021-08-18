import React from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'
import {ReactComponent as HangangIllust} from '../../assets/images/mainmenues/HangangMainpageIllust.svg'
import { FontColor, MobileWidth } from '../../static/shared/commonStyle'
const IllustWrapper = styled.div`
    display : flex;
    height : 330px;
    width : 1135px;
    justify-content : space-between;
    margin : 0 auto;
    @media screen and (max-width : ${MobileWidth}){
        display : None;
    }

`
const TextWrapper = styled.div`
    display : flex;
    font-family : 'NanumSquareRound';
    flex-direction : column;
    font-size : 36px;
    align-items : start;
    margin-top : 212px;
`
const FirstLineOfPhrase = styled.span`
    display : block;
    align-items : start;
    font-size : 18px;
    font-family : 'NotoSansKrLight'
`
const SecondLineOfPhrase = styled.div`
    align-items : start;
    display : block;
    margin-top : 16px;
    color : ${FontColor};
    font-weight : 800;
`
function MainPageIllust(){
    return (
        <IllustWrapper>
            <TextWrapper>
                <FirstLineOfPhrase>
                    솔직한 강의평을 원한다면?
                </FirstLineOfPhrase>
                <SecondLineOfPhrase>
                    가자, 한강으로!
                </SecondLineOfPhrase>
            </TextWrapper>
            <HangangIllust style={{marginTop : '42px'}}/>
        </IllustWrapper>
        
    )
}

export default MainPageIllust