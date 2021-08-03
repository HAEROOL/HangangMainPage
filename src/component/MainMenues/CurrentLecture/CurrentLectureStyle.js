import styled from 'styled-components'

export const CurrentLectureWrapper = styled.div`
    width : 400px;
    height : 350px;
`
export const LectureList = styled.ul`
    width : 272px;
    height : 276px;
    display : flex;
    flex-direction : column;
    padding : 0px 12px;
    justify-content : space-around;
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
    justify-content : space-between;
    align-items : center;
    font-size : 14px;
`
export const Professor = styled.span`
    font-size : 12px;
    color : #828282;
`
export const AverageScore = styled.div`
    font-size : 18px;
`