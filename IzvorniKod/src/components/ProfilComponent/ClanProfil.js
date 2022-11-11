import React from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import Clanovi from "../../assets/data/clanovi.json"

const getUserData= (userID)=> {

    for(let clan of Clanovi.clanovi){
        if(userID===clan.osobaID) return clan;
    }
}

const ClanProfil= (props) => {
   let userData=getUserData(props.user.osobaID);
    return (
        <Section>
           <InfoContainer>
                Informacije o profilu
                <div>{userData.ime + " " + userData.prezime}</div>
                <div>Član od: {userData.clanOd}</div>
                <div>Bodovi: {userData.bodovi}</div>
            </InfoContainer>
            <ButtonNaslov>PROFIL ZA: ČLAN </ButtonNaslov>
        </Section>
    );
};
export default ClanProfil;