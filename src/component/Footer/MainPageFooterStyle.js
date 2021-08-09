import styled from 'styled-components'

export const MainPageFooterWrapper = styled.div`
    width : 100vw;
    height : 203px;
    background : #3e3e3e;
    @media screen and (max-width : 574px){
        display : None;
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

`
export const HangangMenuWrapper = styled.div`
    width : 295px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`
export const HangangMenu = styled.a`
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
    width : 154px;
    padding 3px 6px;
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
`
export const CopyRight = styled.div`
    width : 289px;
    height : 16px;
    font-size : 10px;
    color : #9fa9b3;
`