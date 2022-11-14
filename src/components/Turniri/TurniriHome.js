import React, {useState,useEffect} from "react";
import {TurnirContainer, 
    NaslovTurnira, 
    OpisTurnira,
    TurnirFlexContainer,
    SectionNaslov,
    Section
} from "./TurniriStyle";
import Turniri from "../../assets/data/turniri.json"
import { getTurniri } from "../../utils/FetchFunction";

const TurniriHome = (props) => {
    const [turniri,setTurniri]= useState([]);

    useEffect(()=>{
        getTurniri().then(
            (item)=>{
                //console.log(item)
                setTurniri(item)
            }
        )

    }, [])
    let rows=[];
    for(let Turnir of true? turniri:Turniri.turniri){
        rows.push(
        <TurnirContainer key={Turnir.naziv + Turnir.mjesto + Turnir.vrijemeturnir}>
            <NaslovTurnira>{Turnir.naziv + ", " + Turnir.mjesto}</NaslovTurnira>
            <OpisTurnira>{Turnir.vrijemeTurnir + " h" +", " + Turnir.datumTurnira.split("T")[0] }</OpisTurnira>
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