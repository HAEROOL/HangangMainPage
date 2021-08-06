import styled from 'styled-components'

export const TimeTableWrapper = styled.div`
    width : 368px;
    height : 360px;
`
export const LectureList = styled.ul`
    width : 328px;
    height : 276px;
    margin : 0 auto;
    padding : 0 20px 24px 20px;
    list-style : none;
    border-radius : 8px;
    border : solid 1px #eeeeee;
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
`
export const Professor = styled.span`
    font-size : 12px;
    color : #828282;
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