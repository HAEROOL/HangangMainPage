import React from 'react'
import styled from 'styled-components'
const Dummy = styled.div`
    width : 90%;
    margin : 0 auto;
    height : 1000px;
    align-items : center;
    text-align : center;
`
function TestComp(){
    return(<Dummy>dummy Page</Dummy>)
}

export default TestComp