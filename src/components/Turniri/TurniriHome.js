//components/turniri
import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {
    TurnirContainer, 
    NaslovTurnira, 
    OpisTurnira,
    TurnirFlexContainer,
    SectionNaslov,
    Section,
    ButtonLink
} from "./TurniriStyle";
import Turniri from "../../assets/data/turniri.json"
import { getTurniri } from "../../utils/FetchFunction";
import { NavButton } from "../Header/HeaderStyle";

const TurniriHome = (props) => {
    const [turniri,setTurniri]= useState([]);

    useEffect(()=>{
        getTurniri().then(
            (item)=>{
                console.log(item)
                setTurniri(item)
            }
        )

    }, [])
    let rows=[];
    for(let turnirObject of turniri){
        let Turnir=turnirObject.turnir;
        if(Turnir.aktivni)
        rows.push(
            <TurnirContainer key={Turnir.naziv + Turnir.mjesto + Turnir.vrijemeTurnir}>
                <NaslovTurnira>{Turnir.naziv + ", " + Turnir.mjesto}</NaslovTurnira>
                <OpisTurnira>{Turnir.vrijemeTurnir + " h" +", " + (new Date(Turnir.datumTurnira)).toLocaleDateString("en-GB") }</OpisTurnira>
                <OpisTurnira>{turnirObject.popunjenost +"/" + Turnir.kapacitet + " mjesta zauzeto" }</OpisTurnira>
            </TurnirContainer>
        );
    }
    return (
        <Section>
            <SectionNaslov>{<Link to="/turniri" style={{textDecoration:'none'}}><ButtonLink>Turniri</ButtonLink></Link>}</SectionNaslov>
            <TurnirFlexContainer>
            {rows}
            </TurnirFlexContainer>
        </Section>
    );
};
export default TurniriHome;