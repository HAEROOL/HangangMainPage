import React,{useState} from 'react'
import { LectureInformaion,ComponentName,CurrentLectureWrapper,LectureList, Lecture, LectureNameAndProfessor, Professor, AverageScore, } from './CurrentLecture.style'
function CurrentLecture(){
    const [currentLectureList,setList] = useState(JSON.parse(localStorage.getItem('recentlyViewedLectures'))?JSON.parse(localStorage.getItem('recentlyViewedLectures')):[])
    return (
        <CurrentLectureWrapper>
            <ComponentName>최근 본 강의</ComponentName>
            <LectureList>
                {currentLectureList.map((lecture, id) => 
                        <Lecture key={id}>
                            <LectureInformaion>
                                {lecture.name}
                                <Professor>{lecture.professor}</Professor>
                            </LectureInformaion>
                            <AverageScore>{parseFloat(lecture.total_rating).toFixed(1)}</AverageScore>
                        </Lecture>
                    )}
            </LectureList>
        </CurrentLectureWrapper>
        )
}

export default CurrentLecture