import styled from "styled-components";
export const DepartmentBrowserWrapper = styled.div`
    width : 1135px;
    height : 120px;
    margin : 0 auto;
    margin-bottom : 32px;
    @media screen and (max-width : 574px){
        width : 522px;
        height : 250px;
        margin : 0 auto;
        margin-left : 26px;
    }
`
export const Scroll = styled.div`
    @media screen and (max-width : 574px){
        width : 522px;
        height : 139px;
        overflow-x : scroll;
    }
`
export const DepartmentListWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    @media screen and (max-width : 574px){
        width : 1502px;
        height : 139px;
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
    background-size: contain;
    @media screen and (max-width : 574px){
        font-size : 20px;
        width : 139px;
        height : 139px;
    }
`
export const DepartmentName = styled.div`
    display : flex;
    width : 100%;
    text-align : center;
    justify-content : center;
    color : #ffffff;
`
export const ComponentName = styled.div`
    font-size : 16px;
    text-align : left;
    margin-bottom : 16px;
    @media screen and (max-width : 574px){
        font-size : 26px;
    }
`