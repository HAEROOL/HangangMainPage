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
                <FirstMaterial></FirstMaterial>
                <SecondMaterial></SecondMaterial>
                <ThirdMaterial></ThirdMaterial>
                <FourthMaterial></FourthMaterial>
                <FifthMaterial></FifthMaterial>
            </LectureMaterial>
        </ LectureMaterialWrapper>
    )
}
export default RecommendationMaterial