import styled from 'styled-components'
export const LectureMaterialWrapper = styled.div`

`
export const LectureMaterial = styled.div`
    display : grid;
    height : 190px;
    width : 665px;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-gap : 16px;
    font-size : 12px;
`
export const FirstMaterial = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    border : solid 1px #eeeeee;
    border-radius : 8px;
`
export const SecondMaterial = styled.div`
    border : solid 1px #eeeeee;
    border-radius : 8px;
`
export const ThirdMaterial = styled.div`
    border : solid 1px #eeeeee;
    border-radius : 8px;
    grid-column : 4 / 5;
    grid-row : 1 / 3;
`
export const FourthMaterial = styled.div`
    border : solid 1px #eeeeee;
    border-radius : 8px;
`
export const FifthMaterial = styled.div`
    border : solid 1px #eeeeee;
    border-radius : 8px;
    grid-column : 2 / 4;
`