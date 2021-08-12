import React, { useState } from 'react'
import {ReactComponent as HangangFooterLogo} from '../../assets/images/footer/HangangLogo_gray.svg'
import {ReactComponent as FacebookLogo} from '../../assets/images/footer/FacebookLogo.svg'
import {ReactComponent as HomeLogo} from '../../assets/images/footer/HomeLogo.svg'
import { MobileMenuWrapper,MenuWrapper, CopyRight, FooterContentsWrapper, FooterMenu, FooterMenuWrapper, HangangMenu, HangangMenuWrapper, Logos, LogosMenuContainer, MainPageFooterWrapper } from './MainPageFooterStyle'
const hangangMenuList = ['강의평','강의자료','시간표']
const hangangMobileMenuList = ['홈','강의평','강의자료','시간표','마이페이지']
const footerMenuList = ['BCSD Lab 바로가기','코리아텍 바로가기','아우누리 바로가기','개인정보 처리방침']
function MainPageFooter(){
    const [nowMenu,setMenu] = useState(0)
    const ClickMenu = (e) =>{
        setMenu(hangangMobileMenuList.indexOf(e.target.textContent))
    }
    return (
        <MainPageFooterWrapper>
            <FooterContentsWrapper>
                <HangangMenuWrapper>
                    <MenuWrapper>
                        {hangangMenuList.map((menu, index) => <HangangMenu key={index}>{menu}</HangangMenu>)}
                    </MenuWrapper>
                    <MobileMenuWrapper>
                        {hangangMobileMenuList.map((menu, index) => <HangangMenu key={index} isClicked={nowMenu===hangangMobileMenuList.indexOf(menu)?true:false} onClick={(e)=>ClickMenu(e)}>{menu}</HangangMenu>)}
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