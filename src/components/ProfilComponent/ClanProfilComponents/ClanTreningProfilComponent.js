import React, {useState,useEffect} from "react";
import {TreningContainer, 
    NaslovTreninga, 
    OpisTreninga,
    TreningFlexContainer,
    SectionNaslov,
    Section
} from "../../Treninzi/TreninziStyle";
import Treninzi from "../../../assets/data/treninzi.json"
import PrijavljujeTr from "../../../assets/data/prijavljujeTr.json"
import { getPrijaveTr } from "../../../utils/FetchFunction";
import { Section2 } from "../../Turniri/TurniriStyle";


const ClanTreningProfilComponent = (props) => {
    const [prijaveTr, setPrijaveTr]= useState([]);
    let rows = [];

    useEffect(()=>{
        getPrijaveTr().then(
            (item)=>{
                //console.log(item)
                setPrijaveTr(item)
            }
        )
    }, []);
    for(let prijavaTr of prijaveTr){
        rows.push(
        <TreningContainer key={prijavaTr.mjesto + prijavaTr.vrijemeTreninga}>
            <NaslovTreninga>{prijavaTr.vrijemeTreninga+ ", "+ (new Date(prijavaTr.datumTreninga)).toLocaleDateString("en-GB")  + ", " + prijavaTr.trener.titula + " " + prijavaTr.trener.ime + " " + prijavaTr.trener.prezime}</NaslovTreninga>
            <OpisTreninga> {"traje: " + prijavaTr.trajanje + " minuta, " + prijavaTr.mjesto} </OpisTreninga>
        </TreningContainer>
        );
    }
    return (
        <Section2>
            <SectionNaslov>Prijavljeni Treninzi</SectionNaslov>
            <TreningFlexContainer>
            {rows}
            </TreningFlexContainer>
        </Section2>
    );
};
export default ClanTreningProfilComponent;