import React, { useEffect, useState } from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import Treneri from "../../assets/data/treneri.json"
import { getProfil } from "../../utils/FetchFunction";


const TrenerProfil= (props) => {
    const [userData, setUserData]= useState({ime:"", prezime:"", clanOd:"", bodovi:0})
    useEffect(()=>{
        //console.log(props.user)
        getProfil().then((result)=>{
            console.log(result);
            setUserData(result)
        })
    },[])
    return (
        <InfoContainer>
            <div>Korisnik: {userData.titula + " "+ userData.ime + " " + userData.prezime}</div>
            <div>Uloga: Trener</div>
        </InfoContainer>
       
    );
};
export default TrenerProfil;