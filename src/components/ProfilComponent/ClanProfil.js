import React, { useEffect, useState } from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import Clanovi from "../../assets/data/clanovi.json"
import { getProfil } from "../../utils/FetchFunction";
import ClanTurnirProfilComponent from "./ClanProfilComponents/ClanTurnirProfilComponent";
import ClanTreningProfilComponent from "./ClanProfilComponents/ClanTreningProfilComponent";
import ClanRjesenjeProfilComponent from "./ClanProfilComponents/ClanRjesenjeProfilComponent.js";
import "./ClanProfilComponents/clanStyles.css"
import { Link } from "react-router-dom";


const ClanProfil= ({user}) => {
   //let userData=getUserData(user.user.userId, user.user.role);
   const [userData, setUserData]= useState({ime:"", prezime:"", clanOd:"", bodovi:0})
   useEffect(()=>{
       //console.log(user.user)
       getProfil().then((result)=>{
           console.log(result);
           setUserData(result)
       })
   },[])
    return (
        <>
            <InfoContainer>
                <div>Korisnik: {userData.ime + " " + userData.prezime}</div>
                <div>Uloga: Član</div>
                <div>Član od: {userData.clanOd}</div>
                <div>Bodovi: {userData.bodovi}</div>
            </InfoContainer>
            <div><Link to={"/transakcije/" + user.userId}>Povijest transakcija</Link></div>
            <div class="clanProfilContainer">
                <ClanTreningProfilComponent user={user}></ClanTreningProfilComponent>
                <ClanTurnirProfilComponent user={user}></ClanTurnirProfilComponent>
                <ClanRjesenjeProfilComponent user={user}></ClanRjesenjeProfilComponent>
            </div>
        </>
    );
};
export default ClanProfil;