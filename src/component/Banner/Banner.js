import React, { useState } from 'react'
import styled from 'styled-components'
import {PageHeader,MenuWrapper,MainMenu,MainMenuWrapper,LoginMenuWrapper,LoginMenu} from'./BannerStyle'
import {ReactComponent as HangangLogo} from '../../assets/images/HangangLogo.svg'
const menuList = ['홈','강의평','강의자료','시간표']
const DevideLine = styled.div`
    width : 1px;
    height : 15px;
    background : #dadada;
    @media screen and (max-width : 574px){
        display : None;
    }
`
function Banner(){
    const [nowPage,setPage] = useState(0)
    const ClickMainMenu = (e) =>{
        setPage(menuList.indexOf(e.target.textContent))
    }
    return (
        <PageHeader>
            <MenuWrapper>
                <MainMenuWrapper>
                    <HangangLogo/>
                    {menuList.map((menu,index) => <MainMenu key={index} onClick={(e) => ClickMainMenu(e)} isClicked={nowPage===menuList.indexOf(menu)?true:false}>{menu}</MainMenu>)}
                </MainMenuWrapper>
                <LoginMenuWrapper>
                    <LoginMenu>로그인</LoginMenu>
                    <DevideLine/>
                    <LoginMenu>회원가입</LoginMenu>
                </LoginMenuWrapper>
            </MenuWrapper>
        </PageHeader>
        
    )
}

export default Banner