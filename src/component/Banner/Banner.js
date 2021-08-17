import React, { useState } from 'react' 
import {StyledLink,Logo,DevideLine,PageHeader,MenuWrapper,MainMenu,MainMenuWrapper,LoginMenuWrapper,LoginMenu} from'./Banner.style'
import {ReactComponent as HangangLogo} from '../../assets/images/banner/HangangLogo.svg'
import {Link} from 'react-router-dom'
function Banner(){
    return (
        <PageHeader>
            <MenuWrapper>
                <MainMenuWrapper>
                    <Link  to='/'>
                        <Logo>
                            <HangangLogo/>
                        </Logo>
                    </Link>
                    <StyledLink activeClassName='selected' exact to='/'>
                        <MainMenu>
                            홈
                        </MainMenu>
                    </StyledLink>
                    <StyledLink activeClassName='selected' to='/lectures'>
                        <MainMenu>
                            강의평
                        </MainMenu>
                    </StyledLink>
                    <StyledLink activeClassName='selected' to='/resources'>
                        <MainMenu>
                            강의자료
                        </MainMenu>
                    </StyledLink>
                    <StyledLink activeClassName='selected' to='/timetable'>
                        <MainMenu>
                            시간표
                        </MainMenu>
                    </StyledLink>
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