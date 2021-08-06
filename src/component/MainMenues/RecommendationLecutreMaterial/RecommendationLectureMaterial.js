import React from 'react'
import { LectureMaterialWrapper,LectureMaterial,FifthMaterial, FirstMaterial, FourthMaterial, SecondMaterial, ThirdMaterial } from './RecommendationLectureMaterialStyle'
import { ComponentName } from '../LectureRanking/LectureRankingStyle'
function RecommendationMaterial(){
    return(
        <LectureMaterialWrapper>
            <ComponentName>
                추천강의자료
            </ComponentName>
            <LectureMaterial>
                시간표를 작성하지 않았거나 업로드된 강의자료가 없습니다.
            </LectureMaterial>
        </ LectureMaterialWrapper>
    )
}
export default RecommendationMaterial