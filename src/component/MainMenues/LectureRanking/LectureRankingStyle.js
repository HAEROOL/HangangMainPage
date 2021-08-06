import styled from 'styled-components'

export const LectureRankingWrapper = styled.div`
    width : 470px;
    height : 450px;
    @media screen and (max-width:574px){
        width : 522px;
        height : 625px;
        margin-left : 26px;
    }
    
`
export const RankingWrapper = styled.div`
    width : 464px;
    height : 396px;
    border-radius : 8px;
    border : solid 1px #eeeeee;
    @media screen and (max-width : 574px){
        width : 522px;
        height : 574px;
    }
`
export const ComponentName = styled.div`
    font-size : 16px;
    margin-bottom : 16px;
    @media screen and (max-width : 574px){
        font-size : 25px;
    }
`
export const DepartmentSelector = styled.ul`
    display : flex;
    padding : 0px;
    margin : 0 auto;
    justify-content : space-around;
    align-items : center;
    height : 40px;
    font-size : 12px;
    list-style : none;
    border-bottom : 1px solid #eeeeee;
    @media screen and (max-width : 574px){
        width : 759px;
        font-size : 20px;
    }
`
export const LectureRankingHeader = styled.div`
    @media screen and (max-width : 574px){
        overflow : auto;
    }
`
export const DepartmentName = styled.div`
    heigth : 40px;
    cursor : pointer;
    color : ${props => props.isClicked?'#238bfe':'#999999'}
    
`