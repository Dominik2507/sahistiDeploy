import React, {useState,useEffect} from "react";
import {TurnirContainer, 
    NaslovTurnira, 
    OpisTurnira,
    TurnirFlexContainer,
    SectionNaslov,
    Section2
} from "../../Turniri/TurniriStyle";
import {getObavijesti, aktivirajObavijest } from "../../../utils/FetchFunction";
import "./adminStyles.css"


const ObavijestProfilComponent = ({user}) => {
    const [obavijesti ,setObavijesti]= useState([]);
    const [stanje, setStanje] = useState(false);
    let rowsAkt=[];
    
    useEffect(()=>{
        getObavijesti().then(
            (item)=>{
                console.log(item)
                setObavijesti(item)
            }
        )
        
    }, [stanje])

    for(let Obavijest of obavijesti){
        if(!Obavijest.aktivni == true){
            rowsAkt.push(
            <TurnirContainer key={Obavijest.zanimljivostId}>
                <NaslovTurnira>{Obavijest.naslov}</NaslovTurnira>
                <OpisTurnira>{ Obavijest.opis}</OpisTurnira>
                <button class="button" onClick={() => {Obavijest.aktivni = false;aktivirajObavijest(Obavijest.zanimljivostId).then(()=> setStanje(!stanje)); }}>Aktiviraj</button>
            </TurnirContainer>
            );
        } 
    }
    return (
        rowsAkt.length>0 &&
    <>
            <Section2>
                <SectionNaslov>Neaktivne obavijesti</SectionNaslov>
                <TurnirFlexContainer>
                {rowsAkt}
                </TurnirFlexContainer>
                <br/>
            </Section2>
        </>
    );
};
export default ObavijestProfilComponent;