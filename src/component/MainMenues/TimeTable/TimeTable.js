import React from 'react'
import {ComponentName,TimeTableWrapper,LectureList,Lecture, Professor, EvaluationButton, LectureNameAndProfessor} from './TimeTable.style'
const lectureList = ['가가가가가가','나나나나나나','다다다다다','라라라라']
function TimeTable(){
    return (
        <TimeTableWrapper>
            <ComponentName>내 시간표</ComponentName>
                <LectureList>
                    {lectureList.map((lecture, id) => 
                        <Lecture key={id}>
                            <LectureNameAndProfessor>
                                {lecture}
                                <Professor>미정</Professor>
                            </LectureNameAndProfessor>
                            <EvaluationButton>평가하기</EvaluationButton>
                        </Lecture>
                    )}
                </LectureList>
            
        </TimeTableWrapper>
    )
}

export default TimeTable