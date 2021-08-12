import styled from 'styled-components'

export const MainPageFooterWrapper = styled.div`
    width : 100%;
    height : 203px;
    background : #3e3e3e;
    @media screen and (max-width : 574px){
        height : 72px;
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
export const HangangMenu = styled.a`
    color : #ffffff;
    font-size : 15px;
    cursor : pointer;
    @media screen and (max-width : 574px){
        display : flex;
        height : 100%;
        width : 18%;
        align-items : center;
        margin-bottom : ${props => props.isClicked?'2px':''};
        border-top : ${props => props.isClicked?'#238bfe 2px solid':''};
        color : ${props => props.isClicked?'#238bfe':'#999999'};
        font-size: 11px;
    }
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
`
export const Logos = styled.a`
    display : flex;
    width : 72px;
    justify-content : space-between;
    cursor : pointer;
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