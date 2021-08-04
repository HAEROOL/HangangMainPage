import React from 'react'
import { ComponentName } from '../LectureRanking/LectureRankingStyle'
import { CurrentLectureWrapper,LectureList, Lecture, LectureNameAndProfessor, Professor, AverageScore, } from './CurrentLectureStyle'
const lectureList = ['가가가가가가','나나나나나나','다다다다다','라라라라']
function CurrentLecture(){
    return (
        <CurrentLectureWrapper>
            <ComponentName>최근 본 강의</ComponentName>
            <LectureList>
                {lectureList.map((lecture, index) => 
                        <Lecture key={index}>
                            <LectureNameAndProfessor>
                                {lecture}
                                <Professor>미정</Professor>
                            </LectureNameAndProfessor>
                            <AverageScore>0.0</AverageScore>
                        </Lecture>
                    )}
            </LectureList>
        </CurrentLectureWrapper>
    )
}

export default CurrentLecture