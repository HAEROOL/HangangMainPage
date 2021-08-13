import React, { useState } from 'react'
import {ReactComponent as HangangFooterLogo} from '../../assets/images/footer/HangangLogo_gray.svg'
import {ReactComponent as FacebookLogo} from '../../assets/images/footer/FacebookLogo.svg'
import {ReactComponent as HomeLogo} from '../../assets/images/footer/HomeLogo.svg'
import { Logo,MenuIcon,MobileMenuWrapper,MenuWrapper, CopyRight, FooterContentsWrapper, FooterMenu, FooterMenuWrapper, HangangMenu, HangangMenuWrapper, Logos, LogosMenuContainer, MainPageFooterWrapper } from './MainPageFooter.style'
import {hangangMenuList,hangangMobileMenuList, UnclickedImageList,ClickedImageList,footerMenuList, linkList} from './static'
function MainPageFooter(){
    const [nowMenu,setMenu] = useState(0)
    const ClickMenu = (e) =>{
        e.stopPropagation();
        if (nowMenu !== e.target.id){
            setMenu(hangangMobileMenuList.indexOf(e.target.id))
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
                            <HangangMenu key={index} id={menu} isClicked={nowMenu===hangangMobileMenuList.indexOf(menu)} onClick={(e)=>ClickMenu(e)}>
                                <MenuIcon id={menu} url={nowMenu===hangangMobileMenuList.indexOf(menu)?ClickedImageList[hangangMobileMenuList.indexOf(menu)]:UnclickedImageList[hangangMobileMenuList.indexOf(menu)]}/>
                                {menu}
                            </HangangMenu>)}
                    </MobileMenuWrapper>
                </HangangMenuWrapper>
                <LogosMenuContainer>
                    <HangangFooterLogo/>
                    <FooterMenuWrapper>
                        {footerMenuList.map((menu, index) => <FooterMenu key={index} href={linkList[footerMenuList.indexOf(menu)]} target='_blank'>{menu}</FooterMenu>)}
                    </FooterMenuWrapper>
                    <Logos>
                        <Logo href={linkList[4]} target='_blank'>
                            <FacebookLogo/>
                        </Logo>
                        <Logo href={'/'} target='_blank'>
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