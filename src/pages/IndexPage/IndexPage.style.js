import styled from 'styled-components'

export const MainPageMenuWrapper = styled.div`
    @media screen and (max-width : 574px){
        display : flex;
        margin : 0 auto;
    }

`
export const LeftSection = styled.div`
    @media screen and (max-width : 574px){
        order : 1;
        width : 90%;
        margin : 0 auto;
    }

`
export const TopSection = styled.div`
    @media screen and (max-width : 574px){
        order : 2;
        width : 100%;
    }
`
export const RightBottomLeftSection = styled.div`
    width : 370px;
    @media screen and (max-width : 574px){
        width : 90%;
        margin : 0 auto;
        order : 3;
    }
`
export const RightTopSection = styled.div`
    width : 660px;
    @media screen and (max-width : 574px){
        width : 90%;
        margin : 0 auto;
        order : 4;
    }

`
export const RightBottomRightSection = styled.div`
    width : 275px;
    @media screen and (max-width : 574px){
        width : 90%;
        margin : 0 auto;
        order : 5;
    }

`

export const ThridFifthWrapper = styled.div`
    display : flex;
    flex-wrap : wrap;
    gap : 16px;
    @media screen and (max-width : 574px){
        width : 100%;
        flex-direction : column;
        order : 9999;
    }
`

export const RightSection = styled.div`
    display : flex;
    gap : 16px;
    width : 670px;
    flex-wrap : wrap;
    @media screen and (max-width : 574px){
        width : 100%;
        order : 9999;
    }
`
export const IndexPageMenu = styled.div`
    display : flex;
    width : 1156px;
    gap : 16px;
    flex-wrap : wrap;
    @media screen and (max-width : 574px){
        width : 100%;
        flex-direction : column;
        margin : 0 auto;
        order : 1;
    }
`
export const MainMenuBrowserWrapper = styled.div`
    display : flex;
    flex-direction : column;
    gap : 16px;
    width : 1146px;
    margin : 0 auto;
    margin-bottom : 90px;
    @media screen and (max-width : 574px){
        width : 100%;
    }
`