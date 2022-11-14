import React, { useEffect, useState } from "react";
import {TreningContainer, 
    NaslovTreninga, 
    OpisTreninga,
    TreningFlexContainer,
    SectionNaslov,
    Section
} from "./TreninziStyle";
import Treninzi from "../../assets/data/treninzi.json"
import { getTreninzi } from "../../utils/FetchFunction";

const TreninziHome = (props) => {
    const [treninzi,setTreninzi]= useState([]);
    let rows=[];

    useEffect(()=>{
        getTreninzi().then(
            (item)=>{
                //console.log(item)
                setTreninzi(item)
            }
        )

    }, [])
    for(let Trening of true ? treninzi: Treninzi.treninzi){
        rows.push(
        <TreningContainer key={Trening.mjesto + Trening.vrijemeTreninga}>
            <NaslovTreninga>{Trening.vrijemeTreninga+ ", "+ Trening.datumTreninga.split("T")[0] + ", " + Trening.trener.titula+ " " +  Trening.trener.ime + " "+ Trening.trener.prezime}</NaslovTreninga>
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