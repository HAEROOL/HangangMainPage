import styled from 'styled-components'
export const CurrentLectureWrapper = styled.div`
    width : 274px;
    height : 318px;
    @media screen and (max-width:574px){
        width : 100%;
    }
`
export const LectureList = styled.ul`
    width : 272px;
    height : 276px;
    padding : 0;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    list-style : none;
    border-radius : 8px;
    border : solid 1px #eeeeee;
    @media screen and (max-width:574px){
        width : 100%;
        justify-content : space-around;
    }
`
export const LectureNameAndProfessor = styled.div`
    display : flex;
    flex-direction : column;
`
export const Lecture = styled.li`
    display : flex;
    width : 90%;
    margin : 0 auto;
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