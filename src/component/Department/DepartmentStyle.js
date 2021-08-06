import styled from "styled-components";
export const DepartmentBrowserWrapper = styled.div`
    width : 1135px;
    height : 120px;
    margin : 0 auto;
    margin-bottom : 32px;
    @media screen and (max-width : 574px){
        width : 570px;
        height : 190px;
        margin : 0 auto;
    }
`
export const Scroll = styled.div`
    @media screen and (max-width : 574px){
        width : 574px;
        height : 180px;
        overflow-x : scroll;
    }
`
export const DepartmentListWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    @media screen and (max-width : 574px){
        width : 1502px;
        height : 139px;
        margin : 0 15px;
    }
`
export const Department = styled.a`
    position : relative;
    text-align : center;
    object-fit: contain;
    font-size : 12px;
`
export const DepartmentImages = styled.img`
    cursor : pointer;
    height : 87px;
    width : 100px;
    border-radius : 10px;
    @media screen and (max-width : 574px){
        width : 139px;
        height : 139px;
    }
`
export const DepartmentName = styled.div`
    position : absolute;
    top : 50%;  
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