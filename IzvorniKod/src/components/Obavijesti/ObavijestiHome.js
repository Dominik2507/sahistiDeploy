import React from "react";
import {ObavijestContainer, 
    NaslovObavijesti, 
    OpisObavijesti,
    ObavijestFlexContainer,
    SectionNaslov,
    Section
} from "./ObavijestiStyle";
import Obavijesti from "../../assets/data/obavijesti.json"
//import {getObavijesti} from "../../utils/FetchFunctions.js"

let getObavijesti=()=>{

    return Obavijesti.obavijesti
}


const ObavijestiHome = (props) => {
    let obavijestiArray=getObavijesti();

    let rows=[];
    for(let obavijest of obavijestiArray){
        rows.push(
        <ObavijestContainer>
            <NaslovObavijesti>{obavijest.naslov}</NaslovObavijesti>
            <OpisObavijesti>{obavijest.opis}</OpisObavijesti>
        </ObavijestContainer>
        );

    }
    return (
        <Section>
            <SectionNaslov>Obavijesti</SectionNaslov>
            <ObavijestFlexContainer>
            {rows}
            </ObavijestFlexContainer>
        </Section>
    );
};

export default ObavijestiHome;
