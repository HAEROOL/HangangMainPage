import styled from 'styled-components'

export const PageHeader = styled.header`
    width : 1135px;
    height : 79px;
    display : flex;
    justify-content : center;
    border-bottom : solid 1px #eeeeee;
    margin : 0 auto;
`
export const MenuWrapper = styled.nav`
    width : 1135px;
    height : 79px;
    display : flex;
    align-items : center;
    justify-content : space-between;
    text-align : center;
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
    :hover{
        cursor : pointer;
    }
    border-bottom : ${props=>props.isClicked?'#238bfe 2px solid;':''};
    @media screen and (max-width:600px){
        display : None;
    }
`

export const LoginMenu = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 98px;
    height : 15px;
    color : #238bfe;
    font-size : 17px;
    :hover{
        cursor : pointer;
    }
    @media screen and (max-width:600px){
        display : None;
    }
`