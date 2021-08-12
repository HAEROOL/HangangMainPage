import React, { useState } from 'react'
import {ReactComponent as HangangFooterLogo} from '../../assets/images/footer/HangangLogo_gray.svg'
import {ReactComponent as FacebookLogo} from '../../assets/images/footer/FacebookLogo.svg'
import {ReactComponent as HomeLogo} from '../../assets/images/footer/HomeLogo.svg'
import Home from '../../assets/images/footer/footer_reponsive/Home_gray.svg'
import ClickedHome from '../../assets/images/footer/footer_reponsive/Home.svg'
import Review from '../../assets/images/footer/footer_reponsive/Review_gray.svg'
import ClickedReview from '../../assets/images/footer/footer_reponsive/Review.svg'
import LectureMaterial from '../../assets/images/footer/footer_reponsive/LectureMaterial_gray.svg'
import ClickedLectureMaterial from '../../assets/images/footer/footer_reponsive/LectureMaterial.svg'
import Timetable from '../../assets/images/footer/footer_reponsive/Timetable_gray.svg'
import ClickedTimetable from '../../assets/images/footer/footer_reponsive/Timetable.svg'
import MyPage from '../../assets/images/footer/footer_reponsive/MyPage_gray.svg'
import ClickedMyPage from '../../assets/images/footer/footer_reponsive/MyPage.svg'
import { MenuIcon,MobileMenuWrapper,MenuWrapper, CopyRight, FooterContentsWrapper, FooterMenu, FooterMenuWrapper, HangangMenu, HangangMenuWrapper, Logos, LogosMenuContainer, MainPageFooterWrapper } from './MainPageFooterStyle'
const hangangMenuList = ['강의평','강의자료','시간표']
const hangangMobileMenuList = ['홈','강의평','강의자료','시간표','마이페이지']
const UnclickedImageList = [Home,Review,LectureMaterial,Timetable,MyPage]
const ClickedImageList = [ClickedHome,ClickedReview,ClickedLectureMaterial,ClickedTimetable,ClickedMyPage]
const footerMenuList = ['BCSD Lab 바로가기','코리아텍 바로가기','아우누리 바로가기','개인정보 처리방침']
function MainPageFooter(){
    const [nowMenu,setMenu] = useState(0)
    const ClickMenu = (e) =>{
        if (nowMenu !== e.target.textContent){
            console.log(e)
            setMenu(hangangMobileMenuList.indexOf(e.target.textContent))
        }
        
    }
    return (
        <MainPageFooterWrapper>
            <FooterContentsWrapper>
                <HangangMenuWrapper>
                    <MenuWrapper>
                        {hangangMenuList.map((menu, index) => <HangangMenu key={index}>{menu}</HangangMenu>)}
                    </MenuWrapper>
                    <MobileMenuWrapper>
                        {hangangMobileMenuList.map((menu, index) => 
                            <HangangMenu key={index} isClicked={nowMenu===hangangMobileMenuList.indexOf(menu)?true:false} onClick={(e)=>ClickMenu(e)}>
                                <MenuIcon url={nowMenu===hangangMobileMenuList.indexOf(menu)?ClickedImageList[hangangMobileMenuList.indexOf(menu)]:UnclickedImageList[hangangMobileMenuList.indexOf(menu)]}/>
                                {menu}
                            </HangangMenu>)}
                    </MobileMenuWrapper>
                </HangangMenuWrapper>
                <LogosMenuContainer>
                    <HangangFooterLogo/>
                    <FooterMenuWrapper>
                        {footerMenuList.map((menu, index) => <FooterMenu key={index}>{menu}</FooterMenu>)}
                    </FooterMenuWrapper>
                    <Logos>
                        <FacebookLogo/>
                        <HomeLogo/>
                    </Logos>
                </LogosMenuContainer> 
                <CopyRight>COPYRIGHT © 2021 BCSD LAB ALL RIGHTS RESERVED.</CopyRight>
            </FooterContentsWrapper>
            
        </MainPageFooterWrapper>
    )
}

export default MainPageFooter