import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {
    TreningContainer,
    NaslovTreninga,
    OpisTreninga,
    TreningFlexContainer,
    SectionNaslov,
    Section,
    ButtonLink
} from "./TreninziStyle";
import Treninzi from "../../assets/data/treninzi.json"
import { getTreninzi } from "../../utils/FetchFunction";

const TreninziHome = (props) => {
    const [treninzi,setTreninzi]= useState([]);

    useEffect(()=>{
        getTreninzi().then(
            (item)=>{
                //console.log(item)
                setTreninzi(item)
            }
        )

    }, [])
    let rows=[];
    for(let Trening of treninzi){
        if(Trening.aktivni)
        rows.push(
        <TreningContainer key={Trening.trener + Trening.mjesto + Trening.vrijemeTreninga}>
            <NaslovTreninga>{Trening.trener["ime"] + " " + Trening.trener["prezime"] + ", " + Trening.mjesto}</NaslovTreninga>
            <OpisTreninga>{Trening.vrijemeTreninga + " h" +", " + Trening.datumTreninga.split("T")[0] }</OpisTreninga>
        </TreningContainer>
        );

    }
    return (
        <Section>
            <SectionNaslov>{<Link to="/treninzi" style={{textDecoration:'none'}}><ButtonLink>Treninzi</ButtonLink></Link>}</SectionNaslov>
            <TreningFlexContainer>
            {rows}
            </TreningFlexContainer>
        </Section>
    );
};
export default TreninziHome;
