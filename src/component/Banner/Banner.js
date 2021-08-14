import React, { useState } from 'react'
import {DevideLine,PageHeader,MenuWrapper,MainMenu,MainMenuWrapper,LoginMenuWrapper,LoginMenu} from'./Banner.style'
import {ReactComponent as HangangLogo} from '../../assets/images/banner/HangangLogo.svg'
import {menuList,menuLinkList} from './static'
import { Link } from 'react-router-dom'
function Banner(){
    const [nowPage,setPage] = useState(0)
    const ClickMainMenu = (e) =>{
        setPage(menuList.indexOf(e.target.textContent))
    }
    const ClickLogo = () =>{
        setPage(0)
    }
    return (
        <PageHeader>
            <MenuWrapper>
                <MainMenuWrapper>
                    <Link to={'/'}>
                        <HangangLogo style={{cursor:'pointer'}} onClick={()=>ClickLogo()}/>
                    </Link>
                    {menuList.map((menu,index) => 
                    <Link style={{textDecoration:'none'}}to={menuLinkList[menuList.indexOf(menu)]}>
                        <MainMenu key={index} onClick={(e) => ClickMainMenu(e)} isClicked={nowPage===menuList.indexOf(menu)}>
                                {menu}
                            </MainMenu>
                    </Link>)}
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