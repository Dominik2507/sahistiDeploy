import React, { useEffect, useState } from "react";
import {TreningContainer, 
    NaslovTreninga, 
    OpisTreninga,
    TreningFlexContainer,
    SectionNaslov,
    Section
} from "./TreninziStyle";
import Treninzi from "../../assets/data/treninzi.json"
//import { getTreninzi } from "../../utils/FetchFunction";

const TreninziHome = (props) => {
    const [treninzi,setTreninzi]= useState([]);
    let rows=[];

    /* useEffect(()=>{
        getTreninzi().then(
            (item)=>{
                console.log(item)
                setTreninzi(item)
            }
        )

    }, []) */
    for(let Trening of false ? treninzi: Treninzi.treninzi){
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