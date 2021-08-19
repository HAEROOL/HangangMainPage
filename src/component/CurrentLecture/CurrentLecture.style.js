import styled from 'styled-components'
import { BaseColor,UnfocusColor,MobileWidth } from '../../static/shared/commonStyle'
export const CurrentLectureWrapper = styled.div`
    width : 274px;
    height : 318px;
    @media screen and (max-width : ${MobileWidth}){
        width : 100%;
    }
`
export const LectureList = styled.ul`
    width : 272px;
    height : 236px;
    padding : 20px 0;
    margin : 0;
    display : flex;
    flex-direction : column;
    list-style : none;
    border-radius : 8px;
    border : solid 1px ${BaseColor};
    @media screen and (max-width : ${MobileWidth}){
        width : 100%;
    }
`
export const LectureInformaion = styled.div`
    display : flex;
    flex-direction : column;
`
export const Lecture = styled.li`
    display : flex;
    width : 90%;
    height : 25%;
    margin : 0 auto;
    justify-content : space-between;
    align-items : center;
    font-size : 14px;
`
export const Professor = styled.span`
    font-size : 12px;
    color : ${UnfocusColor};
`
export const AverageScore = styled.div`
    font-size : 18px;
`
export const ComponentName = styled.div`
    font-family : NotoSansKRLight;
    font-size : 16px;
    text-align : left;
    margin-bottom : 16px;
    @media screen and (max-width : ${MobileWidth}){
        width : 90%;
        margin : 0;
        margin-bottom : 16px;
    }
`
