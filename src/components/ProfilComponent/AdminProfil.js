import React from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import Admini from "../../assets/data/admini.json"

const getUserData= (userID, role)=> {

    

    for(let admin of Admini.admini){
        if(userID.toString()===admin.osobaID.toString()) return admin;
    }
}

const AdminProfil= (props) => {
    let userData=getUserData(props.user.userId, props.user.role);
    return (
        <Section>
           <InfoContainer>
                Informacije o profilu
                <div>{userData.ime + " " + userData.prezime}</div>
            </InfoContainer>
            <ButtonNaslov>PROFIL ZA: Admin </ButtonNaslov>
        </Section>
    );
};
export default AdminProfil;