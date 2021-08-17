import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
export const StyledLink = styled(NavLink)`
    text-decoration: none;
    &.selected{
        margin-bottom : -2px;
        border-bottom : #238bfe 2px solid;
    }
`
export const PageHeader = styled.header`
    width : 100%;
    min-width : 1280px;
    height : 80px;
    display : flex;
    justify-content : center;
    border-bottom : solid 1px #eeeeee;
    @media screen and (max-width : 574px){
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
    @media screen and (max-width : 574px){
        width : 90%;
    }
`
export const MainMenuWrapper = styled.div`
    width : 560px;
    height : 79px;
    display : flex;
    justify-content : space-between;
    align-items : center;
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
    color : #238bfe;
    font-size : 17px;
    cursor : pointer;
    @media screen and (max-width : 574px){
        display : None;
    }
`

export const LoginMenu = styled.a`
    display : flex;
    justify-content : center;
    align-items : center;
    height : 15px;
    color : #238bfe;
    font-size : 17px;
    cursor : pointer;
    @media screen and (max-width : 574px){
        display : None;
    }
`
export const DevideLine = styled.div`
    width : 1px;
    height : 15px;
    background : #dadada;
    @media screen and (max-width : 574px){
        display : None;
    }
`
export const Logo = styled.div`
    cursor : pointer;
`