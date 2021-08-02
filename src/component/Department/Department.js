import React from 'react'
import { DepartmentImages, DepartmentWrapper } from './DepartmentStyle'
import Elective from '../../assets/images/Department/Elective.png'
import HRD from '../../assets/images/Department/HRD.png'
import MechanialEngineerging from '../../assets/images/Department/MechanicalEngineering.png'
import DesignArchitecturalEngineering from '../../assets/images/Department/DesignArchitecturalEngineering.png'
import MechatronicsEngineering from '../../assets/images/Department/MechatronicsEngineering.png'
import IndustrialManagement from '../../assets/images/Department/IndustrialManagement.png'
import EnergyNewMaterialsChemicalEngineering from '../../assets/images/Department/EnergyNewMaterialsChemicalEngineering.png'
import ElectricalElectronicCommunication from '../../assets/images/Department/ElectricalElectronicCommunication.png'
import ComputerEngineering from '../../assets/images/Department/ComputerEngineering.png'
import Fusion from '../../assets/images/Department/Fusion.png'
const DepartmentList = [Elective, HRD, MechanialEngineerging,DesignArchitecturalEngineering, MechatronicsEngineering, IndustrialManagement, EnergyNewMaterialsChemicalEngineering, ElectricalElectronicCommunication, ComputerEngineering, Fusion]
function Department(){
    return (
        <DepartmentWrapper>
            {DepartmentList.map((department,index) => <DepartmentImages key={index} alt={department} src={department}/>)}
        </DepartmentWrapper>
        
    )
}

export default Department