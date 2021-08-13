import React from 'react'
import { ComponentName } from '../LectureRanking/LectureRankingStyle'
import { CurrentLectureWrapper,LectureList, Lecture, LectureNameAndProfessor, Professor, AverageScore, } from './CurrentLectureStyle'
const currentLectureList = JSON.parse(localStorage.getItem('recentlyViewedLectures'))
function CurrentLecture(){
    try{
        return (
            <CurrentLectureWrapper>
                <ComponentName>최근 본 강의</ComponentName>
                <LectureList>
                    {currentLectureList.map((lecture, id) => 
                            <Lecture key={id}>
                                <LectureNameAndProfessor>
                                    {lecture.name}
                                    <Professor>{lecture.professor}</Professor>
                                </LectureNameAndProfessor>
                                <AverageScore>{parseFloat(lecture.total_rating).toFixed(1)}</AverageScore>
                            </Lecture>
                        )}
                </LectureList>
            </CurrentLectureWrapper>
        )}catch(e){
            return (
                <CurrentLectureWrapper>
                    <ComponentName>최근 본 강의</ComponentName>
                    <LectureList> </LectureList>
                </CurrentLectureWrapper>
            )}

}

export default CurrentLecture