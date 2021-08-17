import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
export const StyledLink = styled(NavLink)`
    text-decoration : none;
    color : #999999;
    @media screen and (max-width : 574px){
        display : flex;
        flex-direction : column;
        height : 100%;
        justify-content : center;
        align-items : center;
        color : #999999;
        font-size: 11px;
        width : 20%;
        &.selected{
            color : #238bfe;
            border-top : #238bfe 2px solid;
            margin-top : -2px;
            path{
                stroke:#238bfe;
            }
        }
    }
`
export const MainPageFooterWrapper = styled.div`
    width : 100%;
    height : 203px;
    background : #3e3e3e;
    @media screen and (max-width : 574px){
        height : 72px;
        position : fixed;
        bottom:0;
    }
`
export const FooterContentsWrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    align-items : center;
    margin : 0 auto;
    width : 1280px;
    height : 203px;
    background : #3e3e3e;
    @media screen and (max-width : 574px){
        width : 100%;
        height : 100%;
        background : white;
    }
`
export const HangangMenuWrapper = styled.div`
    width : 295px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    @media screen and (max-width : 574px){
        width : 100%;
        height : 100%;
        justify-content : space-around;
    }
`
export const MenuWrapper = styled.div`
    width : 295px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    @media screen and (max-width : 574px){
        display : None;
    }
`
export const MobileMenuWrapper = styled.div`
    display : None;
    @media screen and (max-width : 574px){
        display : flex;
        width : 100%;
        height : 100%;
        justify-content : space-between;
    }
`
export const HangangMenu = styled.div`
    color : #ffffff;
    font-size : 15px;
    cursor : pointer;
`

export const FooterMenuWrapper = styled.div`
    display : flex;
    width : 693px;
    justify-content : space-between;
`
export const FooterMenu = styled.a`
    display : flex;
    justify-content : center;
    font-size : 15px;
    align-items : center;
    color : #9fa9b3;
    margin : 0 auto;
    padding : 4px 14px;
    border-radius : 20px;
    border : 1px solid #9fa9b3;
    cursor : pointer;
    text-decoration: none;
`
export const Logos = styled.div`
    display : flex;
    width : 72px;
    justify-content : space-between;
    cursor : pointer;
`
export const Logo = styled.a`

`
export const LogosMenuContainer = styled.div`
    display : flex;
    width : 1135px;
    justify-content : space-between;
    @media screen and (max-width : 574px){
        display : None;
    }
`
export const CopyRight = styled.div`
    width : 289px;
    height : 16px;
    font-size : 10px;
    color : #9fa9b3;
    @media screen and (max-width : 574px){
        display : None;
    }
`
export const MenuIcon = styled.div`
    background : url(${props => props.url});
    width : 24px;
    height :24px;
`