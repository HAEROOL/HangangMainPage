import React, { useState } from 'react'
import {NoTimeTable,GoTimeTableButton,ComponentName,TimeTableWrapper,LectureList,Lecture, Professor, EvaluationButton, LectureNameAndProfessor} from './TimeTable.style'
import {Link} from 'react-router-dom'
function TimeTable(){
    const [lectureList,setLecture] = useState(null)
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
                            <Link to='/dummy'  style={{textDecoration:'none'}}>
                                 <GoTimeTableButton>작성하러가기</GoTimeTableButton>
                            </Link>
                        </NoTimeTable>
                    )}
                </LectureList>
        </TimeTableWrapper>
    )
}

export default TimeTable