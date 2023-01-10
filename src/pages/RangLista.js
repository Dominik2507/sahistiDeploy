import React, { useEffect, useState } from "react";
import Clanovi from "../assets/data/clanovi.json"
import { getAllClanOrderByPoints } from "../utils/FetchFunction";

import styled from "styled-components";

const RangLista = ({user}) => {

    const [clanovi, setClanovi]=useState([]);
    
    useEffect(() => {
        getAllClanOrderByPoints().then(
            (item)=>{
                setClanovi(item)
                console.log(item)
            }
        )
        
    }, [])

    
    let rows=[]
    let counter=1;
    for(let clan of clanovi){
        rows.push(<RangListaRow key={counter} id={clan.osobaId}><span className="number">{counter + ". "}</span> <span className="ime">{clan.ime+ " " + clan.prezime }</span> <span className="bodovi"> {clan.bodovi}</span></RangListaRow>);
        counter++;
    }
    
    if(user && user.userId!==null && user.userId!=="" && user.role==="clan"){

        let userRank=document.getElementById(user.userId);
        if(userRank){
            userRank.style.background="#D8C3A5";
        }
        
    }
    return (
        <RangListaContainer>
            <RangListaHeader>Rang lista</RangListaHeader>
            <RangListaRow>
                <span className="number">#</span>
                <span className="ime">Član</span>
                <span className="bodovi">Bodovi</span>
            </RangListaRow>
            {rows}
        </RangListaContainer>
    );
}

export default RangLista;

const RangListaHeader=styled.div`
    text-align: center;
    padding: 15px;
    font-size: 1.8em;
    
    color: #e85a4f;
`
const RangListaContainer=styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    color: #e85a4f;
`
const RangListaRow=styled.div`
    width:80
    margin: 15px;
    .number{
        display: inline-block;
        padding: 10px;
        width: 30px;
        
    }
    .ime{
        display: inline-block;
        padding: 10px;
        width: 200px;
        
    }
    .bodovi{
        display: inline-block;
        padding: 10px;
        width: 50px;
        
    }
`