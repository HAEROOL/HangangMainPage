import React, { useState } from 'react'
import { ComponentName, DepartmentName, DepartmentSelector, LectureRankingHeader, LectureRankingWrapper, RankingWrapper } from './LectureRanking.style'
import {useGetLecturesQuery} from '../../../api/hangangLecture'
import {DepartmentList} from './static'
function LectureRanking(){
    const [selectedDepartment,setDepartment] = useState(10)
    const {data, error, isLoading} = useGetLecturesQuery(selectedDepartment)
    console.log(data)
    // const [lectureList,setLectureList] = useState(data.result)
    const ClickDepartment = (e) =>{
        setDepartment(DepartmentList.indexOf(e.target.textContent))
    }
    console.log(useGetLecturesQuery)
    return (
        <LectureRankingWrapper>  
            <ComponentName>강의랭킹</ComponentName>
            <RankingWrapper>
                <LectureRankingHeader>
                    <DepartmentSelector>
                        {DepartmentList.map((department,id)=><DepartmentName key={id} value={department} onClick={e => ClickDepartment(e)} isClicked={selectedDepartment===DepartmentList.indexOf(department)?true:false}>{department}</DepartmentName>)}
                    </DepartmentSelector>
                </LectureRankingHeader>
            </RankingWrapper>
        </LectureRankingWrapper>
        
    )
}

export default LectureRanking