import React, { useState } from 'react'
import {PageHeader,MenuWrapper,MainMenu,MainMenuWrapper,LoginMenuWrapper,PageBanner,LoginMenu} from'./BannerStyle'
import {ReactComponent as HangangLogo} from '../../assets/images/HangangLogo.svg'
const menuList = ['홈','강의평','강의자료','시간표']
function Banner(){
    const [nowPage,setPage] = useState(0)
    const ClickMainMenu = (e) =>{
        setPage(menuList.indexOf(e.target.textContent))
    }
    return (
        <PageHeader>
            <MenuWrapper>
                <MainMenuWrapper>
                    <MainMenu><HangangLogo/></MainMenu>
                    {menuList.map((menu,index) => <MainMenu key={index} onClick={(e) => ClickMainMenu(e)} isClicked={nowPage===menuList.indexOf(menu)?true:false}>{menu}</MainMenu>)}
                </MainMenuWrapper>
                <LoginMenuWrapper>
                    <LoginMenu style={{'borderRight' : '1px solid #dadada'}}>로그인</LoginMenu>
                    <LoginMenu>회원가입</LoginMenu>
                </LoginMenuWrapper>
            </MenuWrapper>
        </PageHeader>
        
    )
}

export default Banner