import React from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import Treneri from "../../assets/data/treneri.json"
const getUserData= (userID)=> {

    for(let trener of Treneri.treneri){
        if(userID.toString()===trener.osobaID.toString()) return trener;
    }
}
const TrenerProfil= (props) => {
   
    let userData=getUserData(props.user.userId, props.user.role);

    return (
        <Section>
           <InfoContainer>
                Informacije o profilu
                <div>{userData.titula + " "+ userData.ime + " " + userData.prezime}</div>
            </InfoContainer>
            <ButtonNaslov>PROFIL ZA: Trener </ButtonNaslov>
        </Section>
    );
};
export default TrenerProfil;