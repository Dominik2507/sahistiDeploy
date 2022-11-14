import React, { useEffect, useState } from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import Treneri from "../../assets/data/treneri.json"
import { getProfil } from "../../utils/FetchFunction";


const TrenerProfil= (props) => {
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
                <div>{userData.titula + " "+ userData.ime + " " + userData.prezime}</div>
            </InfoContainer>
            <ButtonNaslov>PROFIL ZA: Trener </ButtonNaslov>
        </Section>
    );
};
export default TrenerProfil;