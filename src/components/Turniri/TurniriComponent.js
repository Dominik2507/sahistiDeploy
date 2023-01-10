import React, {useState,useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom'
import {
    ButtonFlexContainer,
    Button,
    TurnirContainer,
    TurnirFlexContainer,
    NaslovTurnira,
    MjestoTurnira,
    DatumTurnira,
    VrijemeTurnira,
    Section,
    SectionNaslov
} from "./TurniriPageStyle";
import { getPrijaveTu, getTurniri, odjaviTr, odjaviTu, prijavaNaTurnir } from "../../utils/FetchFunction";

const TurniriComponent = (props) => {
    const [turniri,setTurniri]= useState([]);
    const [prijavljeni, setPrijavljeni]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        getTurniri().then(
            (item)=>{
               
                setTurniri(item)
                getPrijaveTu().then((prijavljeni)=>{
                     console.log(prijavljeni)
                    let temp=[];
                    for(let item of prijavljeni){
                        temp.push(item.turnirId)
                    }
                    setPrijavljeni(temp)
                })
            }

        )

    }, []);

    const handleClick = (turnirId) => {
        if(prijavljeni.includes(turnirId)){
            odjaviTu(turnirId).then(()=>navigate("/profil"))
            return;
        }
        prijavaNaTurnir(turnirId).then(()=>navigate("/profil"))
        console.log(turnirId)
    };

    const handleObrisiClick = (turnirId) => {
        //brisanjeTurnira(turnirId)
        console.log(turnirId)
    }

    let rows=[];
    for(let Turnir of turniri){
        if(Turnir.aktivni)
        rows.push(
        <TurnirContainer key={Turnir.naziv + Turnir.mjesto + Turnir.vrijemeTurnir}>
            <NaslovTurnira>{Turnir.naziv}</NaslovTurnira>
            <MjestoTurnira>{"Mjesto održavanja turnira: " + Turnir.mjesto}</MjestoTurnira>
            <DatumTurnira>{"Datum održavanja turnira: " + Turnir.datumTurnira.split("T")[0]}</DatumTurnira>
            <VrijemeTurnira>{"Vrijeme održavanja turnira: " + Turnir.vrijemeTurnir + "h"}</VrijemeTurnira>
            {props.role === "clan" ?
            <ButtonFlexContainer><Button onClick={() => handleClick(Turnir.turnirId)}>{ prijavljeni.includes(Turnir.turnirId) ? "Odjavi se" : "Prijavi se"}</Button></ButtonFlexContainer> : <></>
            }
            {(props.role === "admin") ?
            <ButtonFlexContainer><Button onClick={() => handleObrisiClick(Turnir.turnirId)}>Obriši</Button></ButtonFlexContainer> : <></>
            }
        </TurnirContainer>
        );

    }

    return (
        <Section>
            <SectionNaslov>Turniri</SectionNaslov>
            {(props.role === "admin" || props.role === "trener") ?
                <ButtonFlexContainer><Link to="./dodajTurnir" style={{textDecoration:'none', color: '#E85A4F'}}><Button>Dodaj turnir</Button></Link></ButtonFlexContainer> :
                <></>
            }
            <TurnirFlexContainer>
            {rows}
            </TurnirFlexContainer>
        </Section>
    );
};


export default TurniriComponent;