import React, {useState,useEffect} from "react";
import {TurnirContainer, 
    NaslovTurnira, 
    OpisTurnira,
    TurnirFlexContainer,
    SectionNaslov,
    Section2
} from "../../Turniri/TurniriStyle";
import Turniri from "../../../assets/data/turniri.json"
import { getTurniri } from "../../../utils/FetchFunction";
import "./trenerStyles.css"
import { getStvoreniTu } from "../../../utils/FetchFunction";


const TrenerTurnirProfilComponent = ({user}) => {
    const [turniri, setTurniri]= useState([]);
    let rowsAkt=[];
    let rowsPov=[];
   
    useEffect(()=>{
        getStvoreniTu().then(
            (item)=>{
                //console.log(item)
                setTurniri(item)
            }
        )
        
    }, [])
    for(let turnir of turniri){
        if(turnir.aktivni == true){
            rowsAkt.push(
            <TurnirContainer key={turnir.naziv + turnir.mjesto + turnir.vrijemeturnir}>
                <NaslovTurnira>{turnir.naziv + ", " + turnir.mjesto}</NaslovTurnira>
                <OpisTurnira>{turnir.vrijemeTurnir + " h" +", " + turnir.datumTurnira.split("T")[0] }</OpisTurnira>
            </TurnirContainer>
            );
        } else {
            rowsPov.push(
                <TurnirContainer key={turnir.naziv + turnir.mjesto + turnir.vrijemeTurnir}>
                    <NaslovTurnira>{turnir.naziv + ", " + turnir.mjesto}</NaslovTurnira>
                    <OpisTurnira>{turnir.vrijemeTurnir + " h" +", " + turnir.datumTurnira.split("T")[0] }</OpisTurnira>
                </TurnirContainer>
                );
        }
    }
    return (
        <Section2>
            <SectionNaslov>Aktivni turniri</SectionNaslov>
            <TurnirFlexContainer>
            {rowsAkt}
            </TurnirFlexContainer>
            <br/>
            <SectionNaslov>Neaktivni turniri</SectionNaslov>
            <TurnirFlexContainer>
            {rowsPov}
            </TurnirFlexContainer>
        </Section2>
    );
};
export default TrenerTurnirProfilComponent;