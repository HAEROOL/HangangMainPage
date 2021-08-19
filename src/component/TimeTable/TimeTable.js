import React, { useState } from 'react'
import {StyledLink,NoTimeTable,GoTimeTableButton,ComponentName,TimeTableWrapper,LectureList,Lecture, Professor, EvaluationButton, LectureNameAndProfessor} from './TimeTable.style'

function TimeTable(){
    const [lectureList] = useState(null)
    return (
        <TimeTableWrapper>
            <ComponentName>내 시간표</ComponentName>
                <LectureList>
                    {lectureList?(
                        lectureList.map((lecture, id) => 
                            <Lecture key={id}>
                                <LectureNameAndProfessor>
                                    {lecture}
                                    <Professor>미정</Professor>
                                </LectureNameAndProfessor>
                                <EvaluationButton>평가하기</EvaluationButton>
                            </Lecture>
                        )
                    ):(
                        <NoTimeTable>
                            아직 작성한 시간표가 없습니다.
                            <StyledLink to='/timetable'>
                                 <GoTimeTableButton>작성하러가기</GoTimeTableButton>
                            </StyledLink>
                        </NoTimeTable>
                    )}
                </LectureList>
        </TimeTableWrapper>
    )
}

export default TimeTable