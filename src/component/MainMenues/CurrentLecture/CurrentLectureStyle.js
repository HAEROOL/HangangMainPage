import styled from 'styled-components'

export const CurrentLectureWrapper = styled.div`
    width : 272px;
    height : 360px;
`
export const LectureList = styled.ul`
    width : 232px;
    height : 276px;
    display : flex;
    flex-direction : column;
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
export const AverageScore = styled.div`
    font-size : 18px;
`