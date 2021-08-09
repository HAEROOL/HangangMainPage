import styled from 'styled-components'

export const TimeTableWrapper = styled.div`
    width : 368px;
    height : 360px;
    @media screen and (max-width:574px){
        width : 522px;
        height : 456px;
        margin-left : 26px;
    }
`
export const LectureList = styled.ul`
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    width : 328px;
    height : 276px;
    margin : 0 auto;
    padding : 0 20px 24px 20px;
    list-style : none;
    border-radius : 8px;
    border : solid 1px #eeeeee;
    @media screen and (max-width:574px){
        width : 498px;
        height : 402px;
        padding : 0 12px;
        margin : 0px;
    }
`
export const LectureNameAndProfessor = styled.div`
    display : flex;
    flex-direction : column;
`
export const Lecture = styled.li`
    display : flex;
    padding : 20px 12px;
    justify-content : space-between;
    align-items : center;
    font-size : 14px;
    @media screen and (max-width : 574px){
        font-size : 24px;
        padding : 0;
    }
`
export const Professor = styled.span`
    font-size : 12px;
    color : #828282;
    @media screen and (max-width:574px){
        font-size : 20px;
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