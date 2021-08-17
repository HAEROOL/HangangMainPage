import React from 'react'
import { DepartmentBrowserWrapper,DepartmentListWrapper, Department, DepartmentName, ComponentName, Scroll } from './Department.style'
import { DEPARTMENT_LIST } from '../../../static/indexPage/departmentList'
import { Link } from 'react-router-dom'
function DepartmentBrowser(){
    return (
        <DepartmentBrowserWrapper>
            <ComponentName>학부별 탐색</ComponentName>
            <Scroll>
            <DepartmentListWrapper>
                    {DEPARTMENT_LIST.map((department,id) =>
                    <Link to='/dummy'  style={{textDecoration:'none'}} key={id}>
                        <Department url={department.src}>
                            <DepartmentName>{department.title}</DepartmentName>
                        </Department>
                    </Link>
                    )}
            </DepartmentListWrapper>
            </Scroll>
        </DepartmentBrowserWrapper>
    )
}

export default DepartmentBrowser