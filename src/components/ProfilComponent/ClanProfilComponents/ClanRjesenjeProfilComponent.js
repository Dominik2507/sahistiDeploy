import React, { useEffect, useState } from "react";
import {TreningContainer, 
    NaslovTreninga, 
    OpisTreninga,
    TreningFlexContainer,
    SectionNaslov,
    Section2
} from "../../Treninzi/TreninziStyle";
import {getAllOdgovoriClan} from "../../../utils/FetchFunction"


const ClanRjesenjeProfilComponent = ({user}) => {
    const [rjesenja, setRjesenja]= useState([]);
    let rows=[];

    useEffect(()=>{
        getAllOdgovoriClan().then(
            (item)=>{
                console.log(item)
                
                setRjesenja(item)
            }
        )
        
    }, [])

    let counter=0
    for(let odgovor of rjesenja){
        
        counter++;
        if(counter>10)break;
        rows.push(
            <TreningContainer>
                <NaslovTreninga>{(new Date(odgovor.taktika.datumTaktika)).toLocaleDateString("en-GB")}</NaslovTreninga>
                <OpisTreninga> {"Bodovi: " + odgovor.bodovi} </OpisTreninga>
                <OpisTreninga> {"Ocjenjena težina: " + odgovor.ocjena}/5 </OpisTreninga>
            </TreningContainer>
         );
        
            
    }
    

    return (
        <Section2>
            <SectionNaslov>Odgovori</SectionNaslov>
            <TreningFlexContainer>
                {rows}
            </TreningFlexContainer>
        </Section2>
    );
};
export default ClanRjesenjeProfilComponent;

