import React, { useEffect, useState } from "react";
import {TreningContainer, 
    NaslovTreninga, 
    OpisTreninga,
    TreningFlexContainer,
    SectionNaslov,
    Section2
} from "../../Treninzi/TreninziStyle";
import Treninzi from "../../../assets/data/treninzi.json"
import {getStvoreniTr} from "../../../utils/FetchFunction"


const TrenerTreningProfilComponent = ({user}) => {
    const [treninzi,setTreninzi]= useState([]);
    let rowsAkt=[];
    let rowsPov=[];

    useEffect(()=>{
        getStvoreniTr().then(
            (item)=>{
                //console.log(item)
                setTreninzi(item)
            }
        )
        
    }, [])


    for(let Trening of treninzi){
        if(Trening.aktivni == false){
            rowsPov.push(
                <TreningContainer key={Trening.mjesto + Trening.vrijemeTreninga}>
                    <NaslovTreninga>{Trening.vrijemeTreninga+ ", "+ (new Date( Trening.datumTreninga)).toLocaleDateString("en-GB")}</NaslovTreninga>
                    <OpisTreninga> {"traje: " + Trening.trajanje + " minuta, " + Trening.mjesto} </OpisTreninga>
                </TreningContainer>
            );
        } else {
            rowsAkt.push(
                <TreningContainer key={Trening.mjesto + Trening.vrijemeTreninga}>
                    <NaslovTreninga>{Trening.vrijemeTreninga+ ", "+ (new Date( Trening.datumTreninga)).toLocaleDateString("en-GB")}</NaslovTreninga>
                    <OpisTreninga> {"traje: " + Trening.trajanje + " minuta, " + Trening.mjesto} </OpisTreninga>
                </TreningContainer>
            );
        }
    }

    return (
        <Section2>
            <SectionNaslov>Aktivni treninzi</SectionNaslov>
            <TreningFlexContainer>
                {rowsAkt}
            </TreningFlexContainer>
            <br/>
            <SectionNaslov>Neaktivni treninzi</SectionNaslov>
            <TreningFlexContainer>
                {rowsPov}
            </TreningFlexContainer>
        </Section2>
    );
};
export default TrenerTreningProfilComponent;

