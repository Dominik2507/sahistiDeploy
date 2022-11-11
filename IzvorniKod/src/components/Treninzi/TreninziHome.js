import React from "react";
import {TreningContainer, 
    NaslovTreninga, 
    OpisTreninga,
    TreningFlexContainer,
    SectionNaslov,
    Section
} from "./TreninziStyle";
import Treninzi from "../../assets/data/treninzi.json"
//import {getTreninzi} from "../../utils/FetchFunctions.js"

let getTreninzi=()=>{

    return Treninzi.treninzi;
}

const TreninziHome = (props) => {
    let TreninziArray=getTreninzi();
    let rows=[];
    for(let Trening of TreninziArray){
        rows.push(
        <TreningContainer>
            <NaslovTreninga>{Trening.vrijemeTreninga+ ", "+ Trening.datumTreninga + ", " + Trening.trener}</NaslovTreninga>
            <OpisTreninga>{"traje: " + Trening.trajanje + " minuta, " + Trening.mjesto}</OpisTreninga>
        </TreningContainer>
        );

    }

    return (
        <Section>
            <SectionNaslov>Treninzi</SectionNaslov>
            <TreningFlexContainer>
                {rows}
            </TreningFlexContainer>
        </Section>
    );
};
export default TreninziHome;