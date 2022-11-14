import React, { useEffect, useState } from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import Clanovi from "../../assets/data/clanovi.json"
import { getProfil } from "../../utils/FetchFunction";

const getUserData= (userID)=> {

    for(let clan of Clanovi.clanovi){
        if(userID.toString()===clan.osobaID.toString()) return clan;
    }
}
const ClanProfil= (props) => {
   //let userData=getUserData(props.user.userId, props.user.role);
   const [userData, setUserData]= useState({ime:"", prezime:"", clanOd:"", bodovi:0})
   useEffect(()=>{
       //console.log(props.user)
       getProfil(props.user).then((result)=>{
           console.log(result);
           setUserData(result)
       })
   },[])
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