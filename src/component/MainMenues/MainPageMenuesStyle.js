import styled from 'styled-components'

export const MainPageMenuWrapper = styled.div`
    display : grid;
    width : 1135px;
    height : 600px;
    margin : 0 auto;
    margin-bottom : 90px;
    @media screen and (max-width:360px){
        display : flex;
        flex-direction : column;
    }
`

export const FirstMaterial = styled.div`
    grid-column : 1 / 47;
    grid-row : 1 / 45;
    margin-right : 16px;
`
export const SecondMaterial = styled.div`
    grid-column : 47 / 119;
    grid-row : 1 / 19;
    margin-bottom : 32px;
`
export const ThirdMaterial = styled.div`
    grid-column : 47 / 89;
    grid-row :  19 / 55;
    margin-right : 16px;
`
export const FourthMaterial = styled.div`
    grid-column : 89 / 119;
    grid-row : 19 / 55;
`