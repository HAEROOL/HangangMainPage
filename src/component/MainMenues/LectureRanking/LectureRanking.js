import React, { useState } from 'react'
import { ComponentName, DepartmentName, DepartmentSelector, LectureRankingHeader, LectureRankingWrapper, RankingWrapper } from './LectureRankingStyle'
const DepartmentList = ['교양','HRD','기계','디건','메카','산경','에신화','전전통','컴공','융합']
function LectureRanking(){
    const [selectedDepartment,setDepartment] = useState(0)
    const ClickDepartment = (e) =>{
        setDepartment(DepartmentList.indexOf(e.target.textContent))
    }
    return (
        <LectureRankingWrapper>  
            <ComponentName>강의랭킹</ComponentName>
            <RankingWrapper>
                <LectureRankingHeader>
                    <DepartmentSelector>
                        {DepartmentList.map((department,index)=><DepartmentName key={index} value={department} onClick={e => ClickDepartment(e)} isClicked={selectedDepartment===DepartmentList.indexOf(department)?true:false}>{department}</DepartmentName>)}
                    </DepartmentSelector>
                </LectureRankingHeader>
                
            </RankingWrapper>
        </LectureRankingWrapper>
        
    )
}

export default LectureRanking