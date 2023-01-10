import React, {useState,useEffect} from "react";
import {TurnirContainer, 
    NaslovTurnira, 
    OpisTurnira,
    TurnirFlexContainer,
    SectionNaslov,
    Section2
} from "../../Turniri/TurniriStyle";
import Turniri from "../../../assets/data/turniri.json"
import PrijavljujeTu from "../../../assets/data/prijavljujeTu.json"
import { getPrijaveTu } from "../../../utils/FetchFunction";


const ClanTurnirProfilComponent = (props) => {
    const [prijaveTu, setPrijaveTu]= useState([]);
    let rows = [];
    
    useEffect(()=>{
        getPrijaveTu().then(
            (item)=>{
                setPrijaveTu(item)
            }
        )
       
    }, []);
    for(let prijavaTu of prijaveTu){ 
        rows.push(
        <TurnirContainer key={prijavaTu.naziv + prijavaTu.mjesto + prijavaTu.vrijemeturnir}>
            <NaslovTurnira>{prijavaTu.naziv + ", " + prijavaTu.mjesto}</NaslovTurnira>
            <OpisTurnira>{prijavaTu.vrijemeTurnir + " h" +", " + prijavaTu.datumTurnira.split("T")[0] }</OpisTurnira>
        </TurnirContainer>
        );
    }
    return (
        <Section2>
            <SectionNaslov>Prijavljeni Turniri</SectionNaslov>
            <TurnirFlexContainer>
            {rows}
            </TurnirFlexContainer>
        </Section2>
    );
};
export default ClanTurnirProfilComponent;