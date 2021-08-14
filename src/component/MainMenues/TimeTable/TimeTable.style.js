import styled from 'styled-components'

export const TimeTableWrapper = styled.div`
    width : 370px;
    height : 318px;
    @media screen and (max-width:574px){
        width : 100%;
    }
`
export const LectureList = styled.ul`
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    width : 100%;
    height : 276px;
    margin : 0;
    padding : 0;
    list-style : none;
    border-radius : 8px;
    border : solid 1px #eeeeee;
    text-align : center;
    font-size : 12px;
    color : #999999;
`
export const LectureNameAndProfessor = styled.div`
    display : flex;
    flex-direction : column;
`
export const Lecture = styled.li`
    width : 90%;
    display : flex;
    justify-content : space-between;
    align-items : center;
    font-size : 14px;
    margin : 0 auto;
    @media screen and (max-width : 574px){
        font-size : 14px;
        padding : 0;
    }
`
export const Professor = styled.span`
    font-size : 12px;
    color : #828282;
    @media screen and (max-width:574px){
        font-size : 12px;
    }
`
export const EvaluationButton = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 60px;
    height : 28px;
    border-radius : 20px;
    background : ${props => props.isClicked?'#eeeeee':'#238bfe'};
    font-size : 12px;
    color : ${props => props.isClicked?'#999999':'#ffffff'};
    cursor : pointer;
`
export const ComponentName = styled.div`
    font-family : NotoSansKRLight;
    font-size : 16px;
    text-align : left;
    margin-bottom : 16px;
    @media screen and (max-width : 574px){
        width : 90%;
        margin : 0;
        margin-bottom : 16px;
    }
`
export const GoTimeTableButton = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    margin : 0 auto;
    margin-top : 6px;
    width : 109px;
    height : 28px;
    border-radius : 20px;
    background-color : #eeeeee;
    font-size : 12px;
    color : #222222;
    @media screen and (max-width : 574px){
        font-size : 12px;
    }
`
export const NoTimeTable = styled.div`
    width : 90%;
    justify-content : space-between;
    align-items : center;
    font-size : 12px;
    color : #828282;
    margin : 0 auto;
    @media screen and (max-width : 574px){
        font-size : 12px;
    }
`