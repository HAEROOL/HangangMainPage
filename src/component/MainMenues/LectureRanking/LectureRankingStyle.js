import styled from 'styled-components'

export const LectureRankingWrapper = styled.div`
    width : 470px;
    height : 450px;
`
export const RankingWrapper = styled.div`
    width : 464px;
    height : 396px;
    border-radius : 8px;
    border : solid 1px #eeeeee;
`
export const ComponentName = styled.div`
    font-size : 16px;
    margin-bottom : 16px;
`
export const DepartmentSelector = styled.ul`
    display : flex;
    padding : 0px;
    margin : 0px auto;
    justify-content : space-around;
    align-items : center;
    height : 40px;
    font-size : 12px;
    list-style : none;
    border-bottom : 1px solid #eeeeee;
`

export const DepartmentName = styled.div`
    heigth : 40px;
    cursor : pointer;
    color : ${props => props.isClicked?'#238bfe':'#999999'}
`