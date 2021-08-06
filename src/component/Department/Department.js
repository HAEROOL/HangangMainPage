import React from 'react'
import styled from 'styled-components'
// import { DepartmentImages, DepartmentBrowserWrapper,DepartmentListWrapper,  DepartmentName, ComponentName, Scroll } from './DepartmentStyle'
import { DepartmentImages, DepartmentBrowserWrapper,DepartmentListWrapper, Department, DepartmentName, ComponentName, Scroll } from './DepartmentStyle'
import Elective from '../../assets/images/Department/Elective.jpg'
import HRD from '../../assets/images/Department/HRD.jpg'
import MechanicalEngineerging from '../../assets/images/Department/MechanicalEngineering.jpg'
import DesignArchitecturalEngineering from '../../assets/images/Department/DesignArchitecturalEngineering.jpg'
import MechatronicsEngineering from '../../assets/images/Department/MechatronicsEngineering.jpg'
import IndustrialManagement from '../../assets/images/Department/IndustrialManagement.jpg'
import EnergyNewMaterialsChemicalEngineering from '../../assets/images/Department/EnergyNewMaterialsChemicalEngineering.jpg'
import ElectricalElectronicCommunication from '../../assets/images/Department/ElectricalElectronicCommunication.jpg'
import ComputerEngineering from '../../assets/images/Department/ComputerEngineering.jpg'
import Fusion from '../../assets/images/Department/Fusion.jpg'
const DepartmentList = [Elective, HRD, MechanicalEngineerging,DesignArchitecturalEngineering, MechatronicsEngineering, IndustrialManagement, EnergyNewMaterialsChemicalEngineering, ElectricalElectronicCommunication, ComputerEngineering, Fusion]
const DepartmentNameList = ['교양학부','HRD학부','기계공학부','디자인 건축 공학부','메카트로닉스 공학부','산업경영학부','에너지신소재 화학 공학부','전기전자통신 공학부','컴퓨터공학부','융합학과']

function DepartmentBrowser(){
    ;
    return (
        <DepartmentBrowserWrapper>
            <ComponentName>학부별 탐색</ComponentName>
            <Scroll>
            <DepartmentListWrapper>
                    {DepartmentList.map((department,index) =>
                        <Department url={department}>
                            <DepartmentName>{DepartmentNameList[DepartmentList.indexOf(department)]}</DepartmentName>
                        </Department>
                    )}
            </DepartmentListWrapper>
            </Scroll>
            
        </DepartmentBrowserWrapper>
    )
}

export default DepartmentBrowser