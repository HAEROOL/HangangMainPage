import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {SignatureColor, BaseColor, MobileWidth} from '../../static/shared/commonStyle'
export const StyledLink = styled(NavLink)`
    text-decoration: none;
`
export const FocusLine = styled.div`
    postion : absolute; 
    transition: transform 0.3s ease 0s;
    transform: translateX(${porps=>porps.location * 120 + 98}px);
    width : 107px;
    height : 2px;
    bottom : -1px;
    background-color : ${SignatureColor};
    @media screen and (max-width : ${MobileWidth}){
        display : none;
    }
`
export const BannerContent = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
`
export const PageHeader = styled.header`
    width : 100%;
    min-width : 1280px;
    height : 80px;
    display : flex;
    justify-content : center;
    border-bottom : solid 1px ${BaseColor};
    @media screen and (max-width : ${MobileWidth}){
        width : 100%;
        border : none;
        min-width : 1px;
    }
`
export const MenuWrapper = styled.nav`
    width : 1135px;
    height : 79px;
    display : flex;
    align-items : center;
    justify-content : space-between;
    text-align : center;
    @media screen and (max-width : ${MobileWidth}){
        width : 90%;
    }
`
export const MainMenuWrapper = styled.div`
    width : 560px;
    height : 79px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    postion : relative;
    @media screen and (max-width : ${MobileWidth}){
        width : 100%;
    }
`
export const LoginMenuWrapper = styled.div`
    width : 170px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`
export const MainMenu = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 98px;
    height : 79px;
    color : ${SignatureColor};
    font-size : 17px;
    cursor : pointer;
    @media screen and (max-width : ${MobileWidth}){
        display : None;
    }
`

export const LoginMenu = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    height : 15px;
    color : ${SignatureColor};
    font-size : 17px;
    cursor : pointer;
    @media screen and (max-width : ${MobileWidth}){
        display : None;
    }
`
export const DevideLine = styled.div`
    width : 1px;
    height : 15px;
    background : #dadada;
    @media screen and (max-width : ${MobileWidth}){
        display : None;
    }
`
export const Logo = styled.div`
    cursor : pointer;
`