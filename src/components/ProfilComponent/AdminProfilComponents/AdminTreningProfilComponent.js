import React, { useEffect, useState } from "react";
import {TreningContainer, 
    NaslovTreninga, 
    OpisTreninga,
    TreningFlexContainer,
    SectionNaslov,
    Section2
} from "../../Treninzi/TreninziStyle";
import Treninzi from "../../../assets/data/treninzi.json"
import {getTreninzi, aktivirajTr, deaktivirajTr} from "../../../utils/FetchFunction"


const AdminTreningProfilComponent = ({user}) => {
    const [treninzi,setTreninzi]= useState([]);
    const [stanje, setStanje] = useState(false);

  
    useEffect(()=>{
        getTreninzi().then(
            (item)=>{
                //console.log(item)
                setTreninzi(item)
            }
        )
        
    }, [])
    let rowsAkt=[];
    let rowsPov=[];
    for(let Trening of treninzi){
        if(Trening.aktivni == false){
            rowsPov.push(
                <TreningContainer key={Trening.mjesto + Trening.vrijemeTreninga}>
                    <NaslovTreninga>{Trening.vrijemeTreninga+ ", "+ (new Date( Trening.datumTreninga)).toLocaleDateString("en-GB") + ", " + " " + Trening.trener.titula + " " +Trening.trener.ime + " " + Trening.trener.prezime}</NaslovTreninga>
                    <OpisTreninga> {"traje: " + Trening.trajanje + " minuta, " + Trening.mjesto} </OpisTreninga>
                    <button class="button" onClick={() => {Trening.aktivni = true; setStanje(!stanje); aktivirajTr(Trening.treningId)}}>Aktiviraj</button>
                </TreningContainer>
            );
        } else {
            rowsAkt.push(
                <TreningContainer key={Trening.mjesto + Trening.vrijemeTreninga}>
                    <NaslovTreninga>{Trening.vrijemeTreninga+ ", "+ (new Date( Trening.datumTreninga)).toLocaleDateString("en-GB") + ", " + Trening.trener.ime +" "+ Trening.trener.prezime}</NaslovTreninga>
                    <OpisTreninga> {"traje: " + Trening.trajanje + " minuta, " + Trening.mjesto} </OpisTreninga>
                    <button class="button" onClick={() => {Trening.aktivni = false; setStanje(!stanje); deaktivirajTr(Trening.treningId)}}>Deaktiviraj</button>
                </TreningContainer>
            );
        }
    }

    return (
        <Section2>
            <SectionNaslov>Aktivni treninzi</SectionNaslov>
            {
                rowsAkt.length>0 &&
                <TreningFlexContainer>
                    {rowsAkt}
                 </TreningFlexContainer>

            }
            
            <br/>
            <SectionNaslov>Neaktivni treninzi</SectionNaslov>
            {
                rowsPov.length>0 &&
                <TreningFlexContainer>
                    {rowsPov}
                </TreningFlexContainer>
            }
            
        </Section2>
    );
};
export default AdminTreningProfilComponent;