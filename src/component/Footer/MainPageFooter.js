import React from 'react'
import {ReactComponent as HangangFooterLogo} from '../../assets/images/footer/HangangLogo_gray.svg'
import {ReactComponent as FacebookLogo} from '../../assets/images/footer/FacebookLogo.svg'
import {ReactComponent as HomeLogo} from '../../assets/images/footer/HomeLogo.svg'
import { StyledLink,Logo,MobileMenuWrapper,MenuWrapper, CopyRight, FooterContentsWrapper, FooterMenu, FooterMenuWrapper, HangangMenu, HangangMenuWrapper, Logos, LogosMenuContainer, MainPageFooterWrapper } from './MainPageFooter.style'
import {linkList} from './static'
import { FOOTER_MENU_LIST} from '../../static/indexPage/menuList'
import {ReactComponent as HomeIcon} from '../../assets/images/footer/footer_reponsive/Home_gray.svg'
import {ReactComponent as ReviewIcon} from '../../assets/images/footer/footer_reponsive/Review_gray.svg'
import {ReactComponent as LectureMaterialIcon} from '../../assets/images/footer/footer_reponsive/LectureMaterial_gray.svg'
import {ReactComponent as TimetableIcon} from '../../assets/images/footer/footer_reponsive/Timetable_gray.svg'
import {ReactComponent as MyPageIcon} from '../../assets/images/footer/footer_reponsive/MyPage_gray.svg'

function MainPageFooter(){
    return (
        <MainPageFooterWrapper>
            <FooterContentsWrapper>
                <HangangMenuWrapper>
                    <MenuWrapper>
                        <StyledLink to='/'>
                            <HangangMenu>
                                홈
                            </HangangMenu>
                        </StyledLink>
                        <StyledLink to='/lectures'>
                            <HangangMenu>
                                강의평
                            </HangangMenu>
                        </StyledLink>
                        <StyledLink to='/resources'>
                            <HangangMenu>
                                강의자료
                            </HangangMenu>
                        </StyledLink>
                        <StyledLink to='/timetable'>
                            <HangangMenu>
                                시간표
                            </HangangMenu>
                        </StyledLink>
                    </MenuWrapper>
                    <MobileMenuWrapper>
                        <StyledLink activeClassName='selected' exact to='/'>
                            <HomeIcon />
                            홈
                        </StyledLink>
                        <StyledLink activeClassName='selected' to='/lectures'>
                            <ReviewIcon/>
                            강의평
                        </StyledLink>
                        <StyledLink activeClassName='selected' to='/resources'>
                            <LectureMaterialIcon/>
                            강의자료
                        </StyledLink>
                        <StyledLink activeClassName='selected' to='/timetable'>
                            <TimetableIcon/>
                            시간표
                        </StyledLink>
                        <StyledLink activeClassName='selected' to='/my'>
                            <MyPageIcon/>
                            마이페이지
                        </StyledLink>
                    </MobileMenuWrapper>
                </HangangMenuWrapper>
                <LogosMenuContainer>
                    <HangangFooterLogo/>
                    <FooterMenuWrapper>
                        {FOOTER_MENU_LIST.map((menu, index) => <FooterMenu key={index} href={linkList[FOOTER_MENU_LIST.indexOf(menu)]} target='_blank'>{menu}</FooterMenu>)}
                    </FooterMenuWrapper>
                    <Logos>
                        <Logo href='https://www.facebook.com/bcsdlab/' target='_blank'>
                            <FacebookLogo/>
                        </Logo>
                        <Logo href='/' target='_blank'>
                            <HomeLogo/>
                        </Logo>
                    </Logos>
                </LogosMenuContainer> 
                <CopyRight>COPYRIGHT © 2021 BCSD LAB ALL RIGHTS RESERVED.</CopyRight>
            </FooterContentsWrapper>
            
        </MainPageFooterWrapper>
    )
}

export default MainPageFooter