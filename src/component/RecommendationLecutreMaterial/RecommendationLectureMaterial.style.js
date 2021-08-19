import styled from 'styled-components'
import { UnfocusColor,PlaceholderColor,BaseColor,MobileWidth } from '../../static/shared/commonStyle'
export const LectureMaterialWrapper = styled.div`
    width : 660px;
    @media screen and (max-width : ${MobileWidth}){
        width : 100%;
        height : 232px;
    }
`
export const LectureMaterial = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    text-align : center;
    color : ${UnfocusColor};
    height : 190px;
    width : 655px;
    border : 1px solid ${BaseColor};
    border-radius : 8px;
    font-size : 12px;
    @media screen and (max-width : ${MobileWidth}){
        width : 100%;
        font-size : 12px;
        color : ${PlaceholderColor};
    }
`
export const ComponentName = styled.div`
    font-family : NotoSansKRLight;
    font-size : 16px;
    text-align : left;
    margin-bottom : 16px;
    @media screen and (max-width : ${MobileWidth}){
        width : 90%;
        margin : 0;
        margin-bottom : 16px;
    }
`