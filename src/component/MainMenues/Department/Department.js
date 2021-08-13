import React from 'react'
import { DepartmentBrowserWrapper,DepartmentListWrapper, Department, DepartmentName, ComponentName, Scroll } from './Department.style'
import {DepartmentList,DepartmentNameList} from './static'
function DepartmentBrowser(){
    return (
        <DepartmentBrowserWrapper>
            <ComponentName>학부별 탐색</ComponentName>
            <Scroll>
            <DepartmentListWrapper>
                    {DepartmentList.map((department,id) =>
                        <Department url={department} key={id}>
                            <DepartmentName>{DepartmentNameList[DepartmentList.indexOf(department)]}</DepartmentName>
                        </Department>
                    )}
            </DepartmentListWrapper>
            </Scroll>
            
        </DepartmentBrowserWrapper>
    )
}

export default DepartmentBrowser