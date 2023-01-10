import React, {useState,useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom'
import {
    ButtonFlexContainer,
    Button,
    TreningContainer,
    TreningFlexContainer,
    NaslovTreninga,
    MjestoTreninga,
    DatumTreninga,
    VrijemeTreninga,
    Section,
    SectionNaslov
} from "./TreninziPageStyle";
import Treninzi from "../../assets/data/treninzi.json"
import { getPrijaveTr, getTreninzi, odjaviTr, prijavaNaTrening } from "../../utils/FetchFunction";

const TreninziComponent = (props) => {
    const [treninzi,setTreninzi]= useState([]);
    
    const [prijavljeni, setPrijavljeni]=useState([])

    const navigate=useNavigate();
    useEffect(()=>{
        getTreninzi().then(
            (item)=>{
                //console.log(item)
                setTreninzi(item)
                getPrijaveTr().then((prijavljeni)=>{
                    console.log(prijavljeni)
                   let temp=[];
                   for(let item of prijavljeni){
                       temp.push(item.treningId)
                   }
                   setPrijavljeni(temp)
               })
            }
        )

    }, []);

    const handleClick = (treningId) => {

        if(prijavljeni.includes(treningId)){
            odjaviTr(treningId).then(()=>navigate("/profil"))
            return;
        }
        prijavaNaTrening(treningId).then(()=>navigate("/profil"))
        
        console.log(treningId)
    };

    const handleObrisiClick = (treningId) => {
        //brisanjeTreninga(treningId)
        console.log(treningId)
    }

    let rows=[];
    for(let Trening of treninzi){
        if(Trening.aktivni)
        rows.push(
        <TreningContainer key={Trening.trener + Trening.mjesto + Trening.vrijemeTrening}>
            <NaslovTreninga>{Trening.trener["ime"] + " " + Trening.trener["prezime"]}</NaslovTreninga>
            <MjestoTreninga>{"Mjesto održavanja treninga: " + Trening.mjesto}</MjestoTreninga>
            <DatumTreninga>{"Datum održavanja treninga: " + Trening.datumTreninga.split("T")[0]}</DatumTreninga>
            <VrijemeTreninga>{"Vrijeme održavanja treninga: " + Trening.vrijemeTreninga + "h"}</VrijemeTreninga>
            {props.role === "clan" ?
            <ButtonFlexContainer><Button onClick={() => handleClick(Trening.treningId)}>{ prijavljeni.includes(Trening.treningId) ? "Odjavi se" : "Prijavi se"}</Button></ButtonFlexContainer> : <></>
            }
            {(props.role === "admin") ?
            <ButtonFlexContainer><Button onClick={() => handleObrisiClick(Trening.treningId)}>Obriši</Button></ButtonFlexContainer> : <></>
            }
        </TreningContainer>
        );

    }
    return (
        <Section>
            <SectionNaslov>Treninzi</SectionNaslov>
            {(props.role === "admin" || props.role === "trener") ?
                <ButtonFlexContainer><Link to="./dodajTrening" style={{textDecoration:'none', color: '#E85A4F'}}><Button>Dodaj trening</Button></Link></ButtonFlexContainer> :
                <></>
            }
            <TreningFlexContainer>
            {rows}
            </TreningFlexContainer>
        </Section>
    );
};


export default TreninziComponent;
