import React from "react";
import {TurnirContainer, 
    NaslovTurnira, 
    OpisTurnira,
    TurnirFlexContainer,
    SectionNaslov,
    Section
} from "./TurniriStyle";
import Turniri from "../../assets/data/turniri.json"
//import {getTurniri} from "../../utils/FetchFunctions.js"

let getTurniri=()=>{

    return Turniri.turniri
}


const TurniriHome = (props) => {
    let TurniriArray=getTurniri();
    let rows=[];
    for(let Turnir of TurniriArray){
        rows.push(
        <TurnirContainer>
            <NaslovTurnira>{Turnir.naslov + ", " + Turnir.mjesto}</NaslovTurnira>
            <OpisTurnira>{Turnir.vrijemeturnir +", " + Turnir.datumTurnira }</OpisTurnira>
        </TurnirContainer>
        );

    }
    return (
        <Section>
            <SectionNaslov>Turniri</SectionNaslov>
            <TurnirFlexContainer>
            {rows}
            </TurnirFlexContainer>
        </Section>
    );
};
export default TurniriHome;