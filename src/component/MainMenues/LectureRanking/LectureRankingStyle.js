import styled from 'styled-components'
import '../../../assets/fonts/font.css'
export const LectureRankingWrapper = styled.div`
    width : 470px;
    height : 450px;
    @media screen and (max-width:574px){
        border : 1px solid black;
        width : 90%;
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
    font-family : NotoSansKRMedium;
    font-size : 16px;
    margin-bottom : 16px;
    @media screen and (max-width : 574px){
        font-size : 16px;
    }
`
export const DepartmentSelector = styled.ul`
    display : flex;
    padding : 0;
    margin : 0 auto;
    justify-content : space-around;
    align-items : center;
    height : 40px;
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
    align-items : center;
    cursor : pointer;
    color : ${props => props.isClicked?'#238bfe':'#999999'};
    border-bottom : ${props => props.isClicked?'#ffab2e 2px solid':''}
`