import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Clanovi from "../assets/data/clanovi.json"
import Treneri from "../assets/data/treneri.json"
import { blockKorisnik, getAllKorisnikWOAdmin, unblockKorisnik } from "../utils/FetchFunction";

const Members = ({user}) => {
    const [clanovi, setClanovi]=useState([]);
    const [treneri, setTreneri]=useState([]);
    const [reload, setReload]= useState(false)

    useEffect(() => {
        getAllKorisnikWOAdmin().then(
            (item)=>{
                console.log(item)
                
                
                let c=item.filter((item)=>item.uloga==="clan")
                let t=item.filter((item)=>item.uloga==="trener")
                
                setClanovi(c)
                setTreneri(t)
            }
        )
    }, [reload])
    
    const blokiranje=(user)=>{
        user.blokiran===0 ? 
            blockKorisnik(user.osobaId).then((item)=>{setReload(!reload)})
                : 
            unblockKorisnik(user.osobaId).then((item)=>{setReload(!reload)}); 
         
    }
    
    let clanoviHTML=[]
    let treneriHTML=[]
    
    for(let clan of clanovi){
        clanoviHTML.push(
            <div key={clan.osobaId}>
                <span className="member" >{clan.korisnickoIme} <Link to={"/transakcije/"+clan.osobaId}>(transakcije)</Link></span>
                <Button onClick={()=>{blokiranje(clan)}}>
                    {clan.blokiran===0 ? "Blokiraj korisnički račun" : "Odblokiraj korisnika"}
                </Button>
            </div>);
    }
    for(let trener of treneri){
        treneriHTML.push(
            <div key={trener.osobaId}>
                <span className="member">{trener.korisnickoIme}</span>
                <Button onClick={()=>{blokiranje(trener)}}>
                        {trener.blokiran===0 ? "Blokiraj korisnički račun" : "Odblokiraj korisnika"}
                </Button>
            </div>);
    }
    
    if(user.userId===null || user.role==="clan" || user.role==="trener") return (<Navigate to={"/"}/>)
    return (
        <MembersContainer>
            <h1>Clanovi</h1>
            {clanoviHTML}
            <h1>Treneri</h1>
            {treneriHTML}
        </MembersContainer>
    );
}

export default Members;

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

const MembersContainer=styled.div`
    color: #e85a4f;
    padding: 15px;
    div{
        margin-left: 20px;
    }
    .member{
        font-size: 1.4rem;
        display: inline-block;
        min-width: 100px;
        padding-right: 10px;
        a{
            color: #e85a4f;
        }
    }
    
    
`