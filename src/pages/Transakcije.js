import React, { useEffect, useState } from "react";

import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { InputLabel, InputOption, SelectBox } from "../components/DodajTreningComponent/DodajTreningStyle";
import { getAllClanNoOrder, getProfil, suspendClan, unsuspendClan} from "../utils/FetchFunction";
import { platiClanarinu, logout } from "../utils/FetchFunction";
import { getClanarinaByClanId } from "../utils/FetchFunction";
import styled from "styled-components";
const MONTH=0;
const YEAR=1;

const Transakcije= ({user, setUser}) => {
   const [transakcije, setTransakcije]= useState([])
   const [clan, setClan]=useState({})
   const [reload, setReload]= useState(false)
   const [form, handleForm]=useState({"iznos":125,"mjesec":"mm/yy"}) //TODO: temp fix
   const [options, setOptions]=useState([])
   let params=useParams();
   const navigate=useNavigate()
   var today= new Date().toISOString().slice(0, 10);

   let transakcijeHTML=[]
   for(let transakcija of transakcije){
    transakcijeHTML.push(
        <div className="transakcija" key={transakcija.mjesec}>
            <div className="mjesecTransakcije"> - {(new Date(transakcija.mjesec)).toLocaleDateString("en-GB").substring(3)} - {transakcija.iznos} kn </div>
            <div className="datumPlaceno"> -&gt; Placeno {(new Date(transakcija.datumUplate)).toLocaleDateString("en-GB")}</div>
        </div>
    )
   }
   let optionsHTML=[]
   for(let option of options){
    optionsHTML.push(
        
        <InputOption key={`${option[MONTH]}/${option[YEAR]%100}`} value={`${option[MONTH]}/${option[YEAR]%100}`}> {`${option[MONTH]}/${option[YEAR]%100}`}</InputOption>
    )
   }
   
   const suspendiranje=()=>{
        clan?.suspendiran===0 ? 
            suspendClan(params.id).then((item)=>{setReload(!reload)})
                : 
            unsuspendClan(params.id).then((item)=>{setReload(!reload)}); 
         
    }
    let handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        handleForm({...form,[name]:value})
    }
  
    let HandleSubmit= (e)=> {
        e.preventDefault();
        
        platiClanarinu(form).then(
            (result)=>{
                if(result===undefined) return;
                setReload(!reload)

        })
        return;
    }
    
   
   useEffect(()=>{
        getAllClanNoOrder().then(item=>
            {
                let c=item.find((v)=>{return v.osobaId==params.id})
                setClan(c)
                getClanarinaByClanId(params.id).then((result)=>{
                    console.log(result);
                    setTransakcije(result)
                    let joinedDate=[parseInt(c.clanOd.split("-")[1]), parseInt(c.clanOd.split("-")[0])];
                    let todayDate=[parseInt(today.split("-")[1]), parseInt(today.split("-")[0])];
                    console.log(joinedDate)
                    let temp=joinedDate;
                    let tempArray=[];
                    do{
                     tempArray.push(temp);
                     if(temp[MONTH]>=12){
                        temp=[1, temp[YEAR]+1]
                     }else{
                        temp=[temp[MONTH]+1, temp[YEAR]]
                     }
                    }while(temp[YEAR]<todayDate[YEAR] || (temp[YEAR]<=todayDate[YEAR] && temp[MONTH]<=todayDate[MONTH]));
                    
                    let optionsArray=tempArray.filter(
                            (datePair)=>{
                                for(let transakcija of result){
                                        let mjesecString=(new Date(transakcija.mjesec)).toLocaleDateString("en-GB");

                                        if(mjesecString.indexOf(`${datePair[MONTH]}/${datePair[YEAR]}`)>=0) return false;
                                }
                                    
                                return true;
                            })
                    if(optionsArray.length===0) return;
                    handleForm({...form, "mjesec": `${optionsArray[0][MONTH]}/${optionsArray[0][YEAR]%100}`})
                    setOptions(optionsArray)
                }) 
            })

       //console.log(user.user)
        

   },[reload])
   
   if(user.userId===null || user.role==="trener") return (<Navigate to={"/"}/>)
    return (
        <>
           {params.id===user.userId ?
            <div hidden={optionsHTML.length===0}>
                {clan?.suspendiran===1 && <Suspended> Admin je suspendirao vaš račun. Molim Vas da platite zaostatke članarina.</Suspended>}
                <StyledH1>Plati članstvo:</StyledH1>
                <form action="/" onSubmit={(e)=>{ e.preventDefault();  HandleSubmit(e);}}>
                    
                    <InputContainer>
                        <InputLabel for="mjesec"> Mjesec: </InputLabel>
                        <SelectBox required type={"text"} name="mjesec" id="mjesec" value={form.mjesec} onChange={(e)=>handleInputChange(e)} placeholder="mm/yy">
                            <InputOption value="mm/yy" disabled >mm/yy</InputOption>
                            {optionsHTML}
                        </SelectBox>
                        
                    </InputContainer>
                    <InputContainer>
                        <InputLabel for="iznos"> Cijena[kn]: </InputLabel>
                        <InputBox readOnly name="iznos" id="iznos" value={form.iznos} onChange={(e)=>handleInputChange(e)} placeholder="125.00 kn"></InputBox>
                    </InputContainer>

                    <InputButton type={"submit"} value="Plati"/>
                   
                    
                </form>
            </div>
            :
            <div>
                <StyledH1>{clan?.ime + " "+ clan?.prezime + " "} </StyledH1>
                <ClanOd> Član od: {(new Date(clan?.clanOd)).toLocaleDateString("en-GB")}</ClanOd>
                <Button onClick={suspendiranje}>
                    {clan?.suspendiran===0 ? "Suspendiraj člana" : "Vrati članu pristup uslugama"}
                </Button>
            </div>
           }
           <TransakcijeContainer>
                <h2>Transakcije</h2>
                {transakcijeHTML}
           
           </TransakcijeContainer>
           {clan?.suspendiran===1 && user.role==="clan" &&
              <Button onClick={
                    ()=>{
                        logout().then(()=>{
                            setUser({role: null, userId: null}); 
                            navigate("/")
                            })
                        }
                    }> Odjavi se</Button>
           }
        </>
    );
};
export default Transakcije;
const Suspended=styled.div`
    color: #e85a4f;
    font-size: 1.4em;
    margin: 10px;
    margin-bottom: 5px;
`

const ClanOd=styled.div`
    color: #e85a4f;
    margin-left: 30px;
    margin-bottom: 5px;
`

const StyledH1=styled.h1`
    color: #e85a4f;
    padding: 5px;
    margin-left: 10px;
`

const InputBox = styled.input`
    width: 40px;
    text-align:center;
    background-color: #eae7dc;
    border: 2px solid #e98074;
    border-radius: 10px;
    padding: 5px;
    outline: none;
    :focus{
      background-color: #ebe1d2;
      border: 3px solid #e85a4f;
    }
    transition: all ease .1s;
`;
const InputContainer = styled.div`
    width: 25vw;
    color: #e85a4f;
    padding: 5px;
    margin-left: 10px;
    border-left: 1px solid #E98074;
    background-color: #efe7db;
    label {
        padding: 5px;
    }
`;
const InputButton= styled.input`
    width: fit-content;
    padding: 10px;
    border: 4px solid #e98074;
    margin: 5px;
    margin-left: 100px;
    background-color: #efe7db;
    color: #e85a4f;
    font-weight: 600;
    font-size: 1em;
    :hover{
        background-color: #d8c3a5;
    }
`;
const TransakcijeContainer=styled.div`
    padding: 10px;
    color: #e85a4f;
    h2{
        padding: 5px;
        margin-left: 10px;   
    }
    .transakcija{
        margin-left: 30px;
        padding:5px;
    }
    .datumPlaceno{
        margin-left: 35px;
    }
`
const Button= styled.button`
    width: fit-content;
    padding: 5px;
    border: 4px solid #e98074;
    margin: 5px;
    margin-left: 30px;
    display:inline-block;
    background-color: #efe7db;
    color: #e85a4f;
    font-weight: 600;
    font-size: 1em;
    :hover{
        background-color: #d8c3a5;
    }
`;