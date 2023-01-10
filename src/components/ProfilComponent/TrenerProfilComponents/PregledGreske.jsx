import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { odbijPrijavErr, prihvatiPrijavErr } from "../../../utils/FetchFunction";

const PregledGreske = ({show, greska})=>{


    function accept(){
        let date=new Date(greska.taktika.datumTaktika)
        const offset = date.getTimezoneOffset()
        date = new Date(date.getTime() - (offset*60*1000))
       
        prihvatiPrijavErr(greska.clan.osobaId, date.toISOString().split('T')[0])
        alert("prihvaceno rjesenje")
    }

    function decline(){
        let date=new Date(greska.taktika.datumTaktika)
        const offset = date.getTimezoneOffset()
        date = new Date(date.getTime() - (offset*60*1000))
        odbijPrijavErr(greska.clan.osobaId, date.toISOString().split('T')[0])

        alert("odbijeno rjesenje")
    }

    return ( show &&
        <PregledGreskeContainer>
            <h3>{(new Date(greska.taktika.datumTaktika)).toLocaleDateString("en-GB")}</h3>
            
            <div className="poruka">Poruka: {greska.poruka}</div>
            <div className="prijavio">    
              -&gt; {greska.clan.ime + " " + greska.clan.prezime}
            </div>
            <Button onClick={accept}>Prihvati rješenje</Button>
            
            <Button onClick={decline}>Odbij rješenje</Button>
        </PregledGreskeContainer>
    );

}

export default PregledGreske;

const PregledGreskeContainer=styled.div`
    color: #e85a4f;
    padding: 15px;
    h3{
        margin-right: 10px;
    }
    .poruka{
        margin-left: 20px;
    }
    .prijavio{
        margin-left: 35px;
    }
`

const Button= styled.button`
    width: fit-content;
    padding: 5px;
    border: 4px solid #e98074;
    margin: 5px;
    background-color: #efe7db;
    color: #e85a4f;
    font-weight: 600;
    font-size: 1em;
    :hover{
        background-color: #d8c3a5;
    }
`;