import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import { SignatureColor,PlaceholderColor,BackgroundColor,FooterColor,MobileWidth } from '../../static/shared/commonStyle'
export const StyledLink = styled(NavLink)`
    text-decoration : none;
    color : ${PlaceholderColor};
    @media screen and (max-width : ${MobileWidth}){
        display : flex;
        flex-direction : column;
        height : 100%;
        justify-content : center;
        align-items : center;
        color : ${PlaceholderColor};
        font-size: 11px;
        width : 20%;
        &.selected{
            color : ${SignatureColor};
            border-top : ${SignatureColor} 2px solid;
            margin-top : -2px;
            path{
                stroke:${SignatureColor};
            }
        }
    }
`
export const MainPageFooterWrapper = styled.div`
    width : 100%;
    height : 203px;
    background : ${BackgroundColor};
    @media screen and (max-width : ${MobileWidth}){
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
    @media screen and (max-width : ${MobileWidth}){
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
    @media screen and (max-width : ${MobileWidth}){
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
    @media screen and (max-width : ${MobileWidth}){
        display : None;
    }
`
export const MobileMenuWrapper = styled.div`
    display : None;
    @media screen and (max-width : ${MobileWidth}){
        display : flex;
        width : 100%;
        height : 100%;
        justify-content : space-between;
    }
`
export const HangangMenu = styled.div`
    color : white;
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
    color : ${FooterColor};
    margin : 0 auto;
    padding : 4px 14px;
    border-radius : 20px;
    border : 1px solid ${FooterColor};
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
    @media screen and (max-width : ${MobileWidth}){
        display : None;
    }
`
export const CopyRight = styled.div`
    width : 289px;
    height : 16px;
    font-size : 10px;
    color : ${FooterColor};
    @media screen and (max-width : ${MobileWidth}){
        display : None;
    }
`
export const MenuIcon = styled.div`
    background : url(${props => props.url});
    width : 24px;
    height :24px;
`