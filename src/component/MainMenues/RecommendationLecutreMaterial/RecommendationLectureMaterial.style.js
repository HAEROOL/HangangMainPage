import styled from 'styled-components'
export const LectureMaterialWrapper = styled.div`
    width : 660px;
    @media screen and (max-width:574px){
        width : 100%;
        height : 232px;
    }
`
export const LectureMaterial = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    text-align : center;
    color : #828282;
    height : 190px;
    width : 655px;
    border : 1px solid #eeeeee;
    border-radius : 8px;
    font-size : 12px;
    @media screen and (max-width:574px){
        width : 100%;
        font-size : 12px;
        color : #999999;
    }
`
export const ComponentName = styled.div`
    font-family : NotoSansKRLight;
    font-size : 16px;
    text-align : left;
    margin-bottom : 16px;
    @media screen and (max-width : 574px){
        width : 90%;
        margin : 0 auto;
        margin-bottom : 16px;
    }
`