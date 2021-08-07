import React from 'react'
import styled from 'styled-components'
import '../../assets/fonts/font.css'
import {ReactComponent as HangangIllust} from '../../assets/images/HangangMainpageIllust.svg'
const IllustWrapper = styled.div`
    display : flex;
    height : 330px;
    width : 1135px;
    justify-content : space-between;
    margin : 0 auto;
    @media screen and (max-width:574px){
        display : None;
    }

`
const TextWrapper = styled.div`
    display : flex;
    font-family : 'NanumSquareRound';
    flex-direction : column;
    font-size : 36px;
    align-items : end;
    margin-top : 212px;
`
function MainPageIllust(){
    return (
        <IllustWrapper>
            <TextWrapper>
                <div style={{fontSize:'18px',fontFamily:'NotoSansKrLight'}}>
                    솔직한 강의평을 원한다면?
                </div>
                <div style={{marginTop:'16px'}}>
                    가자, 한강으로!
                </div>
            </TextWrapper>
            <HangangIllust style={{marginTop : '42px'}}/>
        </IllustWrapper>
        
    )
}

export default MainPageIllust