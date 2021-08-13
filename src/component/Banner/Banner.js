import React, { useState } from 'react'
import {DevideLine,PageHeader,MenuWrapper,MainMenu,MainMenuWrapper,LoginMenuWrapper,LoginMenu} from'./Banner.style'
import {ReactComponent as HangangLogo} from '../../assets/images/banner/HangangLogo.svg'
import {menuList} from './static'

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