import React, {useState, useEffect} from "react";
import {ObavijestContainer, 
    NaslovObavijesti, 
    OpisObavijesti,
    ObavijestFlexContainer,
    SectionNaslov,
    Section
} from "./ObavijestiStyle";
import Obavijesti from "../../assets/data/obavijesti.json"
//import { getObavijesti } from "../../utils/FetchFunction";

const ObavijestiHome = (props) => {
    const [obavijesti,setObavijesti]= useState([]);
    let rows=[];

    /* useEffect(()=>{
        getObavijesti().then(
            (item)=>{
                console.log(item)
                setObavijesti(item)
            }
        )

    }, []) */
    for(let obavijest of false ? obavijesti :Obavijesti.obavijesti){
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
