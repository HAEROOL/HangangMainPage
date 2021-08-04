import React from 'react'
import {ReactComponent as HangangFooterLogo} from '../../assets/images/HangangLogo_gray.svg'
import {ReactComponent as FacebookLogo} from '../../assets/images/FacebookLogo.svg'
import {ReactComponent as HomeLogo} from '../../assets/images/HomeLogo.svg'
import { CopyRight, FooterContentsWrapper, FooterMenu, FooterMenuWrapper, HangangMenu, HangangMenuWrapper, Logos, LogosMenuContainer, MainPageFooterWrapper } from './MainPageFooterStyle'
const hangangMenuList = ['강의평','강의자료','시간표']
const footerMenuList = ['BCSD Lab 바로가기','코리아텍 바로가기','아우누리 바로가기','개인정보 처리방침']
function MainPageFooter(){
    return (
        <MainPageFooterWrapper>
            <FooterContentsWrapper>
                <HangangMenuWrapper>
                    {hangangMenuList.map((menu, index) => <HangangMenu key={index}>{menu}</HangangMenu>)}
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