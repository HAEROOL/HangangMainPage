import styled from 'styled-components'
import '../../../assets/fonts/font.css'
export const LectureRankingWrapper = styled.div`
    width : 470px;
    height : 450px;
    @media screen and (max-width:574px){
        width : 100%;
    } 
`
export const RankingWrapper = styled.div`
    width : 464px;
    height : 396px;
    border-radius : 8px;
    border : solid 1px #eeeeee;
    @media screen and (max-width : 574px){
        width : 100%;
    }
`
export const ComponentName = styled.div`
    font-family : NotoSansKRLight;
    font-size : 16px;
    margin-bottom : 16px;
    @media screen and (max-width : 574px){
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
    border-bottom : 1px solid #eeeeee;
    @media screen and (max-width : 574px){
        width : 600px;
        font-size : 14px;
    }
`
export const LectureRankingHeader = styled.div`
    @media screen and (max-width : 574px){
        overflow : auto;
    }
`
export const DepartmentName = styled.div`
    height : 40px;
    display : flex;
    margin-bottom : ${props => props.isClicked?'-2px':'0'};
    align-items : center;
    cursor : pointer;
    color : ${props => props.isClicked?'#238bfe':'#999999'};
    border-bottom : ${props => props.isClicked?'#ffab2e 2px solid':''}
`

export const LectureWrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    width : 100%;
    height : 353px;
`
export const Lecture = styled.div`
    margin : 0 auto;
    width : 90%;
    display : flex;
    justify-content : space-between;
`
export const LectureNameAndProfessor = styled.div`
    display : flex;
    flex-direction : column;
`
export const Professor = styled.span`
    font-size : 12px;
    color : #828282;
`
export const AverageScore = styled.div`
    font-size : 18px;
`
export const LectureOrder = styled.div`
    display : flex;
    font-size : 18px;
    color : #238bfe;
    margin-right:24px;
`
export const LectureAndOrder =styled.div`
    display : flex;
`