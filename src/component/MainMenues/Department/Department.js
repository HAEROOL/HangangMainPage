import React from 'react'
import { DepartmentBrowserWrapper,DepartmentListWrapper, Department, DepartmentName, ComponentName, Scroll } from './Department.style'
import {DepartmentList,DepartmentNameList} from './static'
import { Link } from 'react-router-dom'
function DepartmentBrowser(){
    return (
        <DepartmentBrowserWrapper>
            <ComponentName>학부별 탐색</ComponentName>
            <Scroll>
            <DepartmentListWrapper>
                    {DepartmentList.map((department,id) =>
                    <Link to='/dummy'  style={{textDecoration:'none'}} key={id}>
                        <Department url={department}>
                            <DepartmentName>{DepartmentNameList[DepartmentList.indexOf(department)]}</DepartmentName>
                        </Department>
                    </Link>
                    )}
            </DepartmentListWrapper>
            </Scroll>
        </DepartmentBrowserWrapper>
    )
}

export default DepartmentBrowser