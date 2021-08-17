import React, { useState } from 'react' 
import {StyledLink,Logo,DevideLine,PageHeader,MenuWrapper,MainMenu,MainMenuWrapper,LoginMenuWrapper,LoginMenu} from'./Banner.style'
import {ReactComponent as HangangLogo} from '../../assets/images/banner/HangangLogo.svg'
import { MENU_LIST, MENU_LINK_LIST} from '../../static/indexPage/menuList'
import {useHistory, useLocation} from 'react-router-dom'
function Banner(){
    const location = useLocation()
    const [nowPage,setPage] = useState(0)
    const ClickMainMenu = (e) =>{
        setPage(MENU_LIST.indexOf(e.target.textContent))
    }
    const ClickLogo = () =>{
        setPage(0)
    }
    return (
        <PageHeader>
            <MenuWrapper>
                <MainMenuWrapper>
                    <StyledLink excat to='/'>
                        <Logo onClick={()=>ClickLogo()}>
                            <HangangLogo/>
                        </Logo>
                    </StyledLink>
                    {MENU_LIST.map((menu,id) => 
                    <StyledLink to={MENU_LINK_LIST[MENU_LIST.indexOf(menu)]} key={id}>
                        <MainMenu onClick={(e) => ClickMainMenu(e)} isClicked={nowPage===MENU_LIST.indexOf(menu)}>
                                {menu}
                            </MainMenu>
                    </StyledLink>)}

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