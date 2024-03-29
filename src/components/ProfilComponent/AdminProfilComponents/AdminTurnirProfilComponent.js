import React, {useState,useEffect} from "react";
import {TurnirContainer, 
    NaslovTurnira, 
    OpisTurnira,
    TurnirFlexContainer,
    SectionNaslov,
    Section2
} from "../../Turniri/TurniriStyle";
import Turniri from "../../../assets/data/turniri.json"
import { getTurniri, aktivirajTu, deaktivirajTu } from "../../../utils/FetchFunction";
import "./adminStyles.css"


const AdminTurnirProfilComponent = ({user}) => {
    const [turniri,setTurniri]= useState([]);
    const [stanje, setStanje] = useState(false);
    let rowsAkt=[];
    let rowsPov=[];
    
    useEffect(()=>{
        getTurniri().then(
            (item)=>{
                console.log(item)
                setTurniri(item)
            }
        )
        
    }, [])
    for(let turnirObject of turniri){
        let Turnir=turnirObject.turnir
        if(Turnir.aktivni == true){
            rowsAkt.push(
            <TurnirContainer key={Turnir.naziv + Turnir.mjesto + Turnir.vrijemeturnir}>
                <NaslovTurnira>{Turnir.naziv + ", " + Turnir.mjesto}</NaslovTurnira>
                <OpisTurnira>{Turnir.vrijemeTurnir + " h" +", " + (new Date(Turnir.datumTurnira)).toLocaleDateString("en-GB") }</OpisTurnira>
                <button class="button" onClick={() => {Turnir.aktivni = false; setStanje(!stanje); deaktivirajTu(Turnir.turnirId)}}>Deaktiviraj</button>
            </TurnirContainer>
            );
        } else {
            rowsPov.push(
                <TurnirContainer key={Turnir.naziv + Turnir.mjesto + Turnir.vrijemeTurnir}>
                    <NaslovTurnira>{Turnir.naziv + ", " + Turnir.mjesto}</NaslovTurnira>
                    <OpisTurnira>{Turnir.vrijemeTurnir + " h" +", " + (new Date(Turnir.datumTurnira)).toLocaleDateString("en-GB") }</OpisTurnira>
                    <button class="button" onClick={() => {Turnir.aktivni = true; setStanje(!stanje); aktivirajTu(Turnir.turnirId)}}>Aktiviraj</button>
                </TurnirContainer>
                );
        }
    }
    return (
    <>
            <Section2>
                <SectionNaslov>Aktivni turniri</SectionNaslov>
                {
                     rowsAkt.length>0 &&
                     <TurnirFlexContainer>
                         {rowsAkt}
                     </TurnirFlexContainer>
                }
                
                <br/>
                <SectionNaslov>Neaktivni turniri</SectionNaslov>
                {
                    rowsPov.length>0 &&
                    <TurnirFlexContainer>
                        {rowsPov}
                    </TurnirFlexContainer>
                }
                
            </Section2>
        </>
    );
};
export default AdminTurnirProfilComponent;