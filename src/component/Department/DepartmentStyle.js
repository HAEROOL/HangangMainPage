import styled from "styled-components";
export const DepartmentBrowserWrapper = styled.div`

`
export const DepartmentListWrapper = styled.div`
    width : 1135px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`
export const Department = styled.a`
    position : relative;
    text-align : center;
    height : 87px;
    width : 100px;
    object-fit: contain;
    font-size : 12px;
    background : yellow;
`
export const DepartmentImages = styled.img`
    cursor : pointer;
    height : 87px;
    width : 100px;
    border-radius : 10px;
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
`