import styled from 'styled-components'
import '../../assets/fonts/font.css'
import {UnfocusColor,SignatureColor, FocusColor, BaseColor, PlaceholderColor,MobileWidth} from '../../static/shared/commonStyle'
export const LectureRankingWrapper = styled.div`
    width : 470px;
    height : 450px;
    @media screen and (max-width : ${MobileWidth}){
        width : 100%;
    } 
`
export const RankingWrapper = styled.div`
    width : 464px;
    height : 396px;
    border-radius : 8px;
    border : solid 1px ${BaseColor};
    @media screen and (max-width : ${MobileWidth}){
        width : 100%;
    }
`
export const ComponentName = styled.div`
    font-family : NotoSansKRLight;
    font-size : 16px;
    margin-bottom : 16px;
    @media screen and (max-width : ${MobileWidth}){
        font-size : 16px;
    }
`
export const DepartmentSelector = styled.ul`
    display : flex;
    padding : 0 10px;
    margin : 0 auto;
    justify-content : space-around;
    align-items : center;
    height : 42px;
    font-size : 12px;
    list-style : none;
    border-bottom : 1px solid ${BaseColor};
    @media screen and (max-width : ${MobileWidth}){
        width : 600px;
        font-size : 14px;
    }
`
export const LectureRankingHeader = styled.div`
    @media screen and (max-width : ${MobileWidth}){
        overflow-x : auto;
    }
`
export const DepartmentName = styled.div`
    height : 40px;
    width : 40px;
    display : flex;
    margin-bottom : ${props => props.isClicked?'-2px':'0'};
    align-items : center;
    justify-content : center;
    cursor : pointer;
    color : ${props => props.isClicked?SignatureColor:PlaceholderColor};
    border-bottom : ${props => props.isClicked? FocusColor:'none'} 2px solid;
`

export const LectureWrapper = styled.ul`
    padding : 0;
    margin : 0;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    width : 100%;
    height : 353px;
    list-style:none;
`
export const LectureContainer = styled.li`
    width : 100%;
    height : 20%;
    border-bottom : 1px solid ${BaseColor};
    &:last-child{
        border-bottom: 0px;
    }
`
export const Lecture = styled.div`
    margin : 0 auto;
    width : 90%;
    height : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
`
export const LectureInformaion = styled.div`
    display : flex;
    flex-direction : column;
`
export const Professor = styled.span`
    font-size : 12px;
    color : ${UnfocusColor};
`
export const AverageScore = styled.div`
    font-size : 18px;
`
export const LectureOrder = styled.div`
    display : flex;
    font-size : 18px;
    color : ${SignatureColor};
    margin-right:24px;
`
export const LectureContent =styled.div`
    display : flex;
`