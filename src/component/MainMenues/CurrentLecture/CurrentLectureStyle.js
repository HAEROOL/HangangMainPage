import styled from 'styled-components'

export const CurrentLectureWrapper = styled.div`
    width : 272px;
    height : 360px;
    @media screen and (max-width:574px){
        width : 547px;
        height : 555px;
        margin : 15px 15px 27px 15px;
    }
`
export const LectureList = styled.ul`
    width : 232px;
    height : 276px;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    margin : 0 auto;
    padding : 0 20px 24px 20px;
    list-style : none;
    border-radius : 8px;
    border : solid 1px #eeeeee;
    @media screen and (max-width:574px){
        width : 522px;
        height : 505px;
        padding : 0;
        justify-content : space-around;
        margin : 0;
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
    @media screen and (max-width:574px){
        font-size : 24px;
        padding : 0 12px;
    }
`
export const Professor = styled.span`
    font-size : 12px;
    color : #828282;
    @media screen and (max-width:574px){
        font-size : 20px;
    }
`
export const AverageScore = styled.div`
    font-size : 18px;
    @media screen and (max-width:574px){
        font-size : 30px;
    }
`