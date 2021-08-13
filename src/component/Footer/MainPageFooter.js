import React, { useState } from 'react'
import {ReactComponent as HangangFooterLogo} from '../../assets/images/footer/HangangLogo_gray.svg'
import {ReactComponent as FacebookLogo} from '../../assets/images/footer/FacebookLogo.svg'
import {ReactComponent as HomeLogo} from '../../assets/images/footer/HomeLogo.svg'
import { MenuIcon,MobileMenuWrapper,MenuWrapper, CopyRight, FooterContentsWrapper, FooterMenu, FooterMenuWrapper, HangangMenu, HangangMenuWrapper, Logos, LogosMenuContainer, MainPageFooterWrapper } from './MainPageFooter.style'
import {hangangMenuList,hangangMobileMenuList, UnclickedImageList,ClickedImageList,footerMenuList} from './static'
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