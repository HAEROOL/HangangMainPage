import React from 'react'
import { StyledLink,DepartmentBrowserWrapper,DepartmentList, Department, DepartmentName, ComponentName, DepartmentListScroll } from './Department.style'
import { DEPARTMENT_LIST } from '../../static/indexPage/departmentList'

function DepartmentBrowser(){
    return (
        <DepartmentBrowserWrapper>
            <ComponentName>학부별 탐색</ComponentName>
            <DepartmentListScroll>
            <DepartmentList>
                    {DEPARTMENT_LIST.map((department) =>
                    <StyledLink to='/lectures' key={department.id}>
                        <Department url={department.src}>
                            <DepartmentName>{department.fullTitle}</DepartmentName>
                        </Department>
                    </StyledLink>
                    )}
            </DepartmentList>
            </DepartmentListScroll>
        </DepartmentBrowserWrapper>
    )
}

export default DepartmentBrowser