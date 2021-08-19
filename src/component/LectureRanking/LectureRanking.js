import React, { useState } from 'react'
import { LectureInformaion,LectureContent,LectureOrder,AverageScore, Professor, Lecture,LectureWrapper,ComponentName, DepartmentName, DepartmentSelector, LectureRankingHeader, LectureRankingWrapper, RankingWrapper, LectureContainer } from './LectureRanking.style'
import {useGetLecturesQuery} from '../../api/hangangLecture'
import {DEPARTMENT_LIST} from '../../static/indexPage/departmentList'
function LectureRanking(){
    const [selectedDepartment,setDepartment] = useState({title:'교양',id:10})
    const {data, error, isLoading} = useGetLecturesQuery(selectedDepartment.id)
    const clickDepartment = (department) =>{
        if(selectedDepartment.id !== department.id){
            setDepartment({title:department.title,id:department.id})
        }
    }
    return (
        <LectureRankingWrapper>  
            <ComponentName>강의랭킹</ComponentName>
            <RankingWrapper>
                <LectureRankingHeader>
                    <DepartmentSelector>
                        {DEPARTMENT_LIST.map((department)=><DepartmentName key={department.id} onClick={() => clickDepartment(department)} isClicked={selectedDepartment.title===department.title}>{department.title}</DepartmentName>)}
                    </DepartmentSelector>
                </LectureRankingHeader>
                <LectureWrapper>
                {error ? (
                    <>예기치 못한 오류가 발생했습니다. 새로고침해주세요.</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                    {data.result.map(lecture => (
                        <LectureContainer key={lecture.id}>
                            <Lecture>
                                <LectureContent>
                                    <LectureOrder>
                                        0{data.result.indexOf(lecture)+1}
                                    </LectureOrder>
                                    <LectureInformaion>
                                        {lecture.name}
                                        <Professor>{lecture.professor}</Professor>
                                    </LectureInformaion>
                                </LectureContent>
                                <AverageScore>{parseFloat(lecture.total_rating).toFixed(1)}</AverageScore>
                            </Lecture>
                        </LectureContainer>
                        
                        ))}
                    </>
                ) : null}
                </LectureWrapper>
                
            </RankingWrapper>
        </LectureRankingWrapper>
        
    )
}

export default LectureRanking