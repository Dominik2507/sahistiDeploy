import React, { useEffect, useState } from "react";
import { ButtonFlexContainer, ButtonNaslov, Section, InfoContainer } from "./ProfilStyle";
import Treneri from "../../assets/data/treneri.json"
import { dohvatiPrijavErr, getProfil } from "../../utils/FetchFunction";
import TrenerTreningProfilComponent from "./TrenerProfilComponents/TrenerTreningProfilComponent";
import TrenerTurnirProfilComponent from "./TrenerProfilComponents/TrenerTurnirProfilComponent";
import "./TrenerProfilComponents/trenerStyles.css"
import { Link } from "react-router-dom";
import PregledGreske from "./TrenerProfilComponents/PregledGreske";
import styled from "styled-components";

const TrenerProfil= ({user}) => {
    const [userData, setUserData]= useState({osobaID: "", ime:"", prezime:"", bodovi:0})
    const [greske, setGreske]= useState([])
    const [showGresku, setShow]= useState(false);
    const [greska, setGreska]=useState({})

    let greskeHTML=[];
    for(let greskaLoop of greske){
        greskeHTML.push(
            <li style={{cursor:"pointer"}} onClick={()=>{ greska!==greskaLoop ? setGreska(greskaLoop) : setGreska({}) ; greska!==greskaLoop ? setShow(true): setShow(false)}}>{(new Date(greskaLoop.taktika.datumTaktika)).toLocaleDateString("en-GB") }</li>
        )
    }
    useEffect(()=>{
        //console.log(user.user)
        getProfil().then((result)=>{
            setUserData(result)
        });
        dohvatiPrijavErr().then((result)=>{
            console.log(result)
            setGreske(result)
        })  
    },[])
    return (
        <>
            <InfoContainer>
                <div>Korisnik: {userData.titula + " "+ userData.ime + " " + userData.prezime}</div>
                <div id="ulogaType">Uloga: Trener</div>
            </InfoContainer>
            <PrijaveGreskeContainer>
                { 
                    greske.length > 0 &&
                    <>
                        <ul>
                            Prijavljene greške
                            {greskeHTML}
                        </ul>
                        <PregledGreske show={showGresku} greska={greska}/>
                    </>
                }
                
            </PrijaveGreskeContainer>
                <div class="trenerProfilContainer">
                    <TrenerTreningProfilComponent user={user}></TrenerTreningProfilComponent>
                    <TrenerTurnirProfilComponent user={user}></TrenerTurnirProfilComponent>
                </div>
        </>
    );
};
export default TrenerProfil;

const PrijaveGreskeContainer=styled.div`
    color: #e85a4f;
    
    li{
        margin-left: 30px;
        width: fit-content;
    }
    li:hover{
        cursor: pointer;
        color:red;
    }
`