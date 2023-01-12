import React, {useState, useEffect} from "react";
import {ObavijestContainer,
    NaslovObavijesti,
    OpisObavijesti,
    ObavijestFlexContainer,
    SectionNaslov,
    Section,
    Button,
    ButtonFlexContainer,
    DatumObavijesti,
    AutorObavijesti,
    ButtonMali
} from "./ObavijestiStyle";
import Obavijesti from "../../assets/data/obavijesti.json"
import { deaktivirajObavijest, getObavijesti } from "../../utils/FetchFunction";
import { Link } from 'react-router-dom'

const ObavijestiHome = (props) => {
    const [obavijesti,setObavijesti]= useState([]);
    const [toggle, setToggle]=useState(false)
    let rows=[];

    useEffect(()=>{
        getObavijesti().then(
            (item)=>{
                //console.log(item)
                setObavijesti(item)
            }
        )

    }, [toggle])
    for(let obavijest of obavijesti){
        if(obavijest.aktivni)
        rows.push(
        <ObavijestContainer key={obavijest.naslov + obavijest.datumObjave}>
            <NaslovObavijesti>{obavijest.naslov} </NaslovObavijesti>
            <OpisObavijesti>{obavijest.opis}</OpisObavijesti>
            <DatumObavijesti>{"Datum objave: " + (new Date(obavijest.datumObjave)).toLocaleDateString("en-GB")}</DatumObavijesti>
            {props.role==="admin" && <ButtonMali onClick={() => {deaktivirajObavijest(obavijest.zanimljivostId).then(()=>setToggle(!toggle))}}>Deaktiviraj</ButtonMali> }
        </ObavijestContainer>
        );

    }
    return (
        <Section>
            <SectionNaslov>Obavijesti</SectionNaslov>
            <ObavijestFlexContainer>
            {rows}
            </ObavijestFlexContainer>
            { (props.role === undefined || props.role === "clan") ? <></> :
            <ButtonFlexContainer><Link to="/dodajObavijest"><Button>Dodaj obavijest</Button></Link></ButtonFlexContainer>
            }
        </Section>
    );
};

export default ObavijestiHome;

