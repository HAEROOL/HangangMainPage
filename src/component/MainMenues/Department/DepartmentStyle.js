import styled from "styled-components";
import '../../../assets/fonts/font.css'
export const DepartmentBrowserWrapper = styled.div`
    width : 1135px;
    height : 127px;
    margin : 0 auto;
    @media screen and (max-width : 574px){
        width : 100%;
        height : 140px;
    }
`
export const Scroll = styled.div`
    @media screen and (max-width : 574px){
        overflow-x : scroll;
        height : 110px;
    }
`
export const DepartmentListWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    @media screen and (max-width : 574px){
        width : 1100px;
        padding : 0 10px;
    }
`
export const Department = styled.a`
    display : flex;
    align-items : flex-end;
    cursor : pointer;
    height : 87px;
    width : 100px;
    font-size : 12px;
    background : url(${props => props.url});
    border-radius : 8px;
    background-position: center;
    background-size: 100px 87px;
    @media screen and (max-width : 574px){
        height : 100px;
        font-size : 12px;
    }
`
export const DepartmentName = styled.div`
    display : flex;
    width : 67px;
    margin : 0 auto;
    text-align : center;
    justify-content : center;
    color : #ffffff;
    margin-bottom : 9px;
`
export const ComponentName = styled.div`
    font-family : NotoSansKRMedium;
    font-size : 16px;
    text-align : left;
    margin-bottom : 16px;
    @media screen and (max-width : 574px){
        margin-left : 16px;
    }
`