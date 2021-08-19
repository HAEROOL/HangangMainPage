import React from 'react' 
import {Wrapp,FocusLine,StyledLink,Logo,DevideLine,PageHeader,MenuWrapper,MainMenu,MainMenuWrapper,LoginMenuWrapper,LoginMenu} from'./Banner.style'
import {ReactComponent as HangangLogo} from '../../assets/images/banner/HangangLogo.svg'
import {Link, useLocation} from 'react-router-dom'
function Banner(){
    const location = useLocation()
    const locationNumber = (location) =>{
        switch(location){
            case  '/':
                return 0
            case '/lectures':
                return 1
            case '/resources':
                return 2
            case '/timetable':
                return 3
            default:
                return 0
        }
    }
    return (
        <PageHeader>
            <MenuWrapper>
                <Wrapp>
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
                <FocusLine location={locationNumber(location.pathname)}/>
                </Wrapp>
                <LoginMenuWrapper>
                    <StyledLink to='/login'>
                        <LoginMenu>로그인</LoginMenu>
                    </StyledLink>
                    <DevideLine/>
                    <StyledLink to='/signup'>
                        <LoginMenu>회원가입</LoginMenu>
                    </StyledLink>
                    
                    
                </LoginMenuWrapper>
            </MenuWrapper>
        </PageHeader>
    )
}

export default Banner