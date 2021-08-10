import styled from "styled-components";
import '../../../assets/fonts/font.css'
export const DepartmentBrowserWrapper = styled.div`
    width : 1135px;
    @media screen and (max-width : 574px){
        width : 100%;
        height : 140px;
    }
`
export const Scroll = styled.div`
    @media screen and (max-width : 574px){
        overflow-x : scroll;
        height : 120px;
    }
`
export const DepartmentListWrapper = styled.ul`
    display : flex;
    justify-content : space-between;
    padding : 0;
    margin : 0;
    @media screen and (max-width : 574px){
        width : 1100px;
        padding : 0 10px;
    }
`
export const Department = styled.li`
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
        background-size: 100px 100px;
        font-size : 12px;
        background-size: 100px 100px;
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
    font-family : NotoSansKRLight;
    font-size : 16px;
    text-align : left;
    margin-bottom : 16px;
    @media screen and (max-width : 574px){
        width : 90%;
        margin : 0 auto;
        margin-bottom : 16px;
    }
`